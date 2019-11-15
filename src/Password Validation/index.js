const hasValidLength = ({ length }) => length >= 6 && length <= 24;

const hasLowerCaseChars = str => /[a-z]/.test(str);

const hasUpperCaseChars = str => /[A-Z]/.test(str);

const hasDigits = str => /\d/.test(str);

const hasRepetitions = str => /(.)\1{2}/.test(str);

const hasInvalidChars = str => /[^\w!@#$%^&*()+=\-{}[\]:;"'?<>,.]/.test(str);

const validatePassword = password =>
  hasValidLength(password) &&
  hasLowerCaseChars(password) &&
  hasUpperCaseChars(password) &&
  hasDigits(password) &&
  !hasRepetitions(password) &&
  !hasInvalidChars(password);

export default validatePassword;
