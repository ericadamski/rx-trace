# Rx-Trace

📝 A simple trace operator to help with debugging Rx streams

## API

```javascript
function trace( label: string, log: Function = console.log ): (source$: Observable<any>) => Observable<any>;
```

## Example

```javascript
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import trace from 'rxtrace';

from([1, 2, 3])
  .pipe(
    map(i => i * 2),
    trace('multiply'),
    filter(i => i % 3 !== 0),
    trace('not divisible by three')
  )
  .subscribe({
    next(i) {
      console.log(`result ${i}`);
    },
  });
```
