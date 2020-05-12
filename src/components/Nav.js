import Link from 'next/link'
import { useState } from 'react';


const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu open state

  return (
    <nav className="bg-indigo-700">
      <Link href="/editor"><a>editor</a></Link>
    </nav>
  );
}


export default Nav