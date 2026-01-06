// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// require("dotenv").config();
// const otpGenerator = require("otp-generator");
// const jwt = require("jsonwebtoken");

// // requiring models
// const { User, Otp } = require("../models/model");

// // requiring controllers
// const { sendOtpMail, sendLoginVerificationMail } = require("./mailController");

// // getting jwt token
// const JWT_SECRET = process.env.JWT_SECRET;

// // route - http://localhost:8080/api/user/login
// const logIn = async (req, res) => {
//     const Email = req.body.email;
//     const Password = req.body.password;

//     User.find({ email: Email }, async function (err, docs) {
//         if (docs.length === 0) {
//             return res.status(400).send({ msg: "User not found" });
//         } else {
//             const validPassword = await bcrypt.compare(
//                 Password,
//                 docs[0].password
//             );

//             if (Email === docs[0].email && validPassword) {
//                 User.find({ email: Email }, async function (err, user) {
//                     var Details = {
//                         email: user[0].email,
//                         name: user[0].username,
//                     };
//                     sendLoginVerificationMail(Details);
//                     res.status(200).send({
//                         msg: "Log-In successful!",
//                         user_id: user[0].user_id,
//                     });
//                 });
//             } else {
//                 return res.status(406).send({ msg: "Invalid password" });
//             }
//         }
//     });
// };

// // route - http://localhost:8080/api/user/signup
// const signUp = async (req, res) => {
//     const Email = req.body.email;

//     //validating whether user already exists or not

//     User.find({ email: Email }, async function (err, docs) {
//         if (docs.length !== 0) {
//             return res.status(400).send({
//                 msg: "This Email ID is already registered. Try Signing In instead!",
//             });
//         } else {
//             //clearing otp auth table
//             // try {
//             //     await Otp.deleteMany({ email: Email }, function (err) {
//             //         if (err) {
//             //             console.log(err);
//             //         }
//             //         // else {
//             //         //     console.log("Users deleted successfully");
//             //         // }
//             //     });
//             // } catch (e) {
//             //     console.log(e);
//             // }

//             // clearing otp auth table
// try {
//     await Otp.deleteMany({ email: Email }); // <- NO callback
// } catch (e) {
//     console.log(e);
// }


//             // generate otp for new user
//             const OTP = otpGenerator.generate(6, {
//                 digits: true,
//                 upperCaseAlphabets: false,
//                 specialChars: false,
//                 lowerCaseAlphabets: false,
//             });

//             const otp = {
//                 email: Email,
//                 otp: OTP,
//             };
//             // console.log("Before hashing: ", otp);

//             sendOtpMail(Email, otp.otp);

//             //encrypting the otp and then saving to Otp_table
//             const salt = await bcrypt.genSalt(10);
//             otp.otp = await bcrypt.hash(otp.otp, salt);

//             const newUserLogin = new Otp({
//                 email: otp.email,
//                 otp: otp.otp,
//             });

//             newUserLogin.save((error, success) => {
//                 if (error) console.log(error);
//                 // else console.log("Saved::otp::ready for validation");
//             });

//             return res.status(200).send({ msg: "Otp sent successfully!" });
//         }
//     });
// };

// // route - http://localhost:8080/api/user/signup/verify
// const verifySignup = async (req, res) => {
//     const number = req.body.contactNumber;
//     const inputOtp = req.body.otp;
//     const Email = req.body.email;
//     const name = req.body.username;
//     const Password = req.body.password;
//     const Lat = req.body.lat;
//     const Long = req.body.long;

//     // encrypting password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(Password, salt);

//     Otp.find({ email: Email }, async function (err, docs) {
//         if (docs.length === 0) {
//             return res.status(400).send("The OTP expired. Please try again!");
//         } else {
//             const generatedOtp = docs[0].otp;

//             const validUser = await bcrypt.compare(inputOtp, generatedOtp);

//             if (Email === docs[0].email && validUser) {
//                 // generating user token
//                 const secret = JWT_SECRET;
//                 const payload = {
//                     email: req.body.email,
//                 };
//                 const token = jwt.sign(payload, secret);

