import React, { useState } from 'react';
import { validate } from './validation';
import style from './Form.module.css';

export default function Form(props) {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.label}>Username: </label>
      <input
        name='username'
        placeholder='Escriba su Usuario'
        type='email'
        value={userData.username}
        onChange={handleChange}
        autoComplete='off'
      />
      <p className={style.p}>{errors.username}</p>
      <label className={style.label}>Password: </label>
      <input
        name='password'
        placeholder='Escriba su Password'
        type='password'
        value={userData.password}
        onChange={handleChange}
        autoComplete='off'
      />
      <p className={style.p}>{errors.password}</p>
      <button type='submit'>Entrar</button>
    </form>
  );
}
