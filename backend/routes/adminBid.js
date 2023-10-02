import { Router } from "express";
import adminBidSchema from "../models/adminBidSchema.js";

const adminBidRouter = Router();

//C
async function registerBid(req, res) {
  const { title, bidAmount, bidSecurityAmount, description, email } = req.body;
  if (!title || !bidAmount || !email || !bidSecurityAmount || !description) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const userExists = await adminBidSchema.exists({
    email,
  });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const user = adminBidSchema({
    title,
    bidAmount,
    bidSecurityAmount,
    description,
    email,
  });
  await user.save();

  return res.json({
    success: true,
    message: "Bid created successfully.",
  });
}

adminBidRouter.post("/registerBid", registerBid);

//R
async function getRegisteredBid(req, res) {
  const bid = await adminBidSchema.find();
  return res.json(bid);
}
adminBidRouter.get("/getRegisteredBid", getRegisteredBid);

async function getRegisteredBidByID(req, res) {
  const bid = await adminBidSchema.findById({
    _id: req.params.id,
  });
  return res.json(bid);
}
adminBidRouter.get("/getRegisteredBid/:id", getRegisteredBidByID);

//U
async function updateRegisteredBid(req, res) {
  const { title, bidAmount, bidSecurityAmount, description, email } = req.body;
  await adminBidSchema.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      title,
      bidAmount,
      bidSecurityAmount,
      description,
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
adminBidRouter.put("/registeredBid/:id", updateRegisteredBid);

//D
async function deleteRegisteredBid(req, res) {
  const user = await adminBidSchema.findOneAndDelete({
    _id: req.params.id,
  });
  res.json({
    success: true,
    message: "Bid deleted",
    user,
  });
}
adminBidRouter.delete("/deleteRegisteredBid/:id", deleteRegisteredBid);

async function deleteAllRegisteredBid(req, res) {
  const user = await adminBidSchema.deleteMany();
  res.json({
    success: true,
    message: "All bids deleted",
    user,
  });
}
adminBidRouter.delete("/deleteAllRegisteredBid", deleteAllRegisteredBid);

export default adminBidRouter;