//                 //saving new user
//                 const newUser = new User({
//                     user_id: token,
//                     username: name,
//                     email: Email,
//                     contactNumber: number,
//                     password: hashedPassword,
//                     lat: Lat,
//                     long: Long,
//                 });

//                 newUser.save((error, success) => {
//                     if (error) console.log(error);
//                     // else console.log("Signup successful: ", newUser);
//                 });

//                 // Otp.deleteMany({ email: Email }, async function (err) {
//                 //     if (err) {
//                 //         console.log(err);
//                 //     }
//                 //     // else {
//                 //     //     console.log(`OTP table for ${Email} cleared.`);
//                 //     // }
//                 // });

//                 // delete OTP after creating user
// try {
//     await Otp.deleteMany({ email: Email }); // <- NO callback
// } catch (e) {
//     console.log(e);
// }


//                 return res.status(200).send({
//                     msg: "Account creation successful!",
//                     user_id: token,
//                 });
//             } else {
//                 return res
//                     .status(400)
//                     .send({ msg: "OTP does not match. Please try again!" });
//             }
//         }
//     });
// };

// // route - http://localhost:8080/api/user/signup/resendOtp
// const resendOtp = async (req, res) => {
//     const Email = req.body.email;

//     // validating whether user already exists or not
//     const user = await User.findOne({ email: Email });
//     if (!user) {
//         return res.status(400).send({
//             msg: "This Email ID is not registered. Try Signing Up instead!",
//         });
//     }

//     // clearing old otps
//     // try {
//     //     await Otp.deleteMany({ email: Email }, function (err) {
//     //         if (err) {
//     //             console.log(err);
//     //         }
//     //         // else {
//     //         //     console.log("Old OTP deleted successfully");
//     //         // }
//     //     });
//     // } catch (e) {
//     //     console.log(e);
//     // }

//     // clearing old otps
// try {
//     await Otp.deleteMany({ email: Email }); // <- NO callback
// } catch (e) {
//     console.log(e);
// }


//     // generate new otp for the user
//     const OTP = otpGenerator.generate(6, {
//         digits: true,
//         upperCaseAlphabets: false,
//         specialChars: false,
//         lowerCaseAlphabets: false,
//     });

//     const otp = {
//         email: Email,
//         otp: OTP,
//     };
//     // console.log("New OTP Before hashing: ", otp);

//     sendOtpMail(Email, otp.otp);

//     //encrypting the otp and then saving to Otp_table
//     const salt = await bcrypt.genSalt(10);
//     otp.otp = await bcrypt.hash(otp.otp, salt);

//     const newUserLogin = new Otp({
//         email: otp.email,
//         otp: otp.otp,
//     });

//     newUserLogin.save((error, success) => {
//         if (error) console.log(error);
//         // else console.log("Saved::otp::ready for validation");
//     });

//     return res.status(200).send({ msg: "New Otp sent successfully!" });
// };

// // route - http://localhost:8080/api/user/getallusers
// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(404).json({ msg: error.message });
//     }
// };

// // route - http://localhost:8080/api/user/getuser
// const userDetails = async (req, res) => {
//     const user_id = req.body.user_id;
//     // console.log(user_id);

//     User.find({ user_id: user_id }, async function (err, docs) {
//         if (err) {
//             console.log(err);
//             res.status(400).send({ msg: "No such user exists" });
//         } else {
//             res.status(200).send(docs[0]);
//         }
//     });
// };

// module.exports = {
//     signUp,
//     verifySignup,
//     logIn,
//     resendOtp,
//     getAllUsers,
//     userDetails,
// };




const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

// requiring models
const { User, Otp } = require("../models/model");

// requiring controllers
const { sendOtpMail, sendLoginVerificationMail } = require("./mailController");

// getting jwt token
const JWT_SECRET = process.env.JWT_SECRET;

// --------------------- LOGIN ---------------------
const logIn = async (req, res) => {
    try {
        const { email: Email, password: Password } = req.body;

        const user = await User.findOne({ email: Email });
        if (!user) {
            return res.status(400).send({ msg: "User not found" });
        }

        const validPassword = await bcrypt.compare(Password, user.password);
        if (!validPassword) {
            return res.status(406).send({ msg: "Invalid password" });
        }

        // send verification email
        sendLoginVerificationMail({ email: user.email, name: user.username });

        return res.status(200).send({
            msg: "Log-In successful!",
            user_id: user.user_id,
        });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).send({ msg: "Internal server error" });
    }
};

