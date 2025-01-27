const express = require('express');
const zod = require('zod');
const {UserModel, Account} = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../config");
const authMiddleware = require('../middleware');
const { Types } = require('mongoose');
 

const signupSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    password: zod.string(),
});

router.post("/signup", async(req, res) => {
    const body = req.body;
    const parsedResult = signupSchema.safeParse(body);
    if (!parsedResult.success) {
        return res.json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await UserModel.findOne({ username: body.username });

    if (existingUser) {
        return res.json({
            message: "Username already taken"
        })
    }

    const newUser = await UserModel.create({
        firstname: body.firstname,
        lastname: body.lastname,
        username: body.username,
        password: body.password

    });

    const userId = newUser?._id;

    //------account money-------

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    });

    //---------------
    const token = jwt.sign({userId}, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token
    });


});

const loginSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
});

router.post("/login", async(req, res) => {
    const body = req.body;
    const parsedResult = loginSchema.safeParse(body);
    if (!parsedResult.success) {
        return res.json({
            message: "Incorrect inputs"
        })
    }

    const user = await UserModel.findOne({ username: body.username });
    if (!user) {
        return res.json({
            message: "User not found"
        })
    }

    if (body.password !== user.password) {
        return res.json({
            message: "Incorrect password"
        })
    }   
    const userId = user?._id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);
    res.json({
        message: "User logged in successfully",
        token
    });

});

const updateBodyschema = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    username: zod.string().optional(),
    password: zod.string().optional(),
});

router.put("/update", authMiddleware, async(req, res) => {
    const {success} = updateBodyschema.safeParse(req.body);
    if (!success){
        return res.status(411).json({ 
            error: 'Error while updating information' 
        });
    }
    // console.log("UserId from middleware:", req.userId);

    const result = await UserModel.updateOne(
        { _id: req.userId },
        req.body     
    )

    res.json({
        message: "Updated successfully",
        result
    });
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await UserModel.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }, {
            username: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            id: user._id,
        }))
    })
})

module.exports = router;