const reportWebVitals = (metric) => {
  const { name, label, delta, id } = metric;

  // eslint-disable-next-line no-console
  console.log(metric);

  // make sure google analytics is loaded
  if (!window || !window.ga) return;

  window.ga('send', 'event', {
    vent_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    eventLabel: id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Use a non-interaction event to avoid affecting bounce rate.
    nonInteraction: true,
    // Use `sendBeacon()` if the browser supports it.
    transport: 'beacon',
  });
};

export { reportWebVitals };
