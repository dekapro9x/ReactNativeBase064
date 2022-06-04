const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
    console.log("req.headers", req.headers);
    const { authorization, secret, appname, keyprivate, token } = req.headers;
    console.log("authorization", authorization);
    console.log("secret", secret);
    console.log("appName", appname);
    console.log("keyPrivate", keyprivate);
    console.log("token", token);
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        console.log("Vào đây")
        if (err) {
            console.log("err", err);
            return (
                res.status(401).send({ error: "Token invalid" })
            )
        }
        req.userId = decoded.id;
        return next();
    });
};
