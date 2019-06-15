const Example = artifacts.require('Example')
// helper module
const truffleAssert = require('truffle-assertions')

contract('Example', accounts => {
  let instance
  // deploy a new contract for this test run
  before(async function () {
    instance = await Example.new()
  })

  it('string should be set to initial value', async function () {
    const myStrContract = await instance.myString.call()
    assert.equal(myStrContract, 'INITIAL')
  })

  it('should change string successfully', async function () {
    // generate string
    const myStringTest = 'test_str_' + new Date() / 1000

    // send transaction (and make sure it doesn't throw)
    await truffleAssert.passes(instance.changeString(myStringTest))

    // make sure contract was updated
    const myStrContract = await instance.myString.call()
    assert.equal(myStrContract, myStringTest)
  })

  it('should fail to change string', async function () {
    const stringThatReverts =
      'STRING_LONGER_THAN_100_CHARSSTRING_LONGER_THAN_100_CHARSSTRING_LONGER_THAN_100_CHARSSTRING_LONGER_THAN_100_CHARS'
    // assert revert and error message
    await truffleAssert.reverts(
      instance.changeString(stringThatReverts),
      'String should be less than 100 characters'
    )
  })
})
