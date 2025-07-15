export function renderExperience() {
  return `
    <section id="experienceSection" class="relative  px-6 md:px-32 py-16 overflow-hidden dark:bg-black dark:text-white">
      <div class=" overflow-hidden ">
        <h2 id="ExperienceHeadText" class="experienceHeadText text-4xl md:text-8xl font-bold font-ragnear">
          Experience
        </h2>
        <div class="text-container relative ml-auto z-50 mt-14 mb-14 p-8 w-full h-[60vh] md:w-1/2  lg:w-1/2  rounded-2xl bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
        <!-- Company header -->
        <div class="flex items-center mb-6">
          <img
            src="assets/Aranyu_Logo.jpg"
            alt="Aranyu Technologies Logo"
            class="h-14 md:h-16 w-14 md:w-16 mr-4 rounded-xl object-cover"
          />
          <div>
            <h3 class="text-2xl md:text-4xl  font-ragnear font-bold text-gray-900 dark:text-white">
              Aranyu Technologies Pvt Ltd
            </h3>
            <p class="text-sm md:text-lg text-gray-500 dark:text-gray-400">
              PHP Developer Intern
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              March 2025 – Present
            </p>
          </div>
        </div>

        <!-- Key responsibilities -->
       <ul class="list-disc list-inside font-ragnea racking-wider space-y-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p class="reveal-text text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
            As a PHP Developer Intern, I gained hands‑on experience with PHP and the Laravel framework, contributing to the development of a feature‑rich Admin Panel for content management, user roles, and permissions. I also built the User Panel using Laravel Blade templates to enable profile management, dashboards, and real‑time notifications, and implemented the Vendor Panel with Eloquent ORM to handle product uploads, order tracking, and reporting.
          </p>

        </ul>


        <!-- Tech stack tags -->
        <div class="mt-6 flex flex-wrap gap-2 ">
          <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            PHP
          </span>
          <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            Bootstrap
          </span>
          <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            Laravel
          </span>
          <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            MySQL
          </span>
        </div>
      </div>

      </div>

      <!-- Scrolling Background Years -->
      <div class="absolute top-1/2 left-0 w-full -translate-y-1/4 -z-1">
        <div class="flex items-center  space-y-6 ">
          <div class="flex animate-year font-bold font-ragnear text-nowrap text-gray-800 items-center">
            ${generateYearLine()}
          </div>
          <div class="flex animate-year font-bold font-ragnear text-nowrap text-gray-800 items-center">
            ${generateYearLine()}
          </div>
        </div>
      </div>
    </section>
  `;
}

// Helper to reduce repetition
function generateYearLine() {
  const year = "2025";
  const star = "&#10058;";
  return Array.from(
    { length: 9 },
    () => `
    <span class="text-base sm:text-2xl md:text-6xl lg:text-[275px] mx-2 sm:mx-4">${year}</span>
    <span class="text-base sm:text-2xl md:text-6xl lg:text-[220px] mx-2 sm:mx-4">${star}</span>
  `
  ).join("");
}
