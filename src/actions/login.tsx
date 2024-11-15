'use server';

import { cookies } from 'next/headers';

export async function login(username: string, password: string) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
