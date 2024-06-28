import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

export default class RetriveData extends Command {
  static override args = {
    data: Args.string({description: 'Dwn document Id'}),
  }

  static override description = 'Retrieve data from DWN'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with a value (-n, --name=VALUE)
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(RetriveData)

    if (args.data) {
      const {did: userDid, web5} = await Web5.connect({password: flags.password})
      const {record} = await web5.dwn.records.read({
        message: {
          filter: {
            recordId: args.data,
          },
          // published:true
        },
      })
      this.log('============Record Data=================')
      this.log('Author :', record?.author)
      this.log('Message Content: ', await record.data.text())

      process.exit(0)
    }
  }
}
