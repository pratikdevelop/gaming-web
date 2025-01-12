async function main() {
    const initialSupply = 1000000; // 1,000,000 tokens
    const MemeToken = await ethers.getContractFactory("MemeToken");
    const memeToken = await MemeToken.deploy(initialSupply);
  
    await memeToken.deployed();
    console.log("MemeToken deployed to:", memeToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  