const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapasync = require('../utils/wrapasync.js');
const passport = require("passport");
const session = require('express-session');
const { isLoggedIn, saveRedirectUrl } = require('../middleware.js');

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapasync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User is Registered Successsfully!");
            res.redirect("/listing");

        });

    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
    req.flash("success", "Welcome back to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
});

router.get("/logout", isLoggedIn, (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listing");
    });

});


module.exports = router;