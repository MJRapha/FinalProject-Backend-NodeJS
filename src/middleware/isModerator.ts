import { RequestHandler } from "express";
import { User } from "../db/models/user.js";

const isModerator: RequestHandler = async (req, res, next) => {
    const userId = req.userId

    try {
        /* const user = await User.findById(userId)
        const roles = await Role.find({ _id: { $in: user.roles } });
        for (let role of roles) {
            if (role.name === "moderator") {
                return next();
            }
        } */
        return res.status(403).json({ message: "Requires Admin Role" });
    } catch (e) {
        return res.status(500).json({ message: "Requires Admin Role", error: e });
    }
    //find the user role => if admin =>
}

export { isModerator }