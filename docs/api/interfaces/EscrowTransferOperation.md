[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / EscrowTransferOperation

# Interface: EscrowTransferOperation

Defined in: [src/chain/operation.ts:705](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L705)

The purpose of this operation is to enable someone to send money contingently to
another individual. The funds leave the _from_ account and go into a temporary balance
where they are held until _from_ releases it to _to_ or _to_ refunds it to _from_.

In the event of a dispute the _agent_ can divide the funds between the to/from account.
Disputes can be raised any time before or on the dispute deadline time, after the escrow
has been approved by all parties.

This operation only creates a proposed escrow transfer. Both the _agent_ and _to_ must
agree to the terms of the arrangement by approving the escrow.

The escrow agent is paid the fee on approval of all parties. It is up to the escrow agent
to determine the fee.

Escrow transactions are uniquely identified by 'from' and 'escrow_id', the 'escrow_id' is defined
by the sender.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"escrow_transfer"`

Defined in: [src/chain/operation.ts:706](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L706)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

---

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:707](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L707)

#### agent

> **agent**: `string`

#### escrow_expiration

> **escrow_expiration**: `string`

#### escrow_id

> **escrow_id**: `number`

#### fee

> **fee**: `string` \| [`Asset`](../classes/Asset.md)

#### from

> **from**: `string`

#### hbd_amount

> **hbd_amount**: `string` \| [`Asset`](../classes/Asset.md)

#### hive_amount

> **hive_amount**: `string` \| [`Asset`](../classes/Asset.md)

#### json_meta

> **json_meta**: `string`

#### ratification_deadline

> **ratification_deadline**: `string`

#### to

> **to**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
