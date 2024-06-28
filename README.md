# dwn-cli-app

This is a minimal project demonstrating working with DWNs over CLI. This uses the `@web/api` package,
which now uses the public hosted DWN.

## Install

```bash
npm install
npm run build
```

## Commands

- all-data: List all the DWN documents
- create-did: Create a DID
- help; Display help for dwn-cli.
- plugins: List installed plugins.
- reset-did: Reset didDocument
- retrieve-data: Retrieve data from DWN
- store-data: Store data to DWN

## Examples

### Create a DID

```bash
./bin/run.js create-did
```

Output will look like:

```bash
Created DID:  did:dht:43ffbao7fxkhofcxpody87dz74cp5ynx8bsed4iudtzqk7gimewy
```

### Write to the DWN

```bash
 ./bin/run.js store-data "hello world"
```

Output will look like:

```bash
Data is stored on the DWN :  bafyreih4rqmu4jztwoews26onwda3y7p4gfguevke2cxhvtvmul73bl4v4
```

### List the data in the DWN

```bash
okimsRazor:dwn-cli-sample kim$ ./bin/run.js all-data
```

Output will look like:

```bash
==============Doument list==========
1.  bafyreih4rqmu4jztwoews26onwda3y7p4gfguevke2cxhvtvmul73bl4v4

```
