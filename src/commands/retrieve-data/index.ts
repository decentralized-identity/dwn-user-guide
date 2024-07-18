import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

import { web5CommunityConfig } from '../../config/web5-config.js'

export default class RetriveData extends Command {
  static override args = {
    data: Args.string({description: 'Dwn document Id'}),
  }

  static override description = 'Retrieve data from DWN'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(RetriveData)

    if (args.data) {
      const {web5} = await Web5.connect({password: flags.password, ...web5CommunityConfig})
      const {record} = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: args.data,
          },
          // published:true
        },
      })
      this.log('============Record Data=================')
      this.log('Author:', record?.author)
      this.log('Content:', await record.data.text())

      // eslint-disable-next-line n/no-process-exit
      process.exit(0)
    }
  }
}
