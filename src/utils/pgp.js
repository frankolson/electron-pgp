// Vendor Assets
const openpgp = require('openpgp')
openpgp.initWorker({ path: '../node_modules/openpgp/dist/openpgp.worker.min.js' })
openpgp.config.aead_protect = true
openpgp.config.use_native = true

export const generateKey = (email = '', name, passphrase) => (
  openpgp.generateKey({
    userIds: [{ name, email }],
    numBits: 4096,
    passphrase,
  }).then(keys => ({
    pubKey: keys.publicKeyArmored,
    privKey: keys.privateKeyArmored,
  }))
)