// --------------------- SIGNUP ---------------------
const signUp = async (req, res) => {
    try {
        const { email: Email } = req.body;

        const existingUser = await User.findOne({ email: Email });
        if (existingUser) {
            return res.status(400).send({
                msg: "This Email ID is already registered. Try Signing In instead!",
            });
        }

        // clear old OTPs
        await Otp.deleteMany({ email: Email });

        // generate OTP
        const OTP = otpGenerator.generate(6, {
            digits: true,
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
        });

        // send OTP
        sendOtpMail(Email, OTP);

        // hash OTP
        const hashedOtp = await bcrypt.hash(OTP, await bcrypt.genSalt(10));

        // save OTP
        const newOtp = new Otp({ email: Email, otp: hashedOtp });
        await newOtp.save();

        return res.status(200).send({ msg: "Otp sent successfully!" });
    } catch (err) {
        console.error("Signup error:", err);
        return res.status(500).send({ msg: "Internal server error" });
    }
};

// --------------------- VERIFY SIGNUP ---------------------
const verifySignup = async (req, res) => {
    try {
        const {
            email: Email,
            username: name,
            otp: inputOtp,
            password: Password,
            contactNumber: number,
            lat: Lat,
            long: Long,
        } = req.body;

        // find OTP record
        const otpRecord = await Otp.findOne({ email: Email });
        if (!otpRecord) return res.status(400).send({ msg: "The OTP expired. Please try again!" });

        // verify OTP
        const validOtp = await bcrypt.compare(inputOtp, otpRecord.otp);
        if (!validOtp) return res.status(400).send({ msg: "OTP does not match. Please try again!" });

        // hash password
        const hashedPassword = await bcrypt.hash(Password, await bcrypt.genSalt(10));

        // create JWT token for user
        const token = jwt.sign({ email: Email }, JWT_SECRET);

        // create new user
        const newUser = new User({
            user_id: token,
            username: name,
            email: Email,
            contactNumber: number,
            password: hashedPassword,
            lat: Lat,
            long: Long,
        });

        await newUser.save();

        // delete OTP
        await Otp.deleteMany({ email: Email });

        return res.status(200).send({
            msg: "Account creation successful!",
            user_id: token,
        });
    } catch (err) {
        console.error("Verify signup error:", err);
        return res.status(500).send({ msg: "Internal server error" });
    }
};

// --------------------- RESEND OTP ---------------------
const resendOtp = async (req, res) => {
    try {
        const { email: Email } = req.body;

        const user = await User.findOne({ email: Email });
        if (!user) {
            return res.status(400).send({
                msg: "This Email ID is not registered. Try Signing Up instead!",
            });
        }

        // delete old OTPs
        await Otp.deleteMany({ email: Email });

        // generate new OTP
        const OTP = otpGenerator.generate(6, {
            digits: true,
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
        });

        sendOtpMail(Email, OTP);

        const hashedOtp = await bcrypt.hash(OTP, await bcrypt.genSalt(10));
        const newOtp = new Otp({ email: Email, otp: hashedOtp });
        await newOtp.save();

        return res.status(200).send({ msg: "New Otp sent successfully!" });
    } catch (err) {
        console.error("Resend OTP error:", err);
        return res.status(500).send({ msg: "Internal server error" });
    }
};

// --------------------- GET ALL USERS ---------------------
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error("Get all users error:", err);
        res.status(404).json({ msg: err.message });
    }
};

// --------------------- GET SINGLE USER ---------------------
const userDetails = async (req, res) => {
    try {
        const { user_id } = req.body;

        const user = await User.findOne({ user_id });
        if (!user) return res.status(400).send({ msg: "No such user exists" });

        return res.status(200).send(user);
    } catch (err) {
        console.error("User details error:", err);
        return res.status(500).send({ msg: "Internal server error" });
    }
};

module.exports = {
    signUp,
    verifySignup,
    logIn,
    resendOtp,
    getAllUsers,
    userDetails,
};

