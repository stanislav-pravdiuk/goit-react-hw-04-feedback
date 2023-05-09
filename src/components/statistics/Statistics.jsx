import React from "react";
import PropTypes from 'prop-types';
import css from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (

    <div className={css.statistics} >
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feddback: {positivePercentage}%</span>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;