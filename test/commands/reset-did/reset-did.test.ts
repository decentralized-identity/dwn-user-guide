import {expect, test} from '@oclif/test'

describe('reset-did:reset-did', () => {
  test
  .stdout()
  .command(['reset-did:reset-did'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['reset-did:reset-did', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
