import { profile } from '../data';
import './Header.css';

const links = [
  { label: 'Projects', href: '#runs' },
  { label: 'Experience', href: '#log' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sheet-header">
      <div className="wrap sheet-header__row">
        <a className="sheet-header__brand" href="#top">
          {profile.name}
        </a>
        <nav className="sheet-header__nav" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--solid sheet-header__cv"
          href={`${import.meta.env.BASE_URL}images/Royce_AI_Engineer.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
