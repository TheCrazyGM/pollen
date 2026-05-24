[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / concat

# Function: concat()

> **concat**(`arrays`): `Uint8Array`

Defined in: [src/utils.ts:142](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/utils.ts#L142)

Concatenates multiple Uint8Arrays into one.

## Parameters

### arrays

`Uint8Array`\<`ArrayBufferLike`\>[]

Byte arrays to join in order.

## Returns

`Uint8Array`

A new `Uint8Array` containing all input bytes.

## Remarks

This replaces Node `Buffer.concat` in protocol paths that must run the same
way in Node and browsers.

## Example

```ts
const digestInput = concat([chainId, transactionBytes])
```
