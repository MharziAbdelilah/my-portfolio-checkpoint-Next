// components/Navigation.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/projects">Projects</Link> | 
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
