# DWN Community Node User Guide

This will get you up to speed with the basics of working with Decentralized Web Nodes (DWNs) and DIF's DWN Community Node, powered by Google Cloud. This includes a minimal CLI project and additional guidance to get you started.
![dwn_community_node](https://github.com/user-attachments/assets/0f1617d2-5dec-4a74-9f70-a9f5634ebec0)

## Introduction

A DWN is a decentralized personal and application data storage and message relay node. Users may have multiple nodes that replicate their data between them.

DWNs provide the following benefits:

- Reduced Reliance on Third Parties: Users are less dependent on centralized platforms that often collect and monetize their data.
- Increased User Control: Users can choose what data to share and with whom, fostering a more secure and empowering online experience via the use of [protocols](https://developer.tbd.website/docs/web5/learn/protocols).

DWNs follow an open standard; see the DIF [Decentralized Web Node specification](https://identity.foundation/decentralized-web-node/spec/). DIF plays a vital role in addressing these challenges through standardization and education, paving the way for a future Web where privacy and data sovereignty are paramount.

## About the DIF DWN Community Node

TODO

## Basic CLI Tutorial

### About

For simplicity, this sample uses [TBD's `@web/api` package](https://github.com/TBD54566975/web5-js), which handles the details of interacting with DWNs. Because this conforms to the DWN spec, you may use a different library or write your own to interact with DWNs.

By default, the `@web5/api` package connects to TBD's DWN instance. You can configure this code to connect to other instances, such as your own self-hosted instance or DIF's Community Node.

We'll start with a basic DWN command line example, which will use the default (TBD's) DWN node, and then update it to use DIF's Community Node.

### Install

```bash
git clone https://github.com/decentralized-identity/dwn-cli-sample.git
cd dwn-cli-sample
npm install
npm run build
```

### Commands

- all-data: List all the DWN records
- create-did: Create a DID
- help: Display help for dwn-cli.
- plugins: List installed plugins.
- reset-did: Reset didDocument
- retrieve-data: Retrieve records from DWN
- store-data: Store data to DWN

### Examples

#### Create a DID

```sh
./bin/run.js create-did
```

Output will look like:

```sh
Created DID: did:dht:43ffbao7fxkhofcxpody87dz74cp5ynx8bsed4iudtzqk7gimewy
```

#### Write to the DWN

```sh
 ./bin/run.js store-data "hello world"
```

Output will look like:

```sh
Record ID: bafyreih4rqmu4jztwoews26onwda3y7p4gfguevke2cxhvtvmul73bl4v4
```

#### List the records in the DWN

```sh
./bin/run.js all-data
```

Output will look like:

```sh
==============Document list==========
1. bafyreih4rqmu4jztwoews26onwda3y7p4gfguevke2cxhvtvmul73bl4v4

```

#### Retrieve a DWN record by record ID

```sh
./bin/run.js retrieve-data bafyreih4rqmu4jztwoews26onwda3y7p4gfguevke2cxhvtvmul73bl4v4
```

Output will look like:

```sh
============Record Data=================
Author: did:dht:43ffbao7fxkhofcxpody87dz74cp5ynx8bsed4iudtzqk7gimewy
Content: hello world
```

## Connecting to the DIF Community Node

```js
const {did, web5} = await Web5.connect({
  didCreateOptions: {
    dwnEndpoints: ['https://dwn.gcda.xyz'], // User provides google's community DWN instance
  },
  registration: {
    onSuccess: () => {
      // Registration succeeded, set a local storage value to indicate the user is registered and registration does not need to occur again.
    },
    onFailure: (error) => {
      // Registration failed, display an error message to the user, and pass in the registration object again to retry next time the user connects.
    },
  },
})
```

## Running your own DWN server

By default, when you call `Web5.connect()` it will use the bootstrap DWN nodes included which allow people to reach you via your DID.

You may want to run a DWN server just for you, or as a public service for you and your friends and family. DWNs can be as simple as a docker image or a node process running somewhere.

DWN-servers can run anywhere you can run node.js or docker. http and websocket need to be available to the DWN server. See below for some suggestions.

For additional details about configuration settings for privacy, data storage, and network connectivity, see [TBD's recommendations](https://github.com/TBD54566975/dwn-server/blob/main/README.md).

### Running on render.com

You can run an instance on the render.com service:

- Create a render.com account
- Fork this repo
- Upgrade your render.com account to a paid account
- Create a new "Web service" type application
- Choose the forked repo to run (or you can point to the main repo)
- Choose the "starter" size instance
- Create a 1GB (or larger) disk, and mount it on /dwn-server/data

### Running with ngrok

You can run a DWN-server on your local machine or home server and expose it to the internet using ngrok.

First, install [ngrok](https://ngrok.com/download)

Then run:

```bash
  docker run -p 3000:3000 -v myvolume:/dwn-server/data ghcr.io/tbd54566975/dwn-server:main

  ## in another terminal:
  ngrok http 3000
```

- Note the resulting publicly addressable https url for your DWN instance.

### Running with cloudflared

Cloudflare has a tunnel service that you can use to expose your DWN server to the internet, if you run it on a server at home. With cloudflared installed, run the following commands:

```sh
  git clone https://github.com/TBD54566975/dwn-server.git
  cd dwn-server
  npm install
  npm run server

  ## in another terminal:

  cloudflared tunnel --url http://localhost:3000
```

## Community and Support

- Support & usage (sponsored by TBD): [Discord](https://discord.gg/tbd)
- Issues with this documentation or DIF samples: create a github issue in the appropriate repo
- Get involved in the DWN specification: [join DIF](https://identity.foundation/join/)

## Additional Resources

- [TBD's documentation](https://developer.tbd.website/docs/web5/build/decentralized-web-nodes/web5-connect)
