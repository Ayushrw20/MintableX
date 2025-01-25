module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
  
    log("Deploying NFT Contract...");
    const nft = await deploy("NFT", {
      from: deployer,
      log: true,
    });
  
    log("NFT deployed to:", nft.address);
  
    log("Deploying Marketplace Contract...");
    const marketplace = await deploy("Marketplace", {
      from: deployer,
      log: true,
    });
  
    log("Marketplace deployed to:", marketplace.address);
  };
  