import {expect, test} from '@oclif/test'

describe('reset-did', () => {
  test
  .stdout()
  .command(['reset-did'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['reset-did', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
