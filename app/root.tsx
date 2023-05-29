import type { LinksFunction, LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta, Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import mainStyles from '~/styles/main.css';
import sideMenuStyles from '~/styles/side-menu.css';

import { BasicNavLink as NavLink } from '~/ui-components/BasicNavLink';
import { getUserSession } from '~/session';

export default function App() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <html lang='en' data-theme='dark'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className='container-fluid'>
          <ul>
            <li>
              <strong>Team Task Manager</strong>
            </li>
          </ul>
          <ul>
            {!user && (<>
              <li><NavLink to='/sign-in'>sign in</NavLink></li>
              <li><NavLink to='/create-an-account'>sign up</NavLink></li>
            </>)}
            {user && (<>
              <li><NavLink to='/account'>{user.name}</NavLink></li>
              <li><NavLink to='/sign-out'>sign out</NavLink></li>
            </>)}
          </ul>
        </nav>
        <main className='container'>
          <aside>
            {user && (<>
              <nav className='closed-on-mobile'>
                <ul>
                  <li><NavLink to='/users'>users</NavLink></li>
                  <li><NavLink to='/organizations'>organizations</NavLink></li>
                  <li><NavLink to='/roles'>roles</NavLink></li>
                  <li><NavLink to='/permissions'>permissions</NavLink></li>
                  <li><NavLink to='/projects'>projects</NavLink></li>
                  <li><NavLink to='/topics'>topics</NavLink></li>
                  <li><NavLink to='/taskstatus'>task status</NavLink></li>
                  <li><NavLink to='/tasks'>tasks</NavLink></li>
                  <li><NavLink to='/resources'>resources</NavLink></li>
                  <li><NavLink to='/logs'>logs</NavLink></li>
                  <li><NavLink to='/reports'>reports</NavLink></li>
                </ul>
              </nav>
            </>)}
          </aside>
          <div role='document'>
            <section>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </section>
          </div>
        </main>
        <footer>
          
        </footer>
      </body>
    </html>
  );
}

export function ErrorBoundry({ error }:any) {
  console.error(error);
  return (
    <html lang='en'>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Sorry</h1>
        {error.message}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const { user } = await getUserSession(request);
  return { user };
};

export function CatchBoundry() {
  const caught = useCatch();

  console.error(caught);
  return (
    <html lang='en'>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Sorry</h1>
        {caught.statusText}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links:LinksFunction = () => {
  return [{
    rel: 'stylesheet',
    href: 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css',
  }, {
    rel: 'stylesheet',
    href: 'https://cdn.lineicons.com/4.0/lineicons.css'
  }, {
    rel: 'stylesheet',
    href: mainStyles,
  }, {
    rel: 'stylesheet',
    href: sideMenuStyles,
  }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Team Task Manager',
  viewport: 'width=device-width,initial-scale=1',
});