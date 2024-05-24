const hre = require('hardhat');

async function main() {
    const StakeToken = await hre.ethers.getContractFactory("StakeToken");
    const stakeToken = await StakeToken.deploy(1000);
    // No need to call deployed()

    console.log("StakeToken deployed at:", stakeToken.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


// 0x343F303695F7Eba84C5F2032197E79e2D45bE7F7