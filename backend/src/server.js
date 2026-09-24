import "dotenv/config";

import dns from "node:dns";
import app from "./app.js";
import connectDatabase from "./config/database.js";

// Use Google DNS for MongoDB SRV resolution
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();