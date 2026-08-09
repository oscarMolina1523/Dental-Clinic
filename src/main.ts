import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import express from "express";
//AUTO-IMPORT-CONTAINER
//AUTO-IMPORT-ROUTES
//AUTO-IMPORT-OPENAPI

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTO-REGISTER-OPENAPI
//AUTO-REGISTER-ROUTES

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});