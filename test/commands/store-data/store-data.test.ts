import {expect, test} from '@oclif/test'

describe('store-data:store-data', () => {
  test
  .stdout()
  .command(['store-data:store-data'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['store-data:store-data', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
