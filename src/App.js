import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';

function App () {
  const [ data, setData ] = useState({});
  const [ country, setCountry ] = useState();

  const handleCountryChange = async(country) => {
    const data = await fetchData(country);
    setCountry(country);
    setData(data);
  }

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setData({ data })
    }
    loadData();
  }, []);

  return (
    <div className='container'>
      <Cards data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

// function App(props) {
//   const [stuff, setStuff ] = useState({
//     data: {},
//     country: '',
//   })

//   useEffect(() => {
//     async function fetchedData() {
//       await fetchData()

//       setStuff({ data: fetchedData})
//     }
//     fetchedData();
//   })

//   const handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);
//     setStuff({ data: fetchedData, country: country })
//   }

//   return (
//     <div>
//       hello
//     </div>
//   );
// }

export default App;
