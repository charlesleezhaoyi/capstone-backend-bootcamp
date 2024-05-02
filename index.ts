import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
// Enable CORS access to this server
app.use(cors());

//JSON middleware
app.use(express.json());

// Routers

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
