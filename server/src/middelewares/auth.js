const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(" ");
    const [scheme, token] = parts;

    if (!authHeader) {
        return (
            res.status(401).send({ error: "No token provider" })
        )
    }

    if (!parts.length == 2) {
        return (
            res.status(401).send({ error: "Token error!" })
        )
    }

    if (!/^Bearer$/i.test(scheme)) {
        return (
            res.status(401).send({ error: "Token malFormatted" })
        )
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return (
                res.status(401).send({ error: "Token invalid" })
            )
        }
        req.userId = decoded.id;
        return next();
    });
};
