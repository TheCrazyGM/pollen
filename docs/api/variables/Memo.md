[**@srbde/pollen**](../README.md)

***

[@srbde/pollen](../globals.md) / Memo

# Variable: Memo

> `const` **Memo**: `object`

Defined in: [src/memo.ts:109](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/memo.ts#L109)

## Type Declaration

### decode

> **decode**: (`private_key`, `memo`) => `string`

Encrypted memo/message decryption

#### Parameters

##### private\_key

`string` \| [`PrivateKey`](../classes/PrivateKey.md)

Private memo key of recipient

##### memo

`string`

Encrypted message/memo

#### Returns

`string`

### encode

> **encode**: (`private_key`, `public_key`, `memo`, `testNonce?`) => `string`

Memo/Any message encoding using AES (aes-cbc algorithm)

#### Parameters

##### private\_key

`string` \| [`PrivateKey`](../classes/PrivateKey.md)

Private memo key of sender

##### public\_key

`string` \| [`PublicKey`](../classes/PublicKey.md)

public memo key of recipient

##### memo

`string`

message to be encrypted

##### testNonce?

`string`

nonce with high entropy

#### Returns

`string`
