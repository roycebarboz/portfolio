import { useEffect, useRef, useState } from 'react';
import useInView from '../useInView';
import { heroPlot } from '../data';
import './RunPlot.css';

const PAD = 10;
const LEGEND = 30;
const ROW = 112;
const AXIS = 34;
const ticks = [0, 25, 50, 75, 100];

export default function RunPlot() {
  const [boxRef, seen] = useInView();
  const wrapRef = useRef(null);
  const [width, setWidth] = useState(640);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return undefined;
    const measure = () => setWidth(Math.max(260, node.clientWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const rows = heroPlot.traces.length;
  const height = LEGEND + rows * ROW + AXIS;
  const x = (v) => PAD + (v / 100) * (width - PAD * 2);
  const aria = heroPlot.traces
    .map((t) => `${t.label} ${t.fromText} to ${t.toText}`)
    .join(', ');

  return (
    <figure className={`plot${seen ? ' plot--run' : ''}`} ref={boxRef}>
      <div className="plot__head">
        <span>Run: {heroPlot.name}</span>
        <span>{heroPlot.axis}</span>
      </div>
      <div className="plot__body">
        <div ref={wrapRef}>
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label={`${heroPlot.name}, baseline to tuned: ${aria}.`}
          >
            <circle className="plot__dot plot__dot--base" cx={PAD + 5} cy={12} r={5} />
            <text className="plot__col" x={PAD + 16} y={16}>
              BASELINE
            </text>
            <circle className="plot__dot plot__dot--tuned" cx={PAD + 112} cy={12} r={5} />
            <text className="plot__col plot__col--tuned" x={PAD + 123} y={16}>
              TUNED
            </text>

            {ticks.map((t) => (
              <g key={t}>
                <line
                  className="plot__grid"
                  x1={x(t)}
                  x2={x(t)}
                  y1={LEGEND}
                  y2={LEGEND + rows * ROW}
                />
                <text
                  className="plot__tick"
                  x={x(t)}
                  y={LEGEND + rows * ROW + 20}
                  textAnchor={t === 0 ? 'start' : t === 100 ? 'end' : 'middle'}
                >
                  {t}
                </text>
              </g>
            ))}

            {heroPlot.traces.map((t, i) => {
              const top = LEGEND + i * ROW;
              const ty = top + 56;
              const len = x(t.to) - x(t.from);
              return (
                <g key={t.id} style={{ '--i': i }}>
                  {i > 0 && <line className="plot__sep" x1={0} x2={width} y1={top} y2={top} />}
                  <text className="plot__name" x={PAD} y={top + 24}>
                    {t.label}
                  </text>
                  <g className="plot__end">
                    <rect
                      className="plot__mark"
                      x={width - PAD - 4 - t.gainText.length * 8.6 - 10}
                      y={top + 8}
                      width={t.gainText.length * 8.6 + 14}
                      height={24}
                    />
                    <text
                      className="plot__val plot__val--gain"
                      x={width - PAD - 4}
                      y={top + 26}
                      textAnchor="end"
                    >
                      {t.gainText}
                    </text>
                  </g>
                  <line
                    className="plot__trace"
                    x1={x(t.from)}
                    y1={ty}
                    x2={x(t.to)}
                    y2={ty}
                    style={{ '--len': len }}
                  />
                  <circle className="plot__dot plot__dot--base" cx={x(t.from)} cy={ty} r={7} />
                  <text
                    className="plot__val plot__val--base"
                    x={x(t.from) - 4}
                    y={ty + 32}
                    textAnchor="end"
                  >
                    {t.fromText}
                  </text>
                  <g className="plot__end">
                    <circle className="plot__dot plot__dot--tuned" cx={x(t.to)} cy={ty} r={8} />
                    <text
                      className="plot__val plot__val--tuned"
                      x={x(t.to) + 4}
                      y={ty + 32}
                    >
                      {t.toText}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <div className="plot__peak">
        <span className="plot__peak-num">{heroPlot.peak.gain}</span>
        <span className="plot__peak-unit">{heroPlot.peak.unit}</span>
        <span className="plot__peak-label">{heroPlot.peak.label}</span>
      </div>
      <figcaption className="plot__caption">{heroPlot.caption}</figcaption>
    </figure>
  );
}
