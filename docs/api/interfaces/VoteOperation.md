[**@srbde/pollen**](../README.md)

***

[@srbde/pollen](../globals.md) / VoteOperation

# Interface: VoteOperation

Defined in: [src/chain/operation.ts:811](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L811)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"vote"`

Defined in: [src/chain/operation.ts:812](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L812)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:813](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L813)

#### author

> **author**: `string`

#### permlink

> **permlink**: `string`

#### voter

> **voter**: `string`

#### weight

> **weight**: `number`

Voting weight, 100% = 10000 (100_PERCENT).

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
