declare global {
  interface Window {
    // add you custom properties and methods
    gtag: UniversalAnalytics.ga;
  }
}

export {};
