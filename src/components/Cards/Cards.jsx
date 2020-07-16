import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country
}) => {
  if (!confirmed) {
    return 'Loading...';
  }
  const active = confirmed['value'] - recovered['value'] - deaths['value'];
  let cardDetails = [
    {
      // style: styles.infected,
      text: 'Infected',
      value: confirmed.value,
      bottomText: 'Number of infected cases of COVID19'
    },
    {
      // style: styles.recovered,
      text: "Recovered",
      value: recovered.value,
      bottomText: "Number of recoveries from COVID-19",
    },
    {
      // style: styles.deaths,
      text: "Deaths",
      value: deaths.value,
      bottomText: "Number of deaths caused by COVID-19", 
    },
    {
      // style: styles.active,
      text: "Active",
      value: active,
      bottomText: "Number of active cases of COVID-19",
    },
  ];

  return (
    <div className='container'>
      <Grid container spacing={3} justify='center'>
        {cardDetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            // className={cx(styles.Card, detail.style)}
            key={index}
          >
            <CountUp
              start={0}
              end={detail.value}
              duration={2}
              separator=","
            />
            Last updated at: {new Date(lastUpdate).toDateString()}
            </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cards;