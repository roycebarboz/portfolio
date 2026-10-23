import { log } from '../data';
import './Log.css';

export default function Log() {
  return (
    <section className="log wrap" id="log" aria-labelledby="log-title">
      <h2 id="log-title" className="section-title">
        Experience
      </h2>
      <p className="section-lede">Work log: the result first, then how.</p>
      <ol className="log__list">
        {log.map((e) => (
          <li key={e.place} className="log__row">
            <p className="log__dates">{e.dates}</p>
            <div>
              <h3 className="log__place">{e.place}</h3>
              <p className="log__result">{e.result}</p>
              <p className="log__detail">{e.detail}</p>
              <a className="run__link" href={e.href} target="_blank" rel="noopener noreferrer">
                Source on GitHub
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
