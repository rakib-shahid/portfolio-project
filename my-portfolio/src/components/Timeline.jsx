export default function Timeline({ experiences }) {
  return (
    <div className="border-l-2 border-gray-300 mt-4 pl-4">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold">
            {exp.main} - {exp.upper}
          </h4>
          <p className="text-gray-500">{exp.time}</p>
        </div>
      ))}
    </div>
  );
}

// export default function Timeline({ experiences }) {
//   return (
//     <div className="border-l-2 border-gray-300 mt-4 pl-4">
//       {experiences.map((exp, index) => (
//         <div key={index} className="mb-4 grid grid-cols-3">
//           <h4 className="col-span-3">{exp.upper}</h4>
//           <h4 className="col-span-2 scroll-m-20 text-xl font-semibold tracking-tight">
//             {exp.main}
//           </h4>
//           <p className="text-sky-300 col-span-1 text-right">{exp.time}</p>
//           <p className="mt-2 text-gray-400 col-span-2">{exp.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
