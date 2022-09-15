const MockToken = artifacts.require('MockToken');


contract('MockToken: test mint and lock', () => {
     
    it('is possible to retrieve the correct token URI', async () => {
        let token = await MockToken.deployed();
        let metadata = await token.tokenURI(0);
        assert.equal('https://mocktoken.art/metadata/0.json', metadata);
    })
  
})

