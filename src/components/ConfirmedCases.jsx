import React, { useEffect } from "react";
import AnimatedNumbers from "react-animated-numbers";
import axios from 'axios'

function ConfirmedCases({country}) {
  const [num, setNum] = React.useState(331231);
  console.log(country)

  useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: {country: country},
        headers: {
          'X-RapidAPI-Key': 'a458c332e4msh71108d98a0d6ff0p1d3b72jsn23c111109d80',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };
 axios.request(options).then(function (response) {
      setNum(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  },[])
  return (
    <div className="">
       <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Confirmed cases</h1>
        <h1 className='font-bold text-blue-800'></h1>
      <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>

      {/* <AnimatedNumbers
        animateToNumber={num}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers> */}
      {/* <div>
        <button onClick={() => setNum((state) => state + 31234)}>+</button>
        <button onClick={() => setNum((state) => state - 31234)}>-</button>
      </div> */}
    </div>
  );
}

export default ConfirmedCases


// <div className='pt-2 pb-2 bg-white m-2 rounded-3xl flex justify-between'>
//                 <div className='ml-8 m-auto'>
//                     <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Confirmed cases</h1>
//                     <h1 className='font-bold text-blue-800'>
//                         <ConfirmedCases country={country}/>
//                     </h1>
//                 </div>
//                 <div className='m-auto'>
//                     <p className='text-lg font-bold pl-8 text-red-500'>+94 cases</p>
//                     <img className='pt-10' src={screenshot1} alt='' width='100px'/>
//                 </div>
//             </div>