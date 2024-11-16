
import React, { useState } from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

export default function Carousel() {
  const [time_, setTime] = useState("");


const handleDragStart = (e) => e.preventDefault();

var countDownDate = new Date("Jan 4, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let taw = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  setTime(taw);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
   setTime("EXPIRED");
  }
}, 1000);
  return (
    <div className="App h-screen/2">
    <AliceCarousel mouseTracking>
       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-[50px] gap-16  font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className='text-center element m-auto text-slate-50 text-2xl mb-[30vh]'>{time_}</h1>
        </main>
        </div>
     {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  mt-[50px]   gap-16  font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img src="logo.jpg" className='w-[90px]'/>
        </main>
        </div> */}
    </AliceCarousel>
    </div>
  );
}


// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "react-feather"



// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0)

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//   useEffect(() => {
//     if (!autoSlide) return
//     const slideInterval = setInterval(next, autoSlideInterval)
//     return () => clearInterval(slideInterval)
//   }, [])
//   return (
//     <div className="overflow-hidden relative w-screen h-96">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//         <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }