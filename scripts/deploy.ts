import { ethers } from "hardhat";

async function main() {
  const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const holders = 1;
  const url = `https://api.ethplorer.io/getTopTokenHolders/${usdt}?apiKey=freekey&limit=${holders}`;
  fetch(url)
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post);
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
