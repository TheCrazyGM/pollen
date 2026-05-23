import { Client, PrivateKey } from "@srbde/pollen";
import * as dotenv from "dotenv";

dotenv.config();

const activeKey = process.env.ACTIVE_KEY;
const sender = process.env.SENDER || "thecrazygm";
const receiver = process.env.RECEIVER || "thecrazygm.bank";

if (!activeKey) {
  console.error("Please set ACTIVE_KEY in .env");
  process.exit(1);
}

const client = new Client(["https://api.hive.blog", "https://api.openhive.network"]);
const key = PrivateKey.from(activeKey);

async function main() {
  console.log(`Sending 0.001 HIVE from ${sender} to ${receiver}...`);
  
  try {
    const result = await client.broadcast.transfer(
      {
        from: sender,
        to: receiver,
        amount: "0.001 HIVE",
        memo: "Pollen Native Serialization Smoke Test 🌸",
      },
      key
    );
    
    console.log("Success! Transaction broadcasted.");
    console.log("Transaction ID:", result.id);
    
    console.log("Polling for block inclusion...");
    let blockNum: number | undefined;
    for (let i = 0; i < 10; i++) {
        try {
            const tx = await client.database.getTransaction(result.id);
            if (tx) {
                // Wait, getTransaction output might vary by node
                console.log("Transaction found in blockchain!");
                console.log("Full Result:", JSON.stringify(tx, null, 2));
                break;
            }
        } catch (e) {
            // Not found yet
            process.stdout.write(".");
            await new Promise(r => setTimeout(r, 3000));
        }
    }
    
  } catch (error) {
    console.error("Transfer failed:", error.message);
    if (error.info) {
        console.error("Error Info:", JSON.stringify(error.info, null, 2));
    }
  }
}

main();
