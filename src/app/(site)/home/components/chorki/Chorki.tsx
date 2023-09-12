// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { useIntersection } from "@mantine/hooks";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

// const useIntersectionObserver = (ref, options) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//   }, []);

//   return isIntersecting;
// };

// const Chorki = () => {
//   const ref = useRef();
//   const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });
//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-9/12 lg:w-7/12 border border-dashed border-gray-500 p-2">
//         <AspectRatio ratio={4 / 4}>
//           <div className="w-full h-full grid grid-cols-6 grid-rows-6">
//             <div className=" col-start-1 col-end-5">
//               <div>
//                 <AspectRatio
//                   className={onScreen ? "bg-red-500" : "bg-white"}
//                   ratio={16 / 8}
//                 >
//                   <Image
//                     src=""
//                     alt=""
//                     fill
//                     className="rounded-md object-cover"
//                   />
//                 </AspectRatio>
//               </div>
//             </div>
//             <div className=" col-start-5 col-span-2 row-start-1 row-span-4">
//               <div>
//                 <AspectRatio ratio={8 / 16}>
//                   <Image
//                     src=""
//                     alt=""
//                     fill
//                     className="rounded-md object-cover"
//                   />
//                 </AspectRatio>
//               </div>
//             </div>
//             <div className=" row-start-3 col-start-3 row-span-2 col-span-2">
//               <div ref={ref}>
//               <AspectRatio ratio={4 / 4}>
//                 <Image src="" alt="" fill className="rounded-md object-cover" />
//               </AspectRatio>
//               </div>
//             </div>
//             <div className=" col-start-3 row-start-5 col-span-4 row-span-2">
//               <div>
//                 <AspectRatio ratio={16 / 8}>
//                   <Image
//                     src=""
//                     alt=""
//                     fill
//                     className="rounded-md object-cover"
//                   />
//                 </AspectRatio>
//               </div>
//             </div>
//             <div className=" col-start-1 row-start-3 col-span-2 row-span-4">
//               <div>
//                 <AspectRatio ratio={8 / 16}>
//                   <Image
//                     src=""
//                     alt=""
//                     fill
//                     className="rounded-md object-cover"
//                   />
//                 </AspectRatio>
//               </div>
//             </div>
//           </div>
//         </AspectRatio>
//       </div>
//     </div>
//   );
// };

// export default Chorki;
