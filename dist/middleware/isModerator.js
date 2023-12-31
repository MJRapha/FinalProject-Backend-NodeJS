var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const isModerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    try {
        /* const user = await User.findById(userId)
        const roles = await Role.find({ _id: { $in: user.roles } });
        for (let role of roles) {
            if (role.name === "moderator") {
                return next();
            }
        } */
        return res.status(403).json({ message: "Requires Admin Role" });
    }
    catch (e) {
        return res.status(500).json({ message: "Requires Admin Role", error: e });
    }
    //find the user role => if admin =>
});
export { isModerator };
