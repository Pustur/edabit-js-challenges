const MIN_PASSWORD_LENGTH = 6;

const strongPassword = password => {
  const rules = [/\d/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()+-]/];
  const passedRules = rules.reduce(
    (totalPassed, rule) => totalPassed + rule.test(password),
    0,
  );

  return Math.max(
    rules.length - passedRules,
    MIN_PASSWORD_LENGTH - password.length,
  );
};

export default strongPassword;
