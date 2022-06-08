const express = require("express");
const router = express.Router();
const authMiddleware = require("../middelewares/auth");
//Controller:
const UserController = require("../controllers/UserController");

const routeContainer = {
    login: "/login",
};

router.use(authMiddleware);
router.post(routeContainer.login, UserController.login);


module.exports = router;