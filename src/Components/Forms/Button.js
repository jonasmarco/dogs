import React from 'react';
import styles from '../../Styles/Button.module.css';

const Button = ({ children, disabled, ...props }) => {
  return (
    <button {...props} className={styles.button} disabled={disabled}>{children}</button>
  )
}

export default Button
