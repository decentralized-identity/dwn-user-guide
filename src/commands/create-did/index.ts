import {Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'
import {webcrypto} from 'node:crypto'
import fs from 'node:fs'

import { web5CommunityConfig } from '../../config/web5-config.js'

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto

export default class CreateDid extends Command {
  static description = 'Create a DID'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(CreateDid)

    const {did: userDid, web5} = await Web5.connect({password:flags.password, ...web5CommunityConfig})

    this.log('Created DID:', userDid)
    fs.writeFileSync('DATA/did.json', JSON.stringify({did: userDid}))

    // eslint-disable-next-line n/no-process-exit
    process.exit(0)
  }
}
