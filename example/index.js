var hexdump = require('hexdump-nodejs');
var buffer = new Buffer(0x60);

buffer.writeUInt16BE(0xaaaa, 0);
buffer.writeUInt32BE(0x12345678, 0x40);
buffer.writeUInt32BE(0xffffbbbb, 0x50);
buffer.write('The quick brown fox jumps over the lazy dog!', 0x10);

console.log(hexdump(buffer));