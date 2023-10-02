import { Router } from "express";
import userSchema from "../models/userSchema.js";
import { hashPassword } from "../utils/hashPassword.js";
import { checkPassword } from "../utils/checkPassword.js";
import { generateToken, verifyToken } from "../utils/token.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { authMiddleware } from "../middleware/authMiddleware.js";

dotenv.config();
// let testAccount= await nodemailer.createTestAccount();

// const keySecret="EnvisionNep"
const jwtSecret = process.env.JWT_SECRET;
// const jwtExpire = process.env.JWT_EXPIRE;
const senderEmail = process.env.SENDER_EMAIL;
const senderPassword = process.env.SENDER_PASSWORD;
const userRouter = Router();

//C
async function registerUser(req, res) {
  const { name, address, email, password, phone, pan } = req.body;
  if (!name || !password || !email || !address || !phone || !pan) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (name.trim().split(" ").length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name with surname is required",
    });
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Valid email is required",
    });
  }

  const userExists = await userSchema.exists({
    email,
  });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const user = userSchema({
    name,
    password: await hashPassword(password),
    email,
    address,
    phone,
    pan,
  });
  await user.save();

  return res.json({
    success: true,
    message: "User created successfully.",
  });
}

userRouter.post("/register", registerUser);

//R
async function getRegisteredUsers(req, res) {
  const users = await userSchema.find();
  return res.json(users);
}
userRouter.get("/registeredUsers", getRegisteredUsers);

async function getRegisteredUsersByID(req, res) {
  const users = await userSchema.findById({
    _id: req.params.id,
  });
  return res.json(users);
}
userRouter.get("/registeredUsers/:id", getRegisteredUsersByID);
//U
async function updateRegisteredUser(req, res) {
  const { name, address, email, password, phone, pan } = req.body;
  const user = await userSchema.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      name,
      address,
      email,
      password,
      phone,
      pan,
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
userRouter.put("/registeredUsers/:id", updateRegisteredUser);

//D
async function deleteRegisteredUser(req, res) {
  const user = await userSchema.findOneAndDelete({
    _id: req.params.id,
  });
  res.json({
    success: true,
    message: "User deleted",
    user,
  });
}
userRouter.delete("/deleteRegisteredUsers/:id", deleteRegisteredUser);

async function deleteAllRegisteredUser(req, res) {
  const user = await userSchema.deleteMany();
  res.json({
    success: true,
    message: "All user deleted",
    user,
  });
}
userRouter.delete("/deleteAllRegisteredUsers", deleteAllRegisteredUser);

async function LoginUser(req, res) {
  const { email, password } = req.body;

  const dbUser = await userSchema.findOne({
    email,
  });

  if (!dbUser) {
    return res.status(400).json({
      success: false,
      message: "Email doesn't exists.",
    });
  }

  const isPasswordCorrect = await checkPassword(password, dbUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({
      success: false,
      message: "Password incorrect",
    });
  }

  //generate access token for user
  const accessToken = generateToken({
    email,
    address: dbUser.address,
    phone: dbUser.phone,
    pan: dbUser.pan,
    _id: dbUser._id,
  });

  return res.json({
    success: true,
    message: "Data Found",
    data: {
      accessToken,
    },
  });
}
userRouter.post("/loginUser", LoginUser);

////////////////////////////////////////////////////////////////

async function passwordLink(req, res) {
  console.log(senderEmail);
  const { email } = req.body;

  if (!email) {
    return res.status(401).json({
      status: 401,
      message: "Enter your email",
    });
  }
  try {
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const token = generateToken({
      email,
      _id: user._id,
      pan:user.pan,
      address:user.address,
      phone:user.phone,
    });

    const link = `http://localhost:3000/resetPassword/${user._id}/?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: email,
      subject: "Password Reset",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Password Reset Link from Envision Nepal</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Envision Nepal</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Use the following Link to complete your Password Recovery Procedure. Link is valid for 2 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${link}</h2>
    <p style="font-size:0.9em;">Regards,<br />Envision Nepal</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Envision Nepal Inc</p>
    
      <p>Kathmandu</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error:", error);
        res.status(401).json({
          host: "smtp.gmail.com",
          port: 25,
          secure: false,
          success: false,
          message: "Email not sent",
        });
      } else {
        console.log("Email sent: ", info.response);
        res.status(201).json({
          success: true,
          message: "Email sent successfully",
        });
      }
    });
  } catch (e) {
    console.log("Error is: ", e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

userRouter.post("/sendpasswordlink", passwordLink);

async function getresetPassword(req, res) {
  const { id } = req.params;

  try {
    const validUser = await userSchema.findById(id);
    
    if(!validUser){
      return res.status(401).json({
        success:false,
        message:"Not a valid user"
      })
    }   

    if (validUser) {
      res.status(201).json({
        success: true,
        message: "Valid User and valid Token",
      });
      
    } else {
      res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }
  } catch (e) {
    res.status(401).json({
      success:false,
      message:"Something went wrong"
    })
  }
}

userRouter.get("/resetPassword/:id", authMiddleware ,getresetPassword);

//change the password

async function resetPassword(req, res) {
  const { id } = req.params;
  const { password } = req.body;
  console.log("from post", id, password)
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Please provide a new password",
    });
  }

  try {
    const validUser = await userSchema.findById({_id:id});

    if (!validUser) {
      return res.status(401).json({
        success: false,
        message: "User does't exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    validUser.password = hashedPassword;
    await validUser.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
userRouter.post("/resetPassword/:id", authMiddleware, resetPassword);

export default userRouter;
