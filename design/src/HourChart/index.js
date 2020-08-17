import React from 'react';
import styles from './styles.module.css';
import Bubble from '../amCharts/Bubble';
import PropTypes from 'prop-types';

export default function WeekChart(props) {
  const { data } = props;

  const options = [
    {
      x: 'date',
      y: 'members',
      color: 'rgb(127, 90, 200)',
    },
    {
      x: 'date',
      y: 'joins',
      color: 'rgb(240, 76, 88)',
    },
  ];

  return (
    <div className={styles.root}>
      <h2>
        Messages by hour <small>according to your local timezone</small>
      </h2>
      <Bubble data={data} options={options} />
    </div>
  );
}

WeekChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
