import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './tabs.css';

export const TabContext = React.createContext({});

export function Tabs({
  value,
  identifier,
  onChange,
  className,
  children,
  ...props
}) {
  const tabsClassNames = classNames({
    [className]: true,
    [styles.tabs]: true,
  });

  return (
    <div
      className={tabsClassNames}
      {...props}
    >
      <TabContext.Provider
        value={{ value, identifier, onChange }}
      >
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tabs.propTypes = {
  /** String, identifier that will be added to element */
  identifier: PropTypes.string.isRequired,
  /** Any, value of selected tab */
  value: PropTypes.any.isRequired,
  /** Function, will be called when clicked on tab */
  onChange: PropTypes.func,
  /** String, className that will be added to element */
  className: PropTypes.string,
  /** Object, style that will be added to element */
  style: PropTypes.object,
  /** String or JSX or Element, content of element */
  children: PropTypes.any,
};

Tabs.defaultProps = {
  onChange: undefined,
  className: '',
  style: undefined,
  children: null,
};
