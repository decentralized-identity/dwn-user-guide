import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'
import {webcrypto} from 'node:crypto'
import fs from 'node:fs'

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto

export default class DwnSample extends Command {


  static description = 'Create a DID'

  static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static override flags = {
    // flag with a value (-n, --name=VALUE)
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  async run(): Promise<void> {
    const { flags} = await this.parse(DwnSample)

    const {did: userDid} = await Web5.connect({password:flags.password})

    this.log('Created DID: ', userDid)
    fs.writeFileSync('DATA/did.json', JSON.stringify({did: userDid}))
    process.exit(0)
  }
}
