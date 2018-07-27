import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export default function trace(
  label: string,
  log: Function = console.log
): (source$: Observable<any>) => Observable<any> {
  return source$ => source$.pipe(tap(v => log(label, v)));
}
