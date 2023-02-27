// add the game address here and update the contract name if necessary
const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // game 2
  // const tx1 = await game.setX(20);
  // await tx1.wait();
  // const tx2 = await game.setY(30);
  // await tx2.wait();

  // do whatever you need to do to win the game here:
  // const tx = await game.win();

  // game 3
  // const tx = await game.win(45);

  // game 4
  //const tx = await game.win(-200);

  // game 5

  const tx = await game.giveMeAllowance(10000);
  await tx.wait();

  const tx2 = await game.mint(10000);
  await tx2.wait();

  const tx3 = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx3.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
