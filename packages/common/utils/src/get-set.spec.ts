import { get, set } from './get-set';

describe('get은', () => {
  it('한 단계 path를 잘 get한다', () => {
    expect(get({ a: { b: { c: 'd' } } }, 'a')).toStrictEqual({ b: { c: 'd' } });
  });
  it('여러 단계 path를 잘 get한다', () => {
    expect(get({ a: { b: { c: 'd' } } }, 'a.b')).toStrictEqual({ c: 'd' });
    expect(get({ a: { b: { c: 'd' } } }, 'a.b.c')).toStrictEqual('d');
  });
});

describe('set은', () => {
  it('한 단계 path를 잘 set한다', () => {
    expect(set({ a: { b: { c: 'd' } } }, 'a', 'e')).toStrictEqual({ a: 'e' });
  });
  it('여러 단계 path를 잘 set한다', () => {
    expect(set({ a: { b: { c: 'd' } } }, 'a.b.c', 'e')).toStrictEqual({ a: { b: { c: 'e' } } });
  });
  it('여러 단계 path를 잘 set한다', () => {
    expect(set({ a: { b: { c: 'c' } } }, 'a.b.e', 'e')).toStrictEqual({ a: { b: { c: 'c', e: 'e' } } });
  });
});
