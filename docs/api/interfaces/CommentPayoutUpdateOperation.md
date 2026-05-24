[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / CommentPayoutUpdateOperation

# Interface: CommentPayoutUpdateOperation

Defined in: [src/chain/operation.ts:1481](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L1481)

Generic Hive operation tuple.

## Remarks

Position `0` is the operation name; position `1` is the payload object. Use
the specific operation interfaces when constructing transactions so TypeScript
can validate the payload shape.

## Example

```ts
const op: Operation = ['transfer', {
  from: 'srbde',
  to: 'alice',
  amount: '1.000 HIVE',
  memo: 'Pollen'
}]
```

## Extends

- [`OperationTuple`](OperationTuple.md)

## Properties

### 0

> **0**: `"comment_payout_update"`

Defined in: [src/chain/operation.ts:1482](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L1482)

#### Overrides

[`OperationTuple`](OperationTuple.md).[`0`](OperationTuple.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:1483](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/operation.ts#L1483)

#### author

> **author**: `string`

#### permlink

> **permlink**: `string`

#### Overrides

[`OperationTuple`](OperationTuple.md).[`1`](OperationTuple.md#1)
