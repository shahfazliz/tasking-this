import { NavLink } from '@remix-run/react';

function BasicNavLink({prefetch='intent', role='', to, children}) {
  return (<NavLink
    prefetch={prefetch}
    to={to}
    role={role}
  >
    {children}
  </NavLink>);
}

export { BasicNavLink };
