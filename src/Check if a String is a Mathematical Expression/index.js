const mathExpr = expression => /\d\s*[-+*/%]\s*\d/.test(expression);

export default mathExpr;
