'use client';

import { login } from '@/actions/login';
import React from 'react';

export default function Login() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await login(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Senha</label>
      <input type="text" id="password" name="password" />
      <button>Login</button>
    </form>
  );
}
