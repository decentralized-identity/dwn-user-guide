import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

import { web5CommunityConfig } from '../../config/web5-config.js'

export default class StoreData extends Command {
  static override args = {
    data: Args.string({description: 'String data to store'}),
  }

  static override description = 'Store data to DWN'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(StoreData)

    if (args.data) {
      
      const {web5} = await Web5.connect({password: flags.password, ...web5CommunityConfig})
      const {record} = await web5.dwn.records.create({
        data: args.data,
        message: {
          dataFormat: 'text/plain',
          // published:true
        },
      })

      this.log('Record ID:', record?.id)


      process.exit(0)
    }
  }
}
