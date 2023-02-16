export function validate(inputs) {
  const errors = {};
  // eslint-disable-next-line
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  // eslint-disable-next-line
  const regexpassword = /^(?=.*\d)[a-zA-Z\d]+$/;

  if (!inputs.username) {
    errors.username = 'Se requiere Username';
  } else if (inputs.username.length > 35) {
    errors.username = 'Username excede el largo maximo';
  } else if (!regex.test(inputs.username)) {
    errors.username = 'Username tiene un formato no valido';
  }
  if (!regexpassword.test(inputs.password)) {
    errors.password = 'Password debe incluir al menos un numero';
  } else if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = 'Password debe ser mayor a 6 y menor a 10 caracteres';
  }
  return errors;
}
