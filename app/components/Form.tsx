'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import TextInput from './TextInput';
import TextArea from './TextArea';
import InputLabel from './InputLabel';
import Button from './Button';
import { Spinner } from './Spinner';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('送信が完了いたしました！');
        reset();
      } else {
        throw new Error('送信時にエラーが発生しました');
      }
    } catch (error) {
      toast.error('送信時にエラーが発生しました');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-4">
          <InputLabel htmlFor="name" value="名前" />
          <TextInput
            id="name"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-rose-600">名前は必須です</span>}
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="email" value="email" />
          <TextInput
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-rose-600">Emailは必須です</span>
          )}
        </div>
        <div className="mb-8">
          <InputLabel htmlFor="message" value="お問い合わせ内容" />
          <TextArea id="message" {...register('message', { required: true })} />
          {errors.message && (
            <span className="text-rose-600">お問い合わせ内容は必須です</span>
          )}
        </div>
        <Button type="submit" isSubmitting={isSubmitting}>
          {isSubmitting ? <Spinner /> : '送信する'}
        </Button>
      </form>
    </>
  );
}
