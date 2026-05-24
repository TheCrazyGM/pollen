[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / CustomOperation

# Interface: CustomOperation

Defined in: [src/chain/operation.ts:608](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L608)

Legacy binary custom operation requiring active authority.

## Extends

- [`OperationTuple`](OperationTuple.md)

## Properties

### 0

> **0**: `"custom"`

Defined in: [src/chain/operation.ts:609](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L609)

#### Overrides

[`OperationTuple`](OperationTuple.md).[`0`](OperationTuple.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:610](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L610)

#### data

> **data**: `number`[] \| `Uint8Array`\<`ArrayBufferLike`\> \| [`HexBuffer`](../classes/HexBuffer.md)

#### id

> **id**: `number`

#### required\_auths

> **required\_auths**: `string`[]

#### Overrides

[`OperationTuple`](OperationTuple.md).[`1`](OperationTuple.md#1)
