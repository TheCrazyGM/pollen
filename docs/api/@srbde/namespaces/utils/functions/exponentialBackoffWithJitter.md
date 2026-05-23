[**@srbde/pollen**](../../../../README.md)

***

[@srbde/pollen](../../../../globals.md) / [utils](../README.md) / exponentialBackoffWithJitter

# Function: exponentialBackoffWithJitter()

> **exponentialBackoffWithJitter**(`tries`, `baseDelay?`, `maxDelay?`, `jitter?`): `number`

Defined in: [src/utils.ts:328](https://github.com/TheCrazyGM/dhive/blob/05b0edbddcc11f33d84516003ab882605dad28aa/src/utils.ts#L328)

Standard exponential backoff with jitter.
Formula: min(maxDelay, (base * 2^tries)) + random(0, jitter)

## Parameters

### tries

`number`

### baseDelay?

`number` = `500`

### maxDelay?

`number` = `10000`

### jitter?

`number` = `100`

## Returns

`number`
