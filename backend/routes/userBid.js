import { Router } from "express";
import userBidSchema from "../models/userBidSchema.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const bidRouter = Router();

//C
async function registerBid(req, res) {
  const { title, bidAmount, PAN, email } = req.body;
  if (!title || !bidAmount || !email || !PAN) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const userExists = await userBidSchema.exists({
    email,
  });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "Bidding with this email already exists",
    });
  }

  const user = userBidSchema({
    title,
    PAN,
    bidAmount,
    email,
  });
  await user.save();

  return res.json({
    success: true,
    message: "Bid created successfully.",
  });
}

bidRouter.post("/registerBid", registerBid);

//R
async function getRegisteredBid(req, res) {
  const bid = await userBidSchema.find();
  return res.json(bid);
}
bidRouter.get("/getRegisteredBid", getRegisteredBid);

async function getRegisteredBidByID(req, res) {
  const bid = await userBidSchema.findById({
    _id: req.params.id,
  });
  return res.json(bid);
}
bidRouter.get("/getRegisteredBid/:id", getRegisteredBidByID);

//U
async function updateRegisteredBid(req, res) {
  const { title, bidAmount, PAN, email } = req.body;
  await userBidSchema.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      title,
      bidAmount,
      PAN,
      email,
    },
    {
      new: true,
    }
  );
  return res.json({
    success: true,
    message: "Updated Successfully",
  });
}
bidRouter.put("/registeredBid/:id", updateRegisteredBid);

//D
async function deleteRegisteredBid(req, res) {
  const user = await userBidSchema.findOneAndDelete({
    _id: req.params.id,
  });
  res.json({
    success: true,
    message: "Bid deleted",
    user,
  });
}
bidRouter.delete("/deleteRegisteredBid/:id", deleteRegisteredBid);

async function deleteAllRegisteredBid(req, res) {
  const user = await userBidSchema.deleteMany();
  res.json({
    success: true,
    message: "All bids deleted",
    user,
  });
}
bidRouter.delete("/deleteAllRegisteredBid", deleteAllRegisteredBid);

export default bidRouter;
