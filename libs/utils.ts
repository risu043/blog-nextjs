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
            const truncatedTitle =
              res.title && res.title.length > 30
                ? res.title.substring(0, 40) + '...'
                : res.title;
            const truncatedDescription =
              res.description.length > 40
                ? res.description.substring(0, 40) + '...'
                : res.description;
            const domain = new URL(link).hostname;
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=16`;
            const blogCardHTML = `
                <div>
                  <div class="blog-card">
                    <div>
                      <h4>${truncatedTitle}</h4>
                      <p>${truncatedDescription}</p>
                      <p class="domain-container">
                      <img src="${faviconUrl}" alt="favicon" width="16" height="16" />
                      <span style="vertical-align: middle;">${domain}</span>
                    </p>
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
