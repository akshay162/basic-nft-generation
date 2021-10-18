const blockchainDeployer = async () => {
    const nftFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftFactory.deploy();
    
    await nftContract.deployed();

    console.log("Contract deployed to " , nftContract.address);


    let txn = await nftContract.makeEpicNFT();
    await txn.wait();

    let txn2 = await nftContract.makeEpicNFT();
    await txn2.wait();


}

const runMain = async () => {

    try {
        await blockchainDeployer();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

runMain();