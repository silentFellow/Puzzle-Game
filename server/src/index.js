import exprees from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/UserRoutes.js";

const app = exprees();
app.use(exprees.json());
app.use(cors());

const url = "mongodb+srv://silentFellow:silentFellow@silentffellow.iyh4l6w.mongodb.net/?retryWrites=true&w=majority&appName=silentfFellow"
mongoose.connect(url);
const db = mongoose.connection;

app.use("/user", UserRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Yo! DB connected successfully.');
});

const PORT = 9999;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
