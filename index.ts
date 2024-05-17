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
import { EventsRouter } from "./routers/eventsRouter";

// Importing Controllers
import { MembersController } from "./controllers/membersController";
import { NposController } from "./controllers/nposController";
import { NpoMembersController } from "./controllers/npoMembersController";
import { EventsController } from "./controllers/eventsController";

// Initializing Controllers
const membersController = new MembersController();
const nposController = new NposController();
const npoMembersController = new NpoMembersController();
const eventsController = new EventsController();

// Initializing Routers
const membersRouter = new MembersRouter(membersController);
const nposRouter = new NposRouter(nposController);
const npoMembersRouter = new NpoMembersRouter(npoMembersController);
const eventsRouter = new EventsRouter(eventsController);

// Enable CORS access to this server
app.use(cors());

//JSON middleware
app.use(express.json());

app.use("/members", membersRouter.routes());
app.use("/npos", nposRouter.routes());
app.use("/npoMembers", npoMembersRouter.routes());
app.use("/events", eventsRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
