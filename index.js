import arg from 'arg'
 
// const inquirer = require('inquirer')

const parseArgumentsToFunctions = (rawArg)=>{
    const args = arg(
        {
            '--address':Boolean,
            '--privateKey':Boolean,
            '--name':Boolean,
            '--symbol':Boolean
        },
        {
            argv:rawArg.slice(2)
        }
    )

    return {
        myAddress:args._[0] || 'Please enter your address',
        myPrivateKey:args._[1] ||'please enter your privateKey',
        tokenName:args._[2] || 'enter NFT name',
        mySymbol:args._[3] || 'enter your token symbol',
    }
}


export async function cli(args){
    let options = parseArgumentsToFunctions(args)
    // options = promptUserForMissing(options)
    console.log( options)

   
}
