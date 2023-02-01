import express from "express";
import {
    getUser,
    getUserFriend,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// REad 

router.get("/:id", verifyToken,getUser);
router.get("/:id/friends", verifyToken,getUserFriend);

// UPdate 

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);


export default router;