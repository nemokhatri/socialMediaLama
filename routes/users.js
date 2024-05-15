import { Router } from 'express';

const router = Router();

// GET /users
router.get("/", (req, res) => {
    res.send("Hey, it's user routes");
});

// GET /users/profile
router.get("/profile", (req, res) => {
    res.send("User profile page");
});

export default router;