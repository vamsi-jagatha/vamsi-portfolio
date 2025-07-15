const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
`;

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
`;
export function renderNavbar() {
  const menuLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return `
    <nav class="navbar relative z-30 flex items-center justify-between dark:bg-black bg-white dark:text-white  py-4 px-5 md:px-20 ">
      <div class="logo text-2xl ">
        VJ
      </div>
    
      <div class="flex items-center space-x-4 z-40">
        <button class="py-3 rounded-md  z-10 px-3" id="theme-toggle">
          ${localStorage.getItem("theme") === "dark" ? moonIcon : sunIcon}
        </button>
        <div id="menu-toggle" class="menu cursor-pointer flex flex-col gap-1">
          <div class="dark:bg-white bg-black h-1 w-8 rounded-md"></div>
          <div class="dark:bg-white bg-black h-1 w-8 rounded-md"></div>
          <div class="dark:bg-white bg-black h-1 w-8 rounded-md"></div>
        </div>
      </div>
    </nav>
    <div id="navigation-menu" class="fixed top-0 right-0 h-[100vh] bg-red-800 w-[100vw] z-30 grid place-items-center translate-x-full">
    
    <ul class="flex flex-col space-y-5">
    ${menuLinks
      .map(
        (link) => `
      <li class="links relative opacity-0 translate-x-[70%] ">
      <a href="#${link.toLowerCase()}" class="text-5xl md:text-7xl font-ragnear hover:text-blue-500">
      ${link}
      </a>
      </li>
    `
      )
      .join("")}
      </ul>
      
    </div>
  `;
}
