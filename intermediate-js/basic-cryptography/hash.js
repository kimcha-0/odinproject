const { createHash } = require("crypto");
const { argon2 } = require('argon2');

function hash(input) {
    return createHash("sha256").update(input).digest();
}

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1);

password = 'hi-mom';
const hash2 = hash(password);
const match = hash === hash2;

console.log(match ? 'good password' : 'password does not match');

async function argonHash(input) {
    try {
        const hash = await argon2.hash(input);
    } catch (err) {
    }
    return hash;
}

console.log(argonHash(password));
