import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CovidData() {
  const [data, setData ] = useState([]);

  useEffect(() => {

    axios.get('http://covidtracking.com/api/us')
    .then(res => {
      console.log(res.data);
      setData(res)
    })
    .catch(error => {
      console.log('data was not returned', error);
    })
  }, []);

  return (
    <div className='data'>
      Yo
    </div>
  )
}