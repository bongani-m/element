/* eslint-disable no-underscore-dangle */
const RxDB = require('rxdb');

class ElementRXDBAdapter {
  constructor({ name }) {
    // RXDB name regex is quite restrictive, therefore we have to replace
    // some special characters like "." and "-" with "_"
    // and put all letters to lowercase
    this.name = name.replace(/\.|-/g, '_').toLowerCase();
    if (process.browser) {
      RxDB.plugin(require('pouchdb-adapter-idb'));
      this.adapter = 'idb';
    } else {
      RxDB.plugin(require('pouchdb-adapter-leveldb'));
      this.adapter = require('memdown');
    }
  }

  async _createCollection() {
    return this.db.collection({
      name: 'elementcollection',
      schema: {
        version: 0,
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          anchorFileHash: {
            type: 'string',
          },
          operationHash: {
            type: 'string',
          },
          batchFileHash: {
            type: 'string',
          },
          networkChangeDetected: {},
          transactionTime: {},
          transactionTimeHash: {},
          transactionNumber: {},
          transactionTimestamp: {},
          consideredUnresolvableUntil: {},
          record: {},
          transaction: {},
          operation: {},
          didUniqueSuffixes: {},
          merkleRoot: {},
          operations: {},
          syncStartDateTime: {},
          syncStopDateTime: {},
        },
      },
    });
  }

  async _init() {
    // Only create db if it doesnt exist already
    this.db = await RxDB.create({
      name: this.name,
      adapter: this.adapter,
      multiInstance: false,
    });
    this.collection = await this._createCollection();
  }

  async write(id, data) {
    if (!this.collection) {
      await this._init();
    }
    return this.collection
      .upsert({
        _id: id,
        id,
        ...data,
      })
      .then(doc => doc.toJSON());
  }

  async read(id) {
    if (!this.collection) {
      await this._init();
    }
    return this.collection
      .findOne()
      .where('_id')
      .eq(id)
      .exec()
      .then(doc => doc.toJSON())
      .catch(() => null);
  }

  async readCollection(type) {
    if (!this.collection) {
      await this._init();
    }
    return this.collection
      .find()
      .where('type')
      .eq(type)
      .exec()
      .then(arrayOfDocs => arrayOfDocs.map(doc => doc.toJSON()));
  }

  async deleteDB() {
    if (!this.collection) {
      await this._init();
    }
    await this.collection.remove();
    // Recreates an empty collection
    this.collection = await this._createCollection();
  }

  async close() {
    return this;
  }
}

module.exports = ElementRXDBAdapter;