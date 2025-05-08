import { NickPipe } from './nick.pipe';

describe('NickPipe', () => {
  it('create an instance', () => {
    const pipe = new NickPipe();
    expect(pipe).toBeTruthy();
  });
});
