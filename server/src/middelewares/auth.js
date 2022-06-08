// const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const codeAuth = require("./codeAuth");

var authMiddleware = (req, res, next) => {
    const { authorization, secret, appname, keyprivate, token } = req.headers;
    console.log("req.headers", req.headers);
    console.log("authorization", authorization);
    console.log("secret", secret);
    console.log("appName", appname);
    console.log("keyPrivate", keyprivate);
    console.log("token", token);

    if (!keyprivate || keyprivate !== authConfig.keyPrivate) {
        res.status(200).send({
            code: codeAuth.CODE_900,
            isError: true,
            mess: "Unable to authenticate with server!"
        });
        return;
    }

    if (!token) {
        res.status(200).send({
            code: codeAuth.CODE_901,
            isError: true,
            mess: "Token is invalid!"
        })
        return;
    }

    // jwt.verify(authorization, authorization, (err, decoded) => {
    //     console.log("authorization", authorization);
    //     if (err) {
    //         console.log("Lỗi phát sinh:", err);
    //         res.status(401).send({ error: "Token invalid" })
    //     } else {
    //         return next();
    //     }
    // });

    return next();
};


module.exports = authMiddleware