import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
import app from "./main";

const PORT = process.env.PORT || 3000;

async function startServer() {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();