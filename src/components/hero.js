export function renderHero() {
  return `
    <section class="hero relative z-10 dark:bg-black bg-white dark:text-white h-[90vh] grid place-items-center overflow-hidden">
      <div class="px-8 sm:px-12 md:px-32 text-center">
        <h2 class="text-lg sm:text-xl md:text-2xl">Hi! I'm Vamsi, delighted to see you.</h2>
        <p class="mt-4 text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-ragnear uppercase">
          I bring your <span class="text-blue-400/90">concepts</span> to life with 
          <span class="text-orange-500">innovative</span> web Solutions.
        </p>
      </div>

      <div class="relative flex overflow-x-hidden -rotate-2 sm:-rotate-3 bg-red-700 font-ragnear">
        <div class="relative w-full whitespace-nowrap">
          <div class="py-2 flex items-center gap- animate-marquee whitespace-nowrap">
            ${generateQuoteLine()}
          </div>
            
           <div class="absolute top-0 left-full inline-flex items-center py-2 animate-marquee">
           ${generateQuoteLine()}
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <span>v</span>
        <p>scroll</p>
      </div>
    </section>
  `;
}

function generateQuoteLine() {
  const quote =
    "Being a full‑stack developer means speaking the languages of both design and data";
  const star = "&#10058;";
  return Array.from(
    { length: 2 },
    () => `
    <span class="text-base sm:text-2xl md:text-4xl lg:text-6xl mx-2 sm:mx-4">${quote}</span>
    <span class="text-3xl font-bold">${star}</span>
  `
  ).join("");
}
