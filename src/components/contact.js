import { renderFooter } from "./footer";
import { myInfo } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function renderContact() {
  return `
  <section id="contactSection" class="h-full  dark:bg-black bg-white dark:text-white py-12 px-12 md:px-32">
    <h2 id="contactHeadText" class="text-center font-bold text-7xl font-ragnear uppercase text-orange-500">Work <br/> Together?</h2>
    <div class="md:flex justify-between  mt-44 ">
      <div class="md:w-2/3  relative z-40">
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KxsjNwuoC-AOatfAT9rp6geAf6zIYzQMiw&s"
          class="contactSecondImg first-img h-[58vh] object-cover w-56 rounded-xl -rotate-6 absolute   left-10"
          />
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Henry_Cavill_%2848417913146%29_%28cropped%29.jpg"
          class="contactFirstImg w-74 h-[63vh] object-cover  absolute top-0 left-24  rounded-xl"
          />
      </div>
      <div class="md:w-full dark:bg-black bg-white dark:text-white z-10  md:p-10">
        <p class="text-3xl md:text-5xl uppercase font-ragnear font-bold">
        My services include collaborating on and consulting for full stack web development projects. My expertise spans building dynamic user interfaces, developing robust backend systems and creative functionality across platforms
        </p>
        
        <p class="font-ragnear text-xl md:text-2xl font-bold mt-4 text-orange-600 d-block">Send me an email:</p>
        <p class="font-ragnear text-xl md:text-2xl font-bold ">${
          myInfo.email
        }</p>
      </div>
    </div>
    ${renderFooter()}
  </section>
  `;
}
