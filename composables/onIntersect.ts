export const onIntersect = (elements: HTMLElement[], callback: Function, outCallback = (target: Element) => {}, once: boolean = true, options: object = {}) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry && entry.isIntersecting) {
        callback(entry.target);

        if (once) {
          observer.unobserve(entry.target);
        }
      } else {
        outCallback(entry.target);
      }
    });
  }, options);

  elements.forEach(elem => observer.observe(elem));
  return observer;
};
