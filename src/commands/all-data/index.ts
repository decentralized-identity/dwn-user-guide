import {Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

import { web5DefaultConfig } from '../../config/web5-config.js'

export default class AllData extends Command {
  static override description = 'List all the DWN documents'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(AllData)

// move to a reusable config location

    const { did, web5 } = await Web5.connect({ password: flags.password, ...web5DefaultConfig });

    const response = await web5.dwn.records.query({
      message: {
        filter: {
          dataFormat: 'text/plain',
        },
        // published:true
      },
    })

    const records = response?.records || [];

    this.log('==============Document list==========')
    for (const [index, record] of records.entries()) {
      this.log(`${index + 1}.  ${record?.id}`)
    }

    // eslint-disable-next-line n/no-process-exit
    process.exit(0)
  }
}
