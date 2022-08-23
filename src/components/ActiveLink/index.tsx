import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProsps extends LinkProps{
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink ({children, activeClassName, ...rest}: ActiveLinkProsps) {
  const { asPath } = useRouter();  

  const className = asPath === rest.href ? activeClassName : '';

  return(
  <Link {...rest}>
    {cloneElement(children, 
      {className} 
      )}
  </Link>
  )
}