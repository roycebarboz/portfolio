import useInView from '../useInView';
import { runs } from '../data';
import './Runs.css';

const fmt = (v, unit) => (unit === '%' ? `${v}%` : v.toFixed(2));
const gain = (r) => {
  const d = r.to - r.from;
  return r.unit === '%' ? `+${d} pts` : `+${d.toFixed(2)}`;
};

function Run({ run }) {
  const [ref, seen] = useInView();
  const paired = run.rows[0].from !== undefined;
  return (
    <article className={`run${seen ? ' run--seen' : ''}`} ref={ref} aria-labelledby={`run-${run.id}`}>
      <div className="run__id">
        <h3 id={`run-${run.id}`} className="run__name">
          {run.name}
        </h3>
        <p className="run__stack">{run.stack}</p>
        <p className="run__summary">{run.summary}</p>
        <a className="run__link" href={run.href} target="_blank" rel="noopener noreferrer">
          Source on GitHub
        </a>
      </div>

      <div className="run__data">
        <table className="tally">
          <caption>{run.caption}</caption>
          <thead>
            <tr>
              <th scope="col">Measure</th>
              {paired ? (
                <>
                  <th scope="col" className="num num--base">
                    Baseline
                  </th>
                  <th scope="col" className="num num--tuned">
                    Tuned
                  </th>
                  <th scope="col" className="num">
                    Gain
                  </th>
                </>
              ) : (
                <th scope="col" className="num">
                  Result
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {run.rows.map((r) => (
              <tr key={r.metric}>
                <th scope="row">
                  {r.metric}
                  <span className="tally__note">{r.note}</span>
                </th>
                {paired ? (
                  <>
                    <td className="num num--base">{fmt(r.from, r.unit)}</td>
                    <td className="num num--tuned">{fmt(r.to, r.unit)}</td>
                    <td className="num">
                      <span className="gain">{gain(r)}</span>
                    </td>
                  </>
                ) : (
                  <td className="num">
                    <span className="gain">{r.value}</span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {run.id !== 'verity' && (
          <dl className="readout readout--run">
            {run.readout.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul className="run__notes">
          {run.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Runs() {
  return (
    <section className="runs wrap" id="runs" aria-labelledby="runs-title">
      <h2 id="runs-title" className="section-title">
        Projects
      </h2>
      <p className="section-lede">Measured: each project is a baseline run and a tuned run on the same test set.</p>
      {runs.map((run) => (
        <Run key={run.id} run={run} />
      ))}
    </section>
  );
}
