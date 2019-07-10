<a href="https://travis-ci.org/Xotic750/is-nil-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-nil-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-nil-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-nil-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-nil-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-nil-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-nil-x" title="npm version">
<img src="https://badge.fury.io/js/is-nil-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-nil-x"></a>

## is-nil-x

Checks if `value` is `null` or `undefined`.

<a name="exp_module_is-nil-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

Checks if `value` is `null` or `undefined`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is nullish, else `false`.

| Param | Type            | Description         |
| ----- | --------------- | ------------------- |
| value | <code>\*</code> | The value to check. |

**Example**

```js
import isNil from 'is-nil-x';

console.log(isNil(null)); // => true
console.log(isNil(void 0)); // => true
console.log(isNil(NaN)); // => false
```
