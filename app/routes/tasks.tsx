import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import summaryWithControlButtonStyle from '~/styles/summary-control.css';

export default function Tasks() {
  return (<>
    <Outlet />
  </>);
}

export const links:LinksFunction = () => {
  return [{
    rel: 'stylesheet',
    href: summaryWithControlButtonStyle,
  }];
};
