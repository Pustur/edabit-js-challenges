import getBirthdayCake from './index';

test('getBirthdayCake', () => {
  expect(getBirthdayCake('Jo', 69)).toEqual([
    '****************************',
    '* 69 Happy Birthday Jo! 69 *',
    '****************************',
  ]);
  expect(getBirthdayCake('Jo', 22)).toEqual([
    '############################',
    '# 22 Happy Birthday Jo! 22 #',
    '############################',
  ]);
  expect(getBirthdayCake('Riva', 4)).toEqual([
    '############################',
    '# 4 Happy Birthday Riva! 4 #',
    '############################',
  ]);
  expect(getBirthdayCake('Riva', 1)).toEqual([
    '****************************',
    '* 1 Happy Birthday Riva! 1 *',
    '****************************',
  ]);
  expect(getBirthdayCake('Riva', 8)).toEqual([
    '############################',
    '# 8 Happy Birthday Riva! 8 #',
    '############################',
  ]);
  expect(getBirthdayCake('Val', 80)).toEqual([
    '#############################',
    '# 80 Happy Birthday Val! 80 #',
    '#############################',
  ]);

  // We don't really need any more tests...

  // expect(getBirthdayCake('Val', 63)).toEqual([
  //   '*****************************',
  //   '* 63 Happy Birthday Val! 63 *',
  //   '*****************************',
  // ]);
  // expect(getBirthdayCake('Gayle', 4)).toEqual([
  //   '#############################',
  //   '# 4 Happy Birthday Gayle! 4 #',
  //   '#############################',
  // ]);
  // expect(getBirthdayCake('Gayle', 7)).toEqual([
  //   '*****************************',
  //   '* 7 Happy Birthday Gayle! 7 *',
  //   '*****************************',
  // ]);
  // expect(getBirthdayCake('Jack', 10)).toEqual([
  //   '##############################',
  //   '# 10 Happy Birthday Jack! 10 #',
  //   '##############################',
  // ]);
  // expect(getBirthdayCake('Loyd', 90)).toEqual([
  //   '##############################',
  //   '# 90 Happy Birthday Loyd! 90 #',
  //   '##############################',
  // ]);
  // expect(getBirthdayCake('Bari', 15)).toEqual([
  //   '******************************',
  //   '* 15 Happy Birthday Bari! 15 *',
  //   '******************************',
  // ]);
  // expect(getBirthdayCake('Bari', 94)).toEqual([
  //   '##############################',
  //   '# 94 Happy Birthday Bari! 94 #',
  //   '##############################',
  // ]);
  // expect(getBirthdayCake('Todd', 32)).toEqual([
  //   '##############################',
  //   '# 32 Happy Birthday Todd! 32 #',
  //   '##############################',
  // ]);
  // expect(getBirthdayCake('Loyd', 23)).toEqual([
  //   '******************************',
  //   '* 23 Happy Birthday Loyd! 23 *',
  //   '******************************',
  // ]);
  // expect(getBirthdayCake('Riva', 41)).toEqual([
  //   '******************************',
  //   '* 41 Happy Birthday Riva! 41 *',
  //   '******************************',
  // ]);
  // expect(getBirthdayCake('Todd', 53)).toEqual([
  //   '******************************',
  //   '* 53 Happy Birthday Todd! 53 *',
  //   '******************************',
  // ]);
  // expect(getBirthdayCake('Shelia', 8)).toEqual([
  //   '##############################',
  //   '# 8 Happy Birthday Shelia! 8 #',
  //   '##############################',
  // ]);
  // expect(getBirthdayCake('Dorris', 5)).toEqual([
  //   '******************************',
  //   '* 5 Happy Birthday Dorris! 5 *',
  //   '******************************',
  // ]);
  // expect(getBirthdayCake('Gayle', 28)).toEqual([
  //   '###############################',
  //   '# 28 Happy Birthday Gayle! 28 #',
  //   '###############################',
  // ]);
  // expect(getBirthdayCake('Gayle', 25)).toEqual([
  //   '*******************************',
  //   '* 25 Happy Birthday Gayle! 25 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Hulda', 51)).toEqual([
  //   '*******************************',
  //   '* 51 Happy Birthday Hulda! 51 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Ervin', 83)).toEqual([
  //   '*******************************',
  //   '* 83 Happy Birthday Ervin! 83 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Ervin', 98)).toEqual([
  //   '###############################',
  //   '# 98 Happy Birthday Ervin! 98 #',
  //   '###############################',
  // ]);
  // expect(getBirthdayCake('Bobby', 89)).toEqual([
  //   '*******************************',
  //   '* 89 Happy Birthday Bobby! 89 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Gayle', 59)).toEqual([
  //   '*******************************',
  //   '* 59 Happy Birthday Gayle! 59 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Hulda', 55)).toEqual([
  //   '*******************************',
  //   '* 55 Happy Birthday Hulda! 55 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Agnus', 18)).toEqual([
  //   '###############################',
  //   '# 18 Happy Birthday Agnus! 18 #',
  //   '###############################',
  // ]);
  // expect(getBirthdayCake('Jacques', 7)).toEqual([
  //   '*******************************',
  //   '* 7 Happy Birthday Jacques! 7 *',
  //   '*******************************',
  // ]);
  // expect(getBirthdayCake('Adrian', 91)).toEqual([
  //   '********************************',
  //   '* 91 Happy Birthday Adrian! 91 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Norine', 24)).toEqual([
  //   '################################',
  //   '# 24 Happy Birthday Norine! 24 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Adrian', 90)).toEqual([
  //   '################################',
  //   '# 90 Happy Birthday Adrian! 90 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Shelia', 76)).toEqual([
  //   '################################',
  //   '# 76 Happy Birthday Shelia! 76 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Dorris', 48)).toEqual([
  //   '################################',
  //   '# 48 Happy Birthday Dorris! 48 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Deedee', 93)).toEqual([
  //   '********************************',
  //   '* 93 Happy Birthday Deedee! 93 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Deedee', 48)).toEqual([
  //   '################################',
  //   '# 48 Happy Birthday Deedee! 48 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Margot', 89)).toEqual([
  //   '********************************',
  //   '* 89 Happy Birthday Margot! 89 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Dorris', 54)).toEqual([
  //   '################################',
  //   '# 54 Happy Birthday Dorris! 54 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Shelia', 75)).toEqual([
  //   '********************************',
  //   '* 75 Happy Birthday Shelia! 75 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Margot', 25)).toEqual([
  //   '********************************',
  //   '* 25 Happy Birthday Margot! 25 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Adrian', 23)).toEqual([
  //   '********************************',
  //   '* 23 Happy Birthday Adrian! 23 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Phoebe', 39)).toEqual([
  //   '********************************',
  //   '* 39 Happy Birthday Phoebe! 39 *',
  //   '********************************',
  // ]);
  // expect(getBirthdayCake('Isabelle', 2)).toEqual([
  //   '################################',
  //   '# 2 Happy Birthday Isabelle! 2 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Kristine', 6)).toEqual([
  //   '################################',
  //   '# 6 Happy Birthday Kristine! 6 #',
  //   '################################',
  // ]);
  // expect(getBirthdayCake('Russell', 19)).toEqual([
  //   '*********************************',
  //   '* 19 Happy Birthday Russell! 19 *',
  //   '*********************************',
  // ]);
  // expect(getBirthdayCake('Maxwell', 85)).toEqual([
  //   '*********************************',
  //   '* 85 Happy Birthday Maxwell! 85 *',
  //   '*********************************',
  // ]);
  // expect(getBirthdayCake('Zenobia', 63)).toEqual([
  //   '*********************************',
  //   '* 63 Happy Birthday Zenobia! 63 *',
  //   '*********************************',
  // ]);
  // expect(getBirthdayCake('Lorenzo', 15)).toEqual([
  //   '*********************************',
  //   '* 15 Happy Birthday Lorenzo! 15 *',
  //   '*********************************',
  // ]);
  // expect(getBirthdayCake('Maxwell', 84)).toEqual([
  //   '#################################',
  //   '# 84 Happy Birthday Maxwell! 84 #',
  //   '#################################',
  // ]);
  // expect(getBirthdayCake('Jacques', 68)).toEqual([
  //   '#################################',
  //   '# 68 Happy Birthday Jacques! 68 #',
  //   '#################################',
  // ]);
  // expect(getBirthdayCake('Vernita', 88)).toEqual([
  //   '#################################',
  //   '# 88 Happy Birthday Vernita! 88 #',
  //   '#################################',
  // ]);
  // expect(getBirthdayCake('Jacques', 95)).toEqual([
  //   '*********************************',
  //   '* 95 Happy Birthday Jacques! 95 *',
  //   '*********************************',
  // ]);
  // expect(getBirthdayCake('Princess', 40)).toEqual([
  //   '##################################',
  //   '# 40 Happy Birthday Princess! 40 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Princess', 52)).toEqual([
  //   '##################################',
  //   '# 52 Happy Birthday Princess! 52 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Fletcher', 72)).toEqual([
  //   '##################################',
  //   '# 72 Happy Birthday Fletcher! 72 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Cherelle', 80)).toEqual([
  //   '##################################',
  //   '# 80 Happy Birthday Cherelle! 80 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Youlanda', 29)).toEqual([
  //   '**********************************',
  //   '* 29 Happy Birthday Youlanda! 29 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Kristine', 43)).toEqual([
  //   '**********************************',
  //   '* 43 Happy Birthday Kristine! 43 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Fletcher', 61)).toEqual([
  //   '**********************************',
  //   '* 61 Happy Birthday Fletcher! 61 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Clotilde', 35)).toEqual([
  //   '**********************************',
  //   '* 35 Happy Birthday Clotilde! 35 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Clotilde', 46)).toEqual([
  //   '##################################',
  //   '# 46 Happy Birthday Clotilde! 46 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Jefferey', 49)).toEqual([
  //   '**********************************',
  //   '* 49 Happy Birthday Jefferey! 49 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Cherelle', 44)).toEqual([
  //   '##################################',
  //   '# 44 Happy Birthday Cherelle! 44 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Clotilde', 92)).toEqual([
  //   '##################################',
  //   '# 92 Happy Birthday Clotilde! 92 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Jacqulyn', 52)).toEqual([
  //   '##################################',
  //   '# 52 Happy Birthday Jacqulyn! 52 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Lucrecia', 95)).toEqual([
  //   '**********************************',
  //   '* 95 Happy Birthday Lucrecia! 95 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Stephine', 48)).toEqual([
  //   '##################################',
  //   '# 48 Happy Birthday Stephine! 48 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Kasandra', 57)).toEqual([
  //   '**********************************',
  //   '* 57 Happy Birthday Kasandra! 57 *',
  //   '**********************************',
  // ]);
  // expect(getBirthdayCake('Fletcher', 76)).toEqual([
  //   '##################################',
  //   '# 76 Happy Birthday Fletcher! 76 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Kristine', 12)).toEqual([
  //   '##################################',
  //   '# 12 Happy Birthday Kristine! 12 #',
  //   '##################################',
  // ]);
  // expect(getBirthdayCake('Evangelina', 75)).toEqual([
  //   '************************************',
  //   '* 75 Happy Birthday Evangelina! 75 *',
  //   '************************************',
  // ]);
  // expect(getBirthdayCake('Evangelina', 60)).toEqual([
  //   '####################################',
  //   '# 60 Happy Birthday Evangelina! 60 #',
  //   '####################################',
  // ]);
  // expect(getBirthdayCake('Evangelina', 97)).toEqual([
  //   '************************************',
  //   '* 97 Happy Birthday Evangelina! 97 *',
  //   '************************************',
  // ]);
});
