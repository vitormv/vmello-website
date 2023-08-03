import type { NextWebVitalsMetric } from 'next/app';
import { isDevelopment } from './isDevelopment';

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  const { name, label, value, id } = metric;

  if (isDevelopment()) {
    // eslint-disable-next-line no-console
    console.log(metric);
  }

  // make sure google analytics is loaded
  if (!window || !window.gtag) return;

  window.gtag('event', name, {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
};

export { reportWebVitals };
