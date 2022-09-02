// import { useState, useEffect } from 'react';

// export default function useLocalStorage(key, defaultValue) {
//   const [local, setLocal] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
//     } catch (error) {
//       alert('SORRY, Backend is unavailable today!');
//       return defaultValue;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(local));
//   }, [key, local]);

//   return [local, setLocal];
// }
