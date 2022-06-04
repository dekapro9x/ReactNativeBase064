// const jwt = require("jsonwebtoken");
// const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
    const { authorization, secret, appname, keyprivate, token } = req.headers;
    console.log("req.headers", req.headers);
    console.log("authorization", authorization);
    console.log("secret", secret);
    console.log("appName", appname);
    console.log("keyPrivate", keyprivate);
    console.log("token", token);

    if (!token) {
        return (
            res.status(401).send({ error: "Token invalid" })
        )
    }
    else {
        return next();
    }

    // jwt.verify(authorization, authConfig.authorization, (err, decoded) => {
    //     if (err) {
    //         console.log("Lỗi phát sinh:", err);
    //     } else {
    //         return next();
    //     }
    // });
};
