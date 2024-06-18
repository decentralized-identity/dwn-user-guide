import {Args, Command, Flags} from '@oclif/core'
import {Web5} from '@web5/api'

export default class AllData extends Command {
  static override description = 'List all the DWN documents'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with a value (-n, --name=VALUE)
    password: Flags.string({char: 'p', description: 'Password'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(AllData)

    const {web5, did: userDid} = await Web5.connect({password: flags.password})
    const response = await web5.dwn.records.query({
      message: {
        filter: {
          dataFormat: 'text/plain',
        },
        // published:true
      },
    })
    // @ts-ignore
    if (response?.records?.length > 0) {
      this.log('==============Doument list==========')
    }
    // @ts-ignore

    for (let i = 0; i < response?.records?.length; i++) {
      // @ts-ignore

      this.log(`${i + 1}.  ${response?.records[i]?.id}`)
    }

    process.exit(0)
  }
}
