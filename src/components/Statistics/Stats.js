import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';


const Stats = ({ title, stats }) => {
  const listItems = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={styles.item}
      
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{`${percentage}%`}</span>
    </li>
  ));

  return (
    <section className={styles.stats}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>{listItems}</ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '____',
};

Stats.T = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;