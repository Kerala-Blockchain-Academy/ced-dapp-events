import "dotenv/config";
import { Interface, WebSocketProvider, id } from "ethers";
import details from "../artifacts/details.json" assert { type: "json" };
import Cert from "../artifacts/contracts/Cert.sol/Cert.json" assert { type: "json" };

let provider;

if (process.env.CHAIN === "sepolia") {
  provider = new WebSocketProvider(
    `wss://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
  );
} else {
  provider = new WebSocketProvider("ws://127.0.0.1:8545");
}

const eventTopic = id("Issued(string,uint256,string)");
const courseTopic = id("Certified Ethereum Developer");

let iface = new Interface(Cert.abi);

await provider
  .getLogs({
    fromBlock: 0,
    toBlock: "latest",
    address: details.contract,
    topics: [eventTopic, courseTopic],
  })
  .then((logs) => {
    logs.forEach((log) => {
      console.log(iface.parseLog(log));
    });
  });

process.exit(0);
