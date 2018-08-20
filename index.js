const dvaCore = require('dva-core')

module.exports.default = dvaCore

module.exports.createStore = function (opts = {}) {

  const dvaApp = dvaCore.create()

  if (opts.useImmer) {
    dvaApp.use(require('dva-immer').default(opts.useImmer))
  }

  if (opts.useLoading) {
    dvaApp.use(require('dva-loading').default(opts.useLoading))
  }

  if (Array.isArray(opts.models)) {
    for (const model of opts.models) {
      dvaApp.model(model)
    }
  }

  dvaApp.start()

  const store = dvaApp._store
  const dispatch = store.dispatch.bind(store)
  store.dispatch = dispatch

  return store
}
