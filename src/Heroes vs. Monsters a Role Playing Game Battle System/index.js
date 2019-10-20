const battle = data => {
  const { pATT, pDEF, mATT, mDEF } = data;
  let { pHP, pPOT, mHP } = data;

  for (let round = 1; ; round += 1) {
    let halveDamage = false;

    if (pHP <= 10 && pPOT) {
      pPOT -= 1;
      pHP += 10;
      halveDamage = true;
    } else {
      mHP -= pATT * 2 - mDEF;
      if (mHP <= 0) return `Victory in ${round} rounds`;
    }

    pHP -= (mATT * 2 - pDEF) / (halveDamage ? 2 : 1);
    if (pHP <= 0) return `Game Over in ${round} rounds`;
  }
};

export default battle;
