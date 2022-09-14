const Web3 = require('web3')
const MockToken = require('./build/contracts/MockToken.json')
const address = ''
const privateKey = ''

const infuraUrl = '' //infura url

const initTransaction = async()=>{
    const web3 = new Web3(infuraUrl)
    const newtworkId = await web3.eth.net.getID()
    const mockTokenContract = new web3.eth.Contract(
        MockToken.abi,
        MockToken.networks[newtworkId].address
    )

    const tx = mockTokenContract.methods.setData(1)
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

export default {address, privateKey}