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
    (propValue, key, componentName, location, propFullName) => {
      const test = { id: '', label: '', percentage: 0 };
      for (let testKey in test) {
        if (!propValue[key].hasOwnProperty(testKey)) {
          return new Error(
            `Відсутня властивість ${testKey} у ${propFullName} в компоненті ${componentName} . Валидация прошла неудачно.`
          );
        } else if (typeof propValue[key][testKey] !== typeof test[testKey]) {
          return new Error(
            `Помилковий тип властивості ${testKey} - ${typeof propValue[key][
              testKey
            ]}  у ${propFullName} в компонеті ${componentName} .Очікується ${typeof test[
              testKey
            ]}. Валидация прошла неудачно.`
          );
        }
      }
    }
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
