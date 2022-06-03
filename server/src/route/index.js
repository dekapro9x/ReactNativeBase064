const express = require("express");
const router = express.Router();
const authMiddleware = require("../middelewares/auth");
router.use(authMiddleware);

//Controller:
const UserController = require("../controllers/UserController");

const routeContainer = {
    login: "/login",
};

router.post(routeContainer.login, UserController.login);

module.exports = router;