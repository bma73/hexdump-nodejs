hexdump-js
=============
Hexdump an ArrayBuffer to a String (JS / browser)

----------

### Install

```
npm install hexdump-js
```

----------

###Usage
```js
var hexdump = require('hexdump-js');

var view = new DataView(new ArrayBuffer(0x60));
view.setUint16(0, 0xaaaa);
view.setUint32(0x25, 0x12345678);
view.setUint32(0x50, 0xffffbbbb);

console.log(hexdump(view.buffer));
```
This outputs the following to the console:
```sh
  Offset  00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
00000000  AA AA 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ªª..............
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
00000020  00 00 00 00 00 12 34 56 78 00 00 00 00 00 00 00  ......4Vx.......
00000030  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
00000040  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
00000050  FF FF BB BB 00 00 00 00 00 00 00 00 00 00 00 00  ÿÿ»»............
```


Use [Browserify][1] to ``require`` the npm module e.g.:
```sh
browserify example/main.js -o example/bundle.js
```



  [1]: http://browserify.org/