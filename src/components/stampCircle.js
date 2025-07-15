export default function stampCircle(label, rotatingText) {
  return `
      <div class="stamp-circle relative w-40 h-40 flex items-center justify-center">
        <!-- Centered Logo -->
        <div class="logo absolute flex items-center justify-center bg-red-700 text-white font-bold rounded-full 
                    w-16 md:w-24 h-16 md:h-24 text-lg"
            style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
          ${label}
          
        </div>
  
        <!-- Rotating Text -->
        <div class="rotating-text absolute inset-0 flex items-center justify-center animate-spin-custom">
          ${rotatingText
            .split("")
            .map((char, index, arr) => {
              const angle = (index * 360) / arr.length;
              return `<span class="absolute text-sm font-bold uppercase translate-x-[65px] translate-y-[65px]"
                        style="transform: rotate(${angle}deg) translate(65px) rotate(-${270}deg);">
                        ${char}
                      </span>`;
            })
            .join("")}
        </div>
  
        <style>
          @keyframes spinCustom {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-custom {
            animation: spinCustom 8s linear infinite; /* Adjust speed here */
          }
        </style>
      </div>
    `;
}
