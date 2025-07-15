// src/components/Projects.js
import { projects } from "../data";

export function renderProjects() {
  const star = "&#10058;";

  const projectBoxes = projects
    .map((project, index) => {
      return `
      <div
        class="hoverBox group bg-gray-900 h-[70vh] w-full mt-16 text-white flex overflow-hidden rounded-lg shadow-lg"
      >
        <div
          class="container2 flex-none w-[200px] p-6 rounded-lg bg-fixed bg-cover bg-center"
          style="background-image: url('${project.background_image}')"
        >
          <button
            class="bg-white font-ragnear text-xl font-bold text-black h-12 w-12 rounded-lg"
          >
            ${star}${index + 1}
          </button>
        </div>
        <div
          class="container1 flex-1 min-w-[425px] h-full flex flex-col pt-32 bg-green-900 p-6 rounded-lg"
        >
          <h3 class="text-xl font-bold mb-2">${project.project_name}</h3>
          <ul class="text-sm list-disc pl-5 space-y-1">
            ${project.description.map((d) => `<li>${d}</li>`).join("")}
            <li class="flex gap-2 items-center flex-wrap">
              ${project.tech_stack
                .map(
                  (tech) =>
                    `<span class="bg-white text-xs text-black py-1 px-2 rounded">${tech}</span>`
                )
                .join("")}
            </li>
          </ul>
        </div>
      </div>
      `;
    })
    .join("");

  return `
    <section
      id="projectSection"
      class="projects h-full relative z-10 py-12 px-12 md:px-32 dark:bg-black bg-white dark:text-white"
    >
      <div class="overflow-hidden">
        <h2
          id="ProjectHeadText"
          class="projectHeadText text-4xl md:text-8xl font-bold font-ragnear"
        >
          Projects
        </h2>
      </div>
      <div class="flex flex-nowrap gap-10 justify-evenly mt-21 overflow-x-auto">
        ${projectBoxes}
      </div>
    </section>
  `;
}
