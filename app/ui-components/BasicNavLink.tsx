import { NavLink } from '@remix-run/react';

// "none" - Default behavior. This will prevent any prefetching from happening. This is recommended when linking to pages that require a user session that the browser won't be able to prefetch anyway.
// "intent" - Recommended if you want to prefetch. Fetches when Remix thinks the user intends to visit the link. Right now the behavior is simple: if they hover or focus the link it will prefetch the resources. In the future we hope to make this even smarter. Links with large click areas/padding get a bit of a head start. It is worth noting that when using prefetch="intent", <link rel="prefetch"> elements will be inserted on hover/focus and removed if the <Link> loses hover/focus. Without proper cache-control headers on your loaders, this could result in repeated prefetch loads if a user continually hovers on and off a link.
// "render" - Fetches when the link is rendered.

type BasicNavLinkProps = {
  prefetch?: 'none' | 'intent' | 'render';
  role?: string;
  to: string;
  dataTooltip?: string;
  children: React.ReactNode;
};

type NavLinkProps = {
  to: string;
  role?: string;
  text?: string;
};

const BasicNavLink = ({prefetch='none', role='', to, children, dataTooltip}: BasicNavLinkProps) => {
  return (<NavLink
    prefetch={prefetch}
    to={to}
    role={role}
    data-tooltip={dataTooltip}
  >
    {children}
  </NavLink>);
};

const CreateNavLink = ({to, role, text}: NavLinkProps) => {
  return <BasicNavLink to={to} role={role}><i style={{position: 'relative', top: '2px'}} className='lni lni-plus' title='create'></i><span> {text}</span></BasicNavLink>
};

const UpdateNavLink = ({to}: NavLinkProps) => {
  return <BasicNavLink to={to} dataTooltip='update'><i className='lni lni-pencil'></i></BasicNavLink>
};

const DeleteNavLink = ({to}: NavLinkProps) => {
  return <BasicNavLink to={to} dataTooltip='delete'><i className='lni lni-trash-can'></i></BasicNavLink>
}

export { 
  BasicNavLink,
  CreateNavLink,
  DeleteNavLink,
  UpdateNavLink,
};
