const rew = require('hardhat');

async function rewad() {
    const RewardToken = await rew.ethers.getContractFactory("RewardToken");
    const rewardToken = await RewardToken.deploy(10000000);
    // No need to call deployed()

    console.log("RewardToken deployed at:", rewardToken.target);
}

rewad().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


// 0xb9bd123A9e14dF5e7cdad58a742C6ac58777b690

