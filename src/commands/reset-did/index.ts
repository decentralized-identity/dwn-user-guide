import {Command} from '@oclif/core'
import fs from 'node:fs'
export default class ResetDidResetDid extends Command {
  static override description = 'Reset didDocument'

  async run(): Promise<void> {
    try {
      await this.parse(ResetDidResetDid)
      fs.rmSync('DATA', {
        recursive: true,
      })
    } catch (error) {
      // @ts-ignore
      this.log(error.message as string)
    }
  }
}
