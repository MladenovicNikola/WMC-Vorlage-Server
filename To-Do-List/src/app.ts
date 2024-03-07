import express from "express";
import { todoRouter} from "./todoRouter";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRouter);
app.get("/api/todos");

app.listen(3001, () => {console.log("Server listening on port 3001")});