import React from 'react';
import styles from '../../Styles/Input.module.css';

const Input = ({ label, type, name, placeholder, value, setValue, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}
        htmlFor={name}>{label}
      </label>
      <input id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
