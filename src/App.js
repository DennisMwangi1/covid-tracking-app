import "./App.css";
import axios from 'axios';
import Aside from "./components/Aside";

function App() {
  // const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  params: {country: 'kenya'},
  headers: {
    'X-RapidAPI-Key': 'a458c332e4msh71108d98a0d6ff0p1d3b72jsn23c111109d80',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <div className="  grid grid-cols-5">
      <Aside/>
      <div className=" col-span-4 bg-red-500 h-[100vh]">

      </div>
    </div>
  );
}

export default App;
