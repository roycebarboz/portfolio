import RunPlot from './RunPlot';
import { profile, runs } from '../data';
import './Hero.css';

export default function Hero() {
  const lead = runs[0];
  return (
    <section className="hero wrap" id="top">
      <div className="hero__copy">
        <h1 className="hero__name">
          Royce
          <br />
          Barboz
        </h1>
        <p className="hero__claim">{profile.claim}</p>
        <p className="hero__cred">
          {profile.title}. {profile.credential}.
        </p>
        <div className="hero__actions">
          <a
            className="btn btn--solid"
            href={`${import.meta.env.BASE_URL}images/Royce_AI_Engineer.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a className="btn btn--line" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </div>
      <div className="hero__run">
        <RunPlot />
        <dl className="readout">
          {lead.readout.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
