import { myInfo } from "../data";

export function renderFooter() {
  return `
    <div class="h-[vh] pt-20">
      <div class="flex  justify-between ">
        <h2 class="text-9xl font-ragnear font-extrabold ">${myInfo.name} ${
    myInfo.surname
  }</h2>
        <span class="text-2xl self-end  font-ragnear font-bold uppercase">Available ${new Date().getFullYear()}</span>
      </div>
      <div class="flex justify-between items-center mt-10">      
        <span class="text-2xl font-ragnear font-bold uppercase">Available @${new Date().getFullYear()}</span>
        <div class="flex flex-col items-end">
          <span class="text-2xl font-ragnear font-bold uppercase">Have a project in mind?</span>
          <div class="flex">
            <span class="text-2xl text-orange-500 mr-2">→</span>
            <a href="mailto:${myInfo.email}" 
              class="text-2xl font-ragnear font-bold tracking-wider uppercase transition-all duration-500  underline decoration-orange-500 hover:text-orange-600 " 
              target="_blank">
              ${myInfo.email}
            </a>
          </div>
        </div>
      </div>
      <div class="flex  justify-between ">
        <div class="socials flex gap-4 mt-10">
          <span class="text-xl text-orange-500 mr-2 font-ragnear font-bold"> Socials</span>
          <a href="" class="text-xl font-ragnear font-semibold tracking-wider uppercase transition-all duration-500  underline decoration-orange-500 hover:text-orange-600 ">LinkedIn</a>
          <a href="" class="text-xl font-ragnear font-semibold tracking-wider uppercase transition-all duration-500  underline decoration-orange-500 hover:text-orange-600 ">Github</a>
          <a href="" class="text-xl font-ragnear font-semibold tracking-wider uppercase transition-all duration-500  underline decoration-orange-500 hover:text-orange-600 ">Twitter</a>
          <a href="" class="text-xl font-ragnear font-semibold tracking-wider uppercase transition-all duration-500  underline decoration-orange-500 hover:text-orange-600 ">Instagram</a>
        </div>
        <span class="text-2xl self-end  font-ragnear font-bold uppercase">Available ${new Date().getFullYear()}</span>
      </div>
    </div>
    `;
}
