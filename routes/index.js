import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Secure Web Portal")
});


//catch all route that runs only if no route matches the requested route
router.use((req, res) => {
    res.status(404).json({ message: "Route not found." })
});


export default router;
