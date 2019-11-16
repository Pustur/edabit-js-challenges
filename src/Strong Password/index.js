const MIN_PASSWORD_LENGTH = 6;

const strongPassword = password => {
  const rules = [/\d/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()+-]/];
  const passedRules = rules.filter(rule => rule.test(password)).length;

  return Math.max(
    rules.length - passedRules,
    MIN_PASSWORD_LENGTH - password.length,
  );
};

export default strongPassword;
