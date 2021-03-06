import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Picker } from '../Picker';

import styles from './monthPicker.css';

export function MonthPicker({
  selectedMonth,
  months,
  onClick,
  ...props
}) {
  return (
    <Picker
      {...props}
    >
      {months.map((month, monthIndex) => {
        const monthClasses = classNames({
          [styles.monthPickerMonth]: true,
          [styles.active]: monthIndex === selectedMonth,
        });

        return (
          <div
            className={monthClasses}
            onClick={() => onClick(monthIndex)}
            key={monthIndex}
            role='presentation'
          >
            {month}
          </div>
        );
      })}
    </Picker>
  );
}

MonthPicker.propTypes = {
  /** Number, index of selected month */
  selectedMonth: PropTypes.number.isRequired,
  /** Array of strings, names of months in right order */
  months: PropTypes.array.isRequired,
  /** Function, will be called when month is selected */
  onClick: PropTypes.func.isRequired,
  /** Object, styles that will be added to month picker wrapper */
  style: PropTypes.object,
  /** String, className that will be added to month picker wrapper */
  className: PropTypes.string,
};

MonthPicker.defaultProps = {
  style: undefined,
  className: '',
};
