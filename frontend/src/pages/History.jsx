import React, { useState, useEffect } from 'react';
import HeroSection from '../components/History/HeroSection';

const HistorySection = ({ title, content }) => (
  <div className="bg-blue-950/50 p-6 rounded-lg shadow-lg hover:bg-blue-950/60 transition-colors duration-300">
    <h2 className="text-2xl font-semibold mb-4 text-amber-300">{title}</h2>
    <p className="text-gray-300 leading-relaxed">{content}</p>
  </div>
);

const History = () => {
  const [historicalSections, setHistoricalSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/history/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setHistoricalSections(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching historical data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-amber-300">Loading historical data...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {historicalSections.map((section, index) => (
              <HistorySection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-amber-400 text-lg font-medium mb-4">Discover More</p>
          <p className="text-gray-300">
            Visit our attractions page to explore these historical sites in person
            and immerse yourself in Kanpur's rich heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;




// import React, { useState, useEffect } from 'react';
// import HeroSection from '../components/History/HeroSection';

// const HistorySection = ({ title, content, isLeft }) => (
//   <div className={`relative w-full md:w-1/2 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} px-4 py-6 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
//     <div className="bg-blue-950/50 p-6 rounded-xl shadow-xl border border-blue-800 hover:bg-blue-950/60 transition duration-300">
//       <h2 className="text-2xl font-bold mb-2 text-amber-300">{title}</h2>
//       <p className="text-gray-300 leading-relaxed">{content}</p>
//     </div>
//     <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-400 border-4 border-blue-950 z-10 ${isLeft ? 'right-0 -mr-2.5' : 'left-0 -ml-2.5'}`}></div>
//   </div>
// );

// const History = () => {
//   const [historicalSections, setHistoricalSections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHistoricalData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:5000/api/history/');
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         const data = await response.json();
//         setHistoricalSections(data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching historical data:', err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchHistoricalData();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-gray-950 text-white">
//       <HeroSection />

//       <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative">
//         {/* Vertical Line */}
//         <div className="hidden md:block absolute left-1/2 top-0 bottom-auto h-[calc(100%-6rem)] w-1 bg-gradient-to-b from-amber-400 via-blue-800 to-amber-400 z-0 transform -translate-x-1/2"></div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <p className="text-xl text-amber-300">Loading historical data...</p>
//           </div>
//         ) : error ? (
//           <div className="flex justify-center items-center h-64">
//             <p className="text-xl text-red-500">Error: {error}</p>
//           </div>
//         ) : (
//           <div className="space-y-12">
//             {historicalSections.map((section, index) => (
//               <div key={index} className="flex justify-center">
//                 <HistorySection
//                   title={section.title}
//                   content={section.content}
//                   isLeft={index % 2 === 0}
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-24 pt-6 text-center relative z-10">
//           <p className="text-amber-400 text-lg font-medium mb-2">Discover More</p>
//           <p className="text-gray-300">
//             Visit our attractions page to explore these historical sites in person
//             and immerse yourself in Kanpur's rich heritage.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
