import { useForm, FormProvider } from 'react-hook-form';

import { Form } from '@/components/form';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { loginSchema, LoginDataType } from './schema';

export default function Login() {
  const loginForm = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit } = loginForm;

  async function login(data: LoginDataType) {
    console.log(data);
    const { email, password } = data;
    const { data: payload } = await axios.post('/api/login', {
      email,
      password,
    });
    const { data: verification } = await axios.post('/api/validate', {
      jwt: payload.jwt,
    });
    console.log(verification);
  }

  return (
    <div className="h-full min-h-screen bg-gray-50">
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entre na plataforma
            </h2>
          </div>
          <FormProvider {...loginForm}>
            <form onSubmit={handleSubmit(login)} className="mt-8 space-y-0.5">
              <input type="hidden" name="remember" defaultValue="true" />
              <Form.Field className="rounded-none">
                <Form.Label className="sr-only" htmlFor="email">
                  E-mail
                </Form.Label>
                <Form.Input
                  className="rounded-none rounded-t-md"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <Form.ErrorMessage field="email" />
              </Form.Field>
              <Form.Field>
                <Form.Label className="sr-only" htmlFor="password">
                  Senha
                </Form.Label>
                <Form.Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="rounded-none rounded-b-md"
                />
                <Form.ErrorMessage field="password" />
              </Form.Field>
              <div className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Lembrar-me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Esqueci minha senha
                    </a>
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Entrar
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
