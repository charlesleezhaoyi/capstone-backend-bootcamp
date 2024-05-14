import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.

// Importing Routers
import { MembersRouter } from "./routers/membersRouter";
import { NposRouter } from "./routers/nposRouter";
import { NpoMembersRouter } from "./routers/npoMembersRouter";

// Importing Controllers
import { MembersController } from "./controllers/membersController";
import { NposController } from "./controllers/nposController";
import { NpoMembersController } from "./controllers/npoMembersController";

// Initializing Controllers
const membersController = new MembersController();
const nposController = new NposController();
const npoMembersController = new NpoMembersController();

// Initializing Routers
const membersRouter = new MembersRouter(membersController);
const nposRouter = new NposRouter(nposController);
const npoMembersRouter = new NpoMembersRouter(npoMembersController);

// Enable CORS access to this server
app.use(cors());

//JSON middleware
app.use(express.json());

app.use("/members", membersRouter.routes());
app.use("/npos", nposRouter.routes());
app.use("/npoMembers", npoMembersRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
