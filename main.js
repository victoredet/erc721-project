const initTransaction = async(options)=>{
    const Web3 = require('web3')
    const MockToken = require('./build/contracts/MockToken.json')

    const infuraUrl = process.env.INFURA_URL //infura url

    let address = options.myAddress
    let privateKey = options.myPrivateKey

    const web3 = new Web3(infuraUrl)
    const newtworkId = await web3.eth.net.getID()
    const mockTokenContract = new web3.eth.Contract(
        MockToken.abi,
        MockToken.networks[newtworkId].address
    )

    const tx = mockTokenContract.methods.setData(1).send({tokenName:options.tokenName, tokenSymbol:options.tokenSymbol})
    const gas = await tx.estimateGas({from:address})
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI()
    const nonce = await web3.eth.getTransactionCount(address)
    
const singedTx = await web3.eth.accounts.signTransaction(
    {
        to:mockTokenContract.options.addresses,
        data,
        nonce,
        gasPrice,
        gas,
        chainId:newtworkId
    },
    privateKey
)
    const reciept = await web3.eth.sendTransaction(singedTx.rawTransaction)
    console.log(`transaction hash: ${reciept.transactionHash}`)
}

initTransaction();

export {address, privateKey, initTransaction}