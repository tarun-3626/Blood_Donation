//============= Require Module are here ============//
require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs/dist/bcrypt");
const port = 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("ompawar");
  res.sendFile(__dirname + "/public/index.html");
});






app.post("/add_doner", async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).sendFile(__dirname + "/public/index.html");
    } catch (error) {
        console.log(error)
        res.status(400).send("not saveed 216" + error);
    }

//   try {
//     if (req.body.password == req.body.C_password) {
//       const user_info = await users.find({ user_mobile: req.body.mobile_No });
//       // console.log(user_info[0])
//       let exist = undefined;
//       if (user_info[0] !== undefined) {
//         if (user_info[0].user_mobile == req.body.mobile_No) {
//           exist = true;
//         }
//         console.log(3);
//       }
//       if (exist == true) {
//         res.status(400).send("this mobile exist so login please ");
//         return;
//       }
//       if (exist == undefined) {
//         var mydata = new users({
//           user_name: req.body.username,
//           user_mobile: req.body.mobile_No,
//           user_passward: req.body.password,
//           sign_up_date: Date(Date.now()),
//         });
//         const token = await mydata.generateAuthToken();
//         // console.log(token);
//         console.log("omp 196");

//         res.cookie("jwt_user", token, {
//           expires: new Date(Date.now() + 1000 * 60 * 60 * 3),
//           httpOnly: true,
//           // secure:true
//         });

//         await mydata
//           .save()
//           .then((e) => {
//             res.status(200).sendFile(__dirname + "/public/index.html");
//           })
//           .catch((error) => {
//             res.status(400).send("not saveed 210" + error);
//           });
//       }
//     } else {
//       res.status(400).send("invalid details");
//     }
//   } catch (error) {
    // res.status(400).send("not saveed 216" + error);
//   }
});





http.listen(port, "0.0.0.0", () => {
  console.log(`the app is runing at port http://localhost:${port}`);
});
