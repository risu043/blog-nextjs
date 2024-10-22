import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

async function fetchOGPData(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const getMetaTag = (name: string) => {
    return (
      $(`meta[name=${name}]`).attr('content') ||
      $(`meta[property="og:${name}"]`).attr('content') ||
      $(`meta[property="twitter:${name}"]`).attr('content')
    );
  };

  return {
    title: getMetaTag('title'),
    description: getMetaTag('description'),
    image: getMetaTag('image'),
  };
}

export const formatRichText = async (richText: string) => {
  const $ = cheerio.load(richText);

  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, {
        language: lang?.replace(/^language-/, '') || '',
      });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };

  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });

  const promises = $('a')
    .map(async (_, elm) => {
      const link = $(elm).attr('href');
      if (link) {
        try {
          const res = await fetchOGPData(link);
          if (res.description) {
            const truncatedDescription =
              res.description.length > 40
                ? res.description.substring(0, 40) + '...'
                : res.description;
            const blogCardHTML = `
                <div>
                  <div class="blog-card">
                    <div>
                      <h4>${res.title}</h4>
                      <p>${truncatedDescription}</p>
                      <p>${link}</p>
                    </div>
                    <img src="${res.image}" alt="OGP image" width="200" />
                  </div>
                </div>
              `;
            $(elm).html(blogCardHTML);
            $(elm).attr('href', link);
          }
        } catch (error) {
          console.log(error, 'error');
        }
      }
    })
    .get();

  await Promise.all(promises);

  return $.html();
};
