import cx from 'classnames';
import React from 'react';
import './styles.scss';

export const BUTTON_TYPE_CLASSES = {
  validateButton: 'button-validate'
};

const Button = ({
  children,
  buttonType,
  disabled,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={cx(`button ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`, {
        disabled: disabled
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
