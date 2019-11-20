import validateTheRelationships from './index';

test('validateTheRelationships', () => {
  expect(validateTheRelationships('3>=-1')).toBe(true);
  expect(validateTheRelationships('9<=9<-1')).toBe(false);
  expect(validateTheRelationships('0<9<=9>-1')).toBe(true);
  expect(validateTheRelationships('55>7>=7>=1')).toBe(true);
  expect(validateTheRelationships('3<=3<11>-109')).toBe(true);
  expect(validateTheRelationships('10>2=22>9>3')).toBe(false);
  expect(validateTheRelationships('-15<-10<=0=0<5')).toBe(true);
  expect(validateTheRelationships('44>-33>=1>-13')).toBe(false);
  expect(validateTheRelationships('-39<=5=5<=9>-1')).toBe(true);
  expect(validateTheRelationships('5>-1<0=0<-5>5=5')).toBe(false);
  expect(validateTheRelationships('3<19>-19>5>=-19')).toBe(false);
  expect(validateTheRelationships('44>0<13>=-2<-1=-1')).toBe(true);
  expect(validateTheRelationships('44>=0<13>-2<-1=1')).toBe(false);
  expect(validateTheRelationships('0=807<1000<=1000>9990<-3605<=20')).toBe(
    false,
  );
});
