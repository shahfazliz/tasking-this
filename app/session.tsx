import {
  createCookie,
  createFileSessionStorage
} from '@remix-run/node';
import { search as searchUser } from '~/model/User';

// In this example the Cookie is created separately.
const sessionCookie = createCookie('__session', {
  secrets: ['r3m1xr0ck5'],
  sameSite: true,
});

const { getSession, commitSession, destroySession } =
  createFileSessionStorage({
    // The root directory where you want to store the files.
    // Make sure it's writable!
    dir: 'user-sessions',
    cookie: sessionCookie,
  });

const getUserSession = async(request) => {
  const session = await getSession(request.headers.get('Cookie'));
  const userId = session.get('id');
  const users = userId
    ? await searchUser({ id: userId })
    : [];

  return {
    session,
    user: users[0],
  };
};

const setCookieHeader = async(session) => {
  return {
    'Set-Cookie': await commitSession(session),
  }
};

const destroyCookieHeader = async(request) => {
  return {
    'Set-Cookie': await destroySession(request)
  };
};

export { getUserSession, setCookieHeader, destroyCookieHeader };
