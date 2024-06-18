import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

export default class StoreDataStoreData extends Command {
  static override args = {
    data: Args.string({description: 'String data to store'}),
  }

  static override description = 'Store data to DWN'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with a value (-n, --name=VALUE)
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(StoreDataStoreData)

    if (args.data) {
      
      const {web5, did: userDid} = await Web5.connect({password: flags.password})
      const {record} = await web5.dwn.records.create({
        data: args.data,
        message: {
          dataFormat: 'text/plain',
          // published:true
        },
      })

      this.log('Data is stored on the DWN : ', record?.id)

      process.exit(0)
    }
  }
}
