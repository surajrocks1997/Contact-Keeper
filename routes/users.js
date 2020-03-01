const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

router.post(
    "/",
    [
        check("name", "Please add name")
            .not()
            .isEmpty(),
        check("email", "Please Include a VALID EMAIL").isEmail(),
        check(
            "password",
            "Please Enter Password with 6 or more characters"
        ).isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send("Passed");
    }
);

module.exports = router;
