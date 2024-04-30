import exprees from "express";
import UserSchema from "../models/UserSchema.js";

const router = exprees.Router();

// create user
router.post("/", async (req, res) => {
  try {
    const find = await UserSchema.findOne({ name: req.body.name });

    if(find) {
      res.status(400).send("User already exists");
    }

    await UserSchema.create(req.body);
    res.status(200).send("User created successfully");
  } catch(error) {
    res.status(500).json(error);
    console.log(error)
  }
})

// get details about an user
router.get("/:name", async (req, res) => {
  try {
    const data = await UserSchema.findOne({ name: req.params.name });

    if(!data) return res.status(404).send("User not found");
    res.status(200).send(data);
  } catch(error) {
    console.log(error);
  }
})

// update a user
router.put("/:name", async (req, res) => {
  try {
    const find = await UserSchema.findOne({ name: req.params.name });

    if(!find) {
      res.status(404).send("User not found");
    }

    const data = await UserSchema.updateOne({ name: req.params.name }, req.body);
    res.status(200).send("User updated successfully");
  } catch(error) {
    res.status(500).json(error);
    console.log(error);
  }
})

export { router as UserRouter };
