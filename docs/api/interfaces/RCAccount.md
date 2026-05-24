[**@srbde/pollen**](../index.md)

---

[@srbde/pollen](../index.md) / RCAccount

# Interface: RCAccount

Defined in: [src/chain/rc.ts:94](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L94)

RC account state returned by `find_rc_accounts`.

## Remarks

`rc_manabar` is a decaying/regenerating value. Use
[RCAPI.calculateRCMana](../classes/RCAPI.md#calculatercmana) or [RCAPI.getRCMana](../classes/RCAPI.md#getrcmana) to project the
current value instead of reading `current_mana` directly.

## Example

```ts
const [account] = await client.rc.findRCAccounts(["srbde"]);
console.log(account.max_rc);
```

## Properties

### account

> **account**: `string`

Defined in: [src/chain/rc.ts:95](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L95)

---

### max_rc

> **max_rc**: `string`

Defined in: [src/chain/rc.ts:101](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L101)

---

### max_rc_creation_adjustment

> **max_rc_creation_adjustment**: `string` \| [`SMTAsset`](SMTAsset.md)

Defined in: [src/chain/rc.ts:100](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L100)

---

### rc_manabar

> **rc_manabar**: `object`

Defined in: [src/chain/rc.ts:96](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/rc.ts#L96)

#### current_mana

> **current_mana**: `string`

#### last_update_time

> **last_update_time**: `number`
