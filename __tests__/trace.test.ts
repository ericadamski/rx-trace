import { from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import trace from '../index';

const mockOf = of;

describe('trace', () => {
  const label = 'label';
  const arr = [1];

  it('should log output with the given label', () => {
    const log = jest.fn();

    return from(arr)
      .pipe(trace(label, log))
      .toPromise()
      .then(() => {
        expect(log).toHaveBeenCalledTimes(arr.length);
        // @ts-ignore
        expect(log.mock.calls).toMatchSnapshot();
      });
  });

  it('should call rx-js tap operator', () => {
    // @ts-ignore
    tap = jest.fn(() => () => mockOf({}));

    return from(arr)
      .pipe(trace(label))
      .toPromise()
      .then(() => {
        expect(tap).toHaveBeenCalledTimes(1);
      });
  });
});
