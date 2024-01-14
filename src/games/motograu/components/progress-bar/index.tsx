// import React from 'react'

// type Props = {
//   value: number
//   max: number
//   color: string
//   label?: string
// }

// const getBackgroundColor = (color: string) => {
//   switch (color) {
//     case 'blue':
//       return 'bg-blue-600'
//     case 'lime':
//       return 'bg-[#28a909]'
//     case 'yellow':
//       return 'bg-yellow-400'
//     case 'amber':
//       return 'bg-amber-600'
//     case 'red':
//       return 'bg-red-700'
//     case 'pink':
//       return 'bg-pink-700'
//     case 'rose':
//       return 'bg-rose-700'
//     case 'gray':
//       return 'bg-gray-400'
//   }
// }

// export default function ProgressBar({
//   max,
//   value,
//   color,
//   label = 'Próxima Rodada em',
// }: Props) {
//   return (
//     // bg-[#ff1e4c] flex items-center text-xs font-medium text-blue-100 leading-none rounded-full h-6
//     <div className="w-full relative flex items-center border border-blue-500 bg-gray-600 bg-opacity-50 border-opacity-50 rounded-md h-6 dark:bg-gray-700">
//       <div
//         className={`${getBackgroundColor(
//           color
//         )} h-full transition-all duration-100 rounded-md`}
//         style={{
//           width: `${(value / max) * 100}%`,
//           transitionTimingFunction: 'linear',
//           transitionDuration: '990ms',
//         }}
//       ></div>

//       <small className="absolute w-full h-full font-semibold text-center text-xs  pointer-events-none flex items-center justify-center text-gray-200 uppercase">
//         {label} {Math.abs(value)}
//       </small>
//     </div>
//   )
// }

import React from 'react';

type Props = {
  value: number;
  max: number;
  color: string;
  label?: string;
};

// const getBackgroundColor = (color: string) => {
//   switch (color) {
//     case 'blue':
//       return 'bg-blue-500';
//     case 'lime':
//       return 'bg-green-500';
//     case 'yellow':
//       return 'bg-yellow-400';
//     case 'amber':
//       return 'bg-orange-400';
//     case 'red':
//       return 'bg-red-500';
//     case 'pink':
//       return 'bg-pink-500';
//     case 'rose':
//       return 'bg-rose-500';
//     case 'gray':
//       return 'bg-gray-400';
//   }
// };

export default function ProgressBar({
  max,
  value,
  color,
  label = 'Próxima Rodada em',
}: Props) {
  return (
    <div className="w-full relative flex items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600 h-6">
      <div
        className={`h-full transition-all duration-500 rounded-md bg-${color}-500 animate-pulse transition-delay-250`}
        style={{
          width: `${(value / max) * 100}%`,
          transitionTimingFunction: 'ease-in-out',
        }}
      ></div>

      <small className="absolute w-full h-full font-bold text-center text-xs pointer-events-none flex items-center justify-center text-white uppercase">
        {label} {Math.abs(value)}
      </small>
    </div>
  );
}
