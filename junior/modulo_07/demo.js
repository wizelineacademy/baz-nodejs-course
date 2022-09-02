const buff = Buffer.from('Hello buffer');
const oneKb = Buffer.alloc(1024, 'one kb');
console.log({ buff, oneKb });

buff.forEach((byte) => {
  console.log(byte);
});

const smallBuff = Buffer.alloc(8);
const bigBuff = Buffer.alloc(512);
const defaultText = 'Default Text';

smallBuff.write(defaultText);
bigBuff.write(defaultText);

console.log({ smallBuff, string: smallBuff.toString() });
console.log({ bigBuff, string: bigBuff.toString() });
