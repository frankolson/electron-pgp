// Vendor Assets
import openpgp from 'openpgp';

export const generateKey = (email = '', name, passphrase) => (
  openpgp.generateKey({
    userIds: [{ name, email }],
    numBits: 4096,
    passphrase,
  }).then(key => ({
    pubKey: key.publicKeyArmored,
    privKey: key.privateKeyArmored,
  })
)
