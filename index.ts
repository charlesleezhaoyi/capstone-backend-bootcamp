import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { MembersRouter } from "./routers/membersRouter";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.

// Enable CORS access to this server
app.use(cors());

//JSON middleware
app.use(express.json());

// Routers
const membersRouter = new MembersRouter().routes();

app.use(membersRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
