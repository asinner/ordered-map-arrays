# README

`ordered-map-arrays` is a type of ordered map where all values are by default
stored in array for a given key.

Ships with Typescript support.

## Usage

**`.push(key: number, value: T)`**

Add your value for the given key. If a value exists at the key, your value is
added after it, but before the next key in the order.

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(2, 'bar')
map.push(3, 'baz')
map.push(1, 'foobar')

console.log(map.toArray()) // prints ['foo', 'foobar', 'bar', 'baz']
```

**`.set(key: number, value: T)`**

Set the value for the key. This removes any existing values at the key.

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(1, 'bar')
map.push(1, 'baz')
map.set(1, 'example')

map.get(1) // returns ['example']
```

**`.get(key: number): T[]`**

Return the values for a given key in their order:

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(1, 'bar')
map.push(1, 'foobar')

map.get(1) // returns  ['foo', 'bar', 'foobar']
```

**`.prepend(key: number, value: T)`**

Prepend a value at the key:

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(1, 'bar')
map.prepend(1, 'foobar')

map.get(1) // returns  ['foobar', 'foo', 'bar']
```

**`.concat(key: number, value: T[])`**

Concat values for the given key

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(1, 'bar')
map.concat(1, ['foobar', 'foobaz'])

map.get(1) // returns  ['foo', 'bar', 'foobar', 'foobaz']
```

**`.values(): T[]`**

Returns values in their order by key

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(1, 'foo')
map.push(1, 'bar')
map.push(2, 'foobar')
map.push(3, 'foobaz')

map.values() // returns  ['foo', 'bar', 'foobar', 'foobaz']
```

**`.keys(): number[]`**

Returns the map's keys in order:

```ts
import OrderedMap from 'ordered-map-arrays';

const map = new OrderedMap()
map.push(-10, 'foobar')
map.push(0, 'foo')
map.push(10, 'foo')
map.push(100, 'bar')
map.push(999, 'foobaz')

map.keys() // returns  [-10, 0, 10, 100, 999]
```