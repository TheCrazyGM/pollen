[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / PriceType

# Type Alias: PriceType

> **PriceType** = [`Price`](../classes/Price.md) \| \{ `base`: [`Asset`](../classes/Asset.md) \| `string`; `quote`: [`Asset`](../classes/Asset.md) \| `string`; \}

Defined in: [src/chain/asset.ts:358](https://github.com/TheCrazyGM/dhive/blob/ae4989e28e0cf43ae59af4e3ad2b2a9309e6596e/src/chain/asset.ts#L358)

Value accepted anywhere Pollen needs a Hive price ratio.

## Example

```ts
const feed: PriceType = {
  base: '1.000 HIVE',
  quote: '0.300 HBD'
}
```
