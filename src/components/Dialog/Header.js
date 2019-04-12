import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './dialog.css';

export const Header = ({
  className,
  children,
  ...props
}) => {
  const titleClasses = classNames({
    [styles.header]: true,
    [className]: true,
  });

  return (
    <div className={titleClasses} {...props}>
      <h2 className={styles.title}>
        {children}
      </h2>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Header.defaultProps = {
  className: '',
  children: null,
};
