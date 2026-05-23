[**@srbde/pollen**](../README.md)

***

[@srbde/pollen](../globals.md) / AccountCreateOperation

# Interface: AccountCreateOperation

Defined in: [src/chain/operation.ts:154](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L154)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"account_create"`

Defined in: [src/chain/operation.ts:155](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L155)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:156](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/chain/operation.ts#L156)

#### active

> **active**: [`AuthorityType`](AuthorityType.md)

#### creator

> **creator**: `string`

#### fee

> **fee**: `string` \| [`Asset`](../classes/Asset.md)

#### json\_metadata

> **json\_metadata**: `string`

#### memo\_key

> **memo\_key**: `string` \| [`PublicKey`](../classes/PublicKey.md)

#### new\_account\_name

> **new\_account\_name**: `string`

#### owner

> **owner**: [`AuthorityType`](AuthorityType.md)

#### posting

> **posting**: [`AuthorityType`](AuthorityType.md)

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
