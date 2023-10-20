const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Clothes = require("../models/clothesModel");
const asyncHandler = require("express-async-handler");

// Create clothing
router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name, image, description, size, userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const newClothes = new Clothes({
            name,
            image,
            description,
            size,
            user: userId,
        });

        await newClothes.save();

        res.status(201).json({ message: "Clothes created successfully", clothes: newClothes });
    })
);

// Get all clothes from all users
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.find().populate('user');

        res.json(clothes);
    })
);

// Get a specific clothes by ID
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.findById(req.params.id).populate('user');

        if (clothes) {
            res.json(clothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

// Get all clothes from a single user
router.get(
    "/user/:userId",
    asyncHandler(async (req, res) => {
        const userId = req.params.userId;

        // Find all clothes owned by the user with the specified userId
        const clothes = await Clothes.find({ user: userId }).populate('user');

        res.json(clothes);
    })
);

// Update clothes by ID
router.put(
    "/:id",
    asyncHandler(async (req, res) => {
        const { name, image, description, size } = req.body;

        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            clothes.name = name || clothes.name;
            clothes.image = image || clothes.image;
            clothes.description = description || clothes.description;
            clothes.size = size || clothes.size;

            const updatedClothes = await clothes.save();
            res.json(updatedClothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

// Delete clothes by ID
router.delete(
    "/:id",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            await clothes.remove();
            res.json({ message: "Clothes removed" });
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

module.exports = router;