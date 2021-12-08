/* eslint-disable no-unused-vars */

let f;
let m;
let x;

/**
 * Test comma-dangle
 */

x = [
  1,
  2 // eslint-disable-line comma-dangle
];

x = [1, 2];

x = {
  a: 1,
  b: 2 // eslint-disable-line comma-dangle
};

x = { a: 1, b: 2 };

/**
 * Test dot-notation
 */

x = process.env.USER;
x = process.env['USER'];

/**
 * Test function-paren-newline
 */

f = (
  a
) => 1;

/**
 * Test implicit-arrow-linebreak
 */

f = () =>
  5;

/**
 * Test max-len
 */

// eslint-disable-next-line max-len
x = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
x = 'http://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
x = 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
// eslint-disable-next-line quotes
x = `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`;

/**
 * Test no-restricted-syntax
 */

for (const z of [1, 2, 3]) {
  console.log(z);
}

/**
 * Test radix
 */

Number.parseInt('123');
Number.parseInt('123', 10); // eslint-disable-line radix

/**
 * Test unicorn/custom-error-definition
 */

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Wrong'; // eslint-disable-line unicorn/custom-error-definition
  }
}

/**
 * Test unicorn/no-unsafe-regex
 */

x = /(x+x+)+y/; // eslint-disable-line unicorn/no-unsafe-regex

/**
 * Test unicorn/no-useless-undefined
 */

f = () => {
  const z = 1;
  if (z === 1) return;

  console.log('asdf');
};

/**
 * Test unicorn/prevent-abbreviations
 */

const env = 'env';

/* eslint-enable no-unused-vars */
