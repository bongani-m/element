# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/decentralized-identity/element/compare/v0.3.0...v0.4.0) (2020-01-07)


### Bug Fixes

* eslint setup ([24be4e8](https://github.com/decentralized-identity/element/commit/24be4e8))
* recovery id bug ([90f1725](https://github.com/decentralized-identity/element/commit/90f1725))


### Features

* add RSA as valid key type ([2e33c5c](https://github.com/decentralized-identity/element/commit/2e33c5c))
* add support for service and proof ([9aa0bea](https://github.com/decentralized-identity/element/commit/9aa0bea))
* update schema to support did-key ([8c00433](https://github.com/decentralized-identity/element/commit/8c00433))





# [0.3.0](https://github.com/decentralized-identity/element/compare/v0.2.0...v0.3.0) (2019-12-20)


### Bug Fixes

* add transactionHash to rxdb schema ([e85bfbf](https://github.com/decentralized-identity/element/commit/e85bfbf))
* bug where operations could be overriden ([0ca42a9](https://github.com/decentralized-identity/element/commit/0ca42a9))
* cache instance for faster getTransactions ([200cc65](https://github.com/decentralized-identity/element/commit/200cc65))
* dequeue processed operations in batchWrite ([3ba129b](https://github.com/decentralized-identity/element/commit/3ba129b))
* dont mark a partially synced transaction as synced ([698dab0](https://github.com/decentralized-identity/element/commit/698dab0))
* fix condition for checking a recovery key ([8f31d07](https://github.com/decentralized-identity/element/commit/8f31d07))
* fix id in key schema ([63ab5f6](https://github.com/decentralized-identity/element/commit/63ab5f6))
* fix payloadToHash to be like sidetree ([3249474](https://github.com/decentralized-identity/element/commit/3249474))
* kid missing # ([7322676](https://github.com/decentralized-identity/element/commit/7322676))
* test operationHash ([b614b1b](https://github.com/decentralized-identity/element/commit/b614b1b))
* transactionTime in the case where lastTransaction exists ([dd59cc2](https://github.com/decentralized-identity/element/commit/dd59cc2))
* use transactionTime instead of Date.now ([ffbf682](https://github.com/decentralized-identity/element/commit/ffbf682))
* wrong operationHash doesnt match did ([46d3a5c](https://github.com/decentralized-identity/element/commit/46d3a5c))


### Features

* add a batchScheduler ([d308245](https://github.com/decentralized-identity/element/commit/d308245))
* add a didDocumentModel schema ([d9609f7](https://github.com/decentralized-identity/element/commit/d9609f7))
* add a new lastResolvedTransactionTime variable to the cache object ([8ce8973](https://github.com/decentralized-identity/element/commit/8ce8973))
* add a sidetree key schema ([cc40df5](https://github.com/decentralized-identity/element/commit/cc40df5))
* add batchFileToOperations to the func module ([1aec403](https://github.com/decentralized-identity/element/commit/1aec403))
* add couchdb adapter in element-lib ([8be7f94](https://github.com/decentralized-identity/element/commit/8be7f94))
* add flag to activate the just in time feature of the resolver ([82ac820](https://github.com/decentralized-identity/element/commit/82ac820))
* add payload validation in the resolver ([e8e40c2](https://github.com/decentralized-identity/element/commit/e8e40c2))
* add removing a key update ([ff2778e](https://github.com/decentralized-identity/element/commit/ff2778e))
* add signature validation for update operation ([2f8433f](https://github.com/decentralized-identity/element/commit/2f8433f))
* add suport for websql rxdb adapter ([7dd30f9](https://github.com/decentralized-identity/element/commit/7dd30f9))
* add support for delete operation ([33093cb](https://github.com/decentralized-identity/element/commit/33093cb))
* add support for leveldown rxdb adapter ([e5fa056](https://github.com/decentralized-identity/element/commit/e5fa056))
* add transactionTimeHash to getTransactions ([886f9f8](https://github.com/decentralized-identity/element/commit/886f9f8))
* add update operation for adding a new key ([d558d1e](https://github.com/decentralized-identity/element/commit/d558d1e))
* add usage property to getDidDocumentModel ([504327f](https://github.com/decentralized-identity/element/commit/504327f))
* check last operation hash in create operation ([aadb542](https://github.com/decentralized-identity/element/commit/aadb542))
* check signature in create operation ([284f102](https://github.com/decentralized-identity/element/commit/284f102))
* fix header encoding for create operation ([dbdb2da](https://github.com/decentralized-identity/element/commit/dbdb2da))
* fix sign and verify to include encoded header ([087ba79](https://github.com/decentralized-identity/element/commit/087ba79))
* getTransactions endpoint ([fd7e7e0](https://github.com/decentralized-identity/element/commit/fd7e7e0))
* implement operation queue ([ac1aad3](https://github.com/decentralized-identity/element/commit/ac1aad3))
* implement recover op ([191f4d5](https://github.com/decentralized-identity/element/commit/191f4d5))
* operation validation ([e71220e](https://github.com/decentralized-identity/element/commit/e71220e))
* refactor all operations to use a makeSignedOperation ([b4a5026](https://github.com/decentralized-identity/element/commit/b4a5026))
* refactor resolve to apply operation in the right order ([094186b](https://github.com/decentralized-identity/element/commit/094186b))
* stop syncing transaction after sending to ethereum ([6eedf4a](https://github.com/decentralized-identity/element/commit/6eedf4a))
* throw errors when operation is not valid ([1c3b68b](https://github.com/decentralized-identity/element/commit/1c3b68b))
* use cache for anchorFiles ([9021893](https://github.com/decentralized-identity/element/commit/9021893))
* use previousOperationHash in update ([1c65ced](https://github.com/decentralized-identity/element/commit/1c65ced))
* use usage in getUpdatePayloadForAddingAKey ([25d1ebd](https://github.com/decentralized-identity/element/commit/25d1ebd))





# [0.2.0](https://github.com/decentralized-identity/element/compare/v0.0.2-2...v0.2.0) (2019-11-08)


### Bug Fixes

* add a default gas price of 100 GWei ([a65c1b5](https://github.com/decentralized-identity/element/commit/a65c1b5))
* add fromTransactionTime parameter in getTransactions ([247d49b](https://github.com/decentralized-identity/element/commit/247d49b))
* add omitTimestamp flag for resolver ([18eb7f9](https://github.com/decentralized-identity/element/commit/18eb7f9))
* add requirement for node 10 ([c2c6cd8](https://github.com/decentralized-identity/element/commit/c2c6cd8))
* await bug ([02974b4](https://github.com/decentralized-identity/element/commit/02974b4))
* fix badOperation ([8282df4](https://github.com/decentralized-identity/element/commit/8282df4))
* fix resolver not working when there is a cache hit ([17021e6](https://github.com/decentralized-identity/element/commit/17021e6))
* increment transactionTime ([4a4cfeb](https://github.com/decentralized-identity/element/commit/4a4cfeb))
* ipfs test ([da1b9fd](https://github.com/decentralized-identity/element/commit/da1b9fd))
* make sure to read ipfs if cache is empty ([672a558](https://github.com/decentralized-identity/element/commit/672a558))
* pin truffle-hdwallet-provider to 1.0.5 ([f355b00](https://github.com/decentralized-identity/element/commit/f355b00))
* remove networkChangedDetected variable ([a291f46](https://github.com/decentralized-identity/element/commit/a291f46))
* storage manager test ([1d70d41](https://github.com/decentralized-identity/element/commit/1d70d41))
* test memory issue ([24c744a](https://github.com/decentralized-identity/element/commit/24c744a))
* test timeout ([ac34551](https://github.com/decentralized-identity/element/commit/ac34551))
* truffle test ([9e96ef7](https://github.com/decentralized-identity/element/commit/9e96ef7))
* update context to use a did spec that supports publicKeyHex ([91978b1](https://github.com/decentralized-identity/element/commit/91978b1))
* upgrade web3 version in lib ([e9d0a5f](https://github.com/decentralized-identity/element/commit/e9d0a5f))
* use Promise API for web3.eth.getBlock ([7c06dd8](https://github.com/decentralized-identity/element/commit/7c06dd8))
* use rxdb on api ([c2348b8](https://github.com/decentralized-identity/element/commit/c2348b8))
* version of solc to avoid truffle build error ([7493e40](https://github.com/decentralized-identity/element/commit/7493e40))


### Features

* add storage manager ([c97a369](https://github.com/decentralized-identity/element/commit/c97a369))
* add transactionTimestamp ([a8a5291](https://github.com/decentralized-identity/element/commit/a8a5291))
* make storage manager retry interval configurable ([8087d16](https://github.com/decentralized-identity/element/commit/8087d16))
* replace pouchdb with rxdb for app db ([94e390b](https://github.com/decentralized-identity/element/commit/94e390b))