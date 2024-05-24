const stik = require('hardhat');

async function stook() {
    const Staking = await stik.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy('0x694636D65C33c05264018F8bDDcB315e8470c0C3', '0xf2ADdD935bB0693608Ca91d173D98213403f8344'); //StakeTokenTokenAddress and Reward token address

    // No need to call deployed()

    console.log("Staking deployed at:", staking.target);
}

stook().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});




// 0xB85839a5f7a833237A2992140EFfB66233c6aDE3