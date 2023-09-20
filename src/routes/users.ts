import { Router } from "express";
import _ from "underscore";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
import { User } from "../db/models/user.js";
import { validateSignUp } from "../middleware/verifySignupBody.js";
import { alreadyExists } from "../middleware/alreadyExists.js";
import authConfig from '../db/config/auth.config.js';
import { validateSignIn } from "../middleware/verifySignInBody.js";
import { CheckOut } from "../db/models/CheckOut.js";
import { validateToken } from "../middleware/validateToken.js";
const router = Router();

//api/auth/signup
router.post("/signup", validateSignUp, alreadyExists, async (req, res) => {
    try {
        const body = _.pick(req.body, "username", "email", "password");
        //12 rounds takes more
        body.password = await bcrypt.hash(body.password, 12);
        const user = new User(body);
        //save the password hash to db:

        await user.save();
        return res.json({ message: "user saved", id: user._id });
    } catch (e) {
        return res.status(500).json({ message: "Server DB Error", error: e });
    }
});

router.post("/signin", validateSignIn, async (req, res) => {
    //email and password:
    try {
        //SELECT * FROM user JOIN Roles ON ...
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "No Such User" });
        }

        //123*12
        //verify body.password matches user.password
        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, authConfig.secret, {
            expiresIn: "30d",
        })

        return res
            .status(200)
            .json(
                {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    accessToken: token
                }
            );
    } catch (e) {
        return res.status(500).json({ message: "Server Error", error: e });
    }
});

router.post("/cartBuyButton", validateToken, async (req, res) => {
    try {
        let checkOut = await CheckOut.create({ ...req.body })
        await checkOut.save()
        res.status(200).send(checkOut)
    } catch (e) {
        return res.status(500).json({ message: "Server Error", error: e });
    }
})

export { router as authRouter };

