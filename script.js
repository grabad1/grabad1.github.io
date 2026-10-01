const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = document.querySelectorAll(".reveal");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 }
  );

  document.documentElement.classList.add("motion");
  for (const element of revealElements) {
    observer.observe(element);
  }

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.remove("motion");
      observer.disconnect();
    }
  });
}
