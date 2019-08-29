import React from 'react';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';

export class WithFormFeedback extends React.Component {
  static contextType = FormContext;

  render() {
    const {
      children,
    } = this.props;

    const {
      dirty,
      isSubmitting,
      isValid,
      isValidating,
      touched,
      errors,
      setFieldValue,
      handleSubmit,
      handleReset,
      status,
      values,
      resetForm,
    } = this.context;

    return (
      children({
        dirty,
        isSubmitting,
        isValid,
        isValidating,
        touched,
        errors,
        setFieldValue,
        handleSubmit,
        handleReset,
        status,
        values,
        resetForm,
      })
    );
  }
}

WithFormFeedback.propTypes = {
  /** JSX or Element, child element */
  children: PropTypes.any.isRequired,
};
