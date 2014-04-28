hexdump-nodejs
=============
Hexdump an ArrayBuffer to a String (NodeJS)

----------

### Install

```
npm install hexdump-nodejs
```

----------

###Usage
```js
var hexdump = require('hexdump-nodejs');
var buffer = new Buffer(0x60);

buffer.writeUInt16BE(0xaaaa, 0);
buffer.writeUInt32BE(0x12345678, 0x40);
buffer.writeUInt32BE(0xffffbbbb, 0x50);
buffer.write('The quick brown fox jumps over the lazy dog!', 0x10);

console.log(hexdump(buffer));
```
This outputs the following to the console:
```sh
  Offset  00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
00000000  AA AA 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ªª..............
00000010  54 68 65 20 71 75 69 63 6B 20 62 72 6F 77 6E 20  The quick brown
00000020  66 6F 78 20 6A 75 6D 70 73 20 6F 76 65 72 20 74  fox jumps over t
00000030  68 65 20 6C 61 7A 79 20 64 6F 67 21 00 00 00 00  he lazy dog!....
00000040  12 34 56 78 00 00 00 00 00 00 00 00 00 00 00 00  .4Vx............
00000050  FF FF BB BB 00 00 00 00 00 00 00 00 00 00 00 00  ÿÿ»»............
```
