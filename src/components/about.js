export function renderAbout() {
  const star = "&#10058;";
  return `
  <section id="aboutSection" class="h-full relativ dark:bg-black bg-white dark:text-white py-12 px-12 md:px-32">
    <div class="flex relative items-center pt-20"> 
        <div class="aboutImgContainer h-[70vh] absolute w-0 overflow-hidden rounded-xl"> 
          <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Henry_Cavill_%2848417913146%29_%28cropped%29.jpg"
              class="aboutImg w-[50vh] h-[70vh] object-cover top-0 left-20 rounded-xl"
            />
        </div> 
      <div class="md:w-2/3 ">
      </div>
      <div class="aboutContentContainer md:w-full ">
        <div class="overflow-hidden">
          <h2 class="aboutHeadText font-bold text-6xl font-ragnear uppercase text-orange-500">About Me</h2>
        </div>
        <p class="aboutTextContent font-ragnear text-3xl md:text-3xl tracking-wider uppercase font-bold mt-4 ">
          Hey, my name is Vamsi Jagatha. I’m a Full Stack Developer, front-end web developer from Kakinada. I’m also passionate about pop music and make portraits and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.
        </p>
        <button class="font-ragnear font-bold  uppercase text-3xl mt-16 flex items-center">
          <svg class="h-6 w-6" fill="#ffffff" viewBox="0 0 24 24">
            <line x1="12" y1="3" x2="12" y2="21" style="stroke: #ffffff; stroke-width: 2;"></line>
            <polyline points="9 18 12 21 15 18" style="stroke: #ffffff; stroke-width: 2;"></polyline>
          </svg>
          Resume
        </button>
      </div>
    </div>
    

    <div class="mt-40  ">
      <h4 class="text-4xl text-center mb-20">${star} MY STACK</h4>

      <!-- Frontend -->
      <div class="flex gap-4 justify-between mt-10">
        <div class="w-2/3">
          <h3 class="text-6xl font-ragnear font-bold">Frontend</h3>
        </div>
        <div class="w-full flex items-center flex-wrap gap-10">
          ${renderTech("JavaScript.svg", "JavaScript")}
          ${renderTech("React.svg", "React")}
          ${renderTech("gsap.webp", "GSAP")}
          ${renderTech("Tailwind.svg", "Tailwind")}
          ${renderTech("Bootstrap.svg", "Bootstrap")}
          ${renderTech("sass.webp", "SASS")}
        </div>
      </div>

      <!-- Backend -->
      <div class="flex gap-4 justify-between mt-20">
        <div class="w-2/3 ">
          <h3 class="text-6xl font-ragnear font-bold">Backend</h3>
        </div>
        <div class="w-full flex items-center flex-wrap gap-10">
          ${renderTech("Node.js.svg", "Node.js")}
          ${renderTech("express.webp", "Express")}
          ${renderTech("jwt.svg", "JWT")}
          ${renderTech("PHP.svg", "PHP")}
          ${renderTech("Laravel.svg", "Laravel")}
        </div>
      </div>

      <!-- Database -->
      <div class="flex gap-4 justify-between mt-20">
        <div class="w-2/3">
        <h3 class="text-6xl font-ragnear font-bold">Database</h3>
        </div>
        <div class="w-full flex items-center flex-wrap gap-10">
        ${renderTech("mongodb.svg", "MongoDB")}
        ${renderTech("MySQL.svg", "MySQL")}    
        ${renderTech("SQLite.svg", "SQLite")}
        </div>
      </div>

      <!-- Tools -->
      <div class="flex gap-4 justify-between mt-20">
        <div class="w-2/3">
          <h3 class="text-6xl font-ragnear font-bold">Tools</h3>
        </div>
        <div class="w-full flex items-center flex-wrap gap-10">
          ${renderTech("Git.svg", "Git")}
          ${renderTech("GitHub.svg", "GitHub")}
          ${renderTech("insomnia.svg", "Insomnia")}
          ${renderTech("Figma.svg", "Figma")}
        </div>
      </div>
    </div>
  </section>
  `;
}

// Helper function for rendering tech items
function renderTech(imgFile, label) {
  return `
    <div class=" flex items-center gap-4 ">
      <img src="assets/logos/${imgFile}" alt="${label}" class="rounded-lg h-8 w-8 object-cover"/>
      <span class="text-2xl rounded">${label}</span>
    </div>
  `;
}
