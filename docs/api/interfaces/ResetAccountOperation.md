[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / ResetAccountOperation

# Interface: ResetAccountOperation

Defined in: [src/chain/operation.ts:914](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L914)

This operation allows recovery_account to change account_to_reset's owner authority to
new_owner_authority after 60 days of inactivity.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"reset_account"`

Defined in: [src/chain/operation.ts:915](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L915)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

---

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:916](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L916)

#### account_to_reset

> **account_to_reset**: `string`

#### new_owner_authority

> **new_owner_authority**: [`AuthorityType`](AuthorityType.md)

#### reset_account

> **reset_account**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
