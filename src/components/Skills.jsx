import { skills, credentials } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills wrap" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills and credentials
      </h2>
      <div className="skills__grid">
        <dl className="skills__list">
          {skills.map((s, i) => (
            <div key={s.group} className={i === 0 ? 'skills__row skills__row--lead' : 'skills__row'}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
        <ul className="creds">
          {credentials.map((c) => (
            <li key={c.what}>
              <span className="creds__when">{c.when}</span>
              <span>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.what}
                  </a>
                ) : (
                  c.what
                )}
                {c.extra && <span className="creds__extra">{c.extra}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
