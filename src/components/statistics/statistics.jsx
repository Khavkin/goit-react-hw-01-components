import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && title.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, percentage: PropTypes.number })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
