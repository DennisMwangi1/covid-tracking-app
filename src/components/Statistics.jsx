import React, { useEffect, useState } from 'react'
import axios from 'axios'
import screenshot1 from '../images/screenshot1.png'
import screenshot2 from '../images/screenshot2.png'
import screenshot3 from '../images/screenshot3.png'
import screenshot4 from '../images/screenshot4.png'
import washhands from '../images/washhands.png'
import Chart from './Chart'
import ConfirmedCases from './ConfirmedCases'
import Search from './Search'

function Statistics() {
    const [statistics,setStatistics] = useState({})
    const [country,setCountry]=useState('Kenya')
    

    



  useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
          'X-RapidAPI-Key': 'a458c332e4msh71108d98a0d6ff0p1d3b72jsn23c111109d80',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };
 axios.request(options).then(function (response) {
      setStatistics(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  },[country])
 
  return (
    <main className='bg-orange-100 h-[100vh]'>
    <section className='flex justify-between pt-20'>
        {/* <input className=' text-center text-xl pl-6 pr-6 ml-10 p-2 rounded-2xl ' placeholder='Search by country     &#xF002; ' style={{'fontFamily':'FontAwesome'}} /> */}
        <Search statistics={statistics} setCountry={setCountry}/>
        <p className='mr-4'>Hello user</p>
    </section>
    <div className='flex pt-10 text-xl font-bold '>
        {statistics.response && statistics.response.map((stat)=>{
            if(stat.country === country){
                return (
                    <>
                    <h1>{stat.country}</h1>
                    </>
                )
            }
            return true
        })}
        
    </div>
    <section className=' mt-10 ml-4 grid grid-cols-4 gap-4 '>
        <div className='ml-4 bg-white  col-span-2 rounded-3xl'>
            <Chart/>
        </div>
        <div >
            <div className='pt-2 pb-2 bg-white m-2 rounded-3xl flex justify-between'>
                <div className='ml-8 m-auto'>
                    <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Confirmed cases</h1>
                    <h1 className='font-bold text-blue-800'>
                        <ConfirmedCases country={country}/>
                    </h1>
                </div>
                <div className='m-auto'>
                    <p className='text-lg font-bold pl-8 text-red-500'>+94 cases</p>
                    <img className='pt-10' src={screenshot1} alt='' width='100px'/>
                </div>
            </div>
            <div className='pt-2 pb-2 bg-white m-2 rounded-3xl flex justify-between'>
                <div className='ml-8 m-auto'>
                    <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Recovered cases</h1>
                    <h1 className='font-bold text-cyan-400'>
                        <ConfirmedCases/>
                    </h1>
                </div>
                <div className='m-auto'>
                    <p className='text-lg font-bold pl-8 text-red-500'>+94 cases</p>
                    <img className='pt-10' src={screenshot3} alt='' width='100px'/>
                </div>
            </div>
        </div>
        <div className=' mr-4 '>
            <div className='pt-4 pb-6 bg-amber-500 m-2 rounded-3xl flex justify-between text-white'>
            <div className='ml-8 m-auto'>
                    <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Active cases</h1>
                    <h1 className='font-bold text-white'>
                        <ConfirmedCases/>
                    </h1>
                </div>
                <div className='m-auto'>
                    <img className='pt-10' src={screenshot2} alt='' width='100px'/>
                </div>
            </div>
            <div className=' bg-white m-2 rounded-3xl flex justify-between'>
                <div className='ml-8 m-auto'>
                    <h1 className=' pb-2 tracking-wider font-serif font-semibold'>Deaths</h1>
                    <h1 className='font-bold text-sky-500'>
                        <ConfirmedCases/>
                    </h1>
                </div>
                <div className='m-auto'>
                    <p className='text-lg font-bold pl-8 text-red-500'>+94 cases</p>
                    <img className='pt-10' src={screenshot4} alt='' width='100px'/>
                </div>
            </div>
        </div>
    </section>
    <section className='grid grid-cols-2 ml-4 mt-12 p-6'>
        <div className='p-4 bg-white rounded-3xl flex justify-evenly'>
            <img src={washhands} alt='' width='500px'/>
            <div className='m-auto'>
                <h1 className='text-2xl font-bold font-serif text-center  tracking-wide'>Prevention</h1>
            <p className='font-semibold p-4 text-center text-lg'>Wear a mask.<br></br>Clean your hands.<br></br>Keep a safe distance.</p>
            <button className='float-right text-amber-500 font-semibold mt-4 border-2 p-1 rounded-full border-amber-500'>Read More &#10513;</button>
            </div>

        </div>
        <div>
            
        </div>
    </section>
    </main>
  )
}

export default Statistics