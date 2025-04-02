import { catchAsync } from "@/middlewares/catchAsync";
// import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Use bcryptjs or bcrypt


import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const userSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const SECRET_KEY = process.env.JWT_SECRET || "Karankumar";

export const registerLoginController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = userSchema.parse(req.body);

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            // Verify the password
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid credentials",
                });
            }

            // Generate JWT token for login
            const token = jwt.sign({ userId: existingUser.id }, SECRET_KEY, { expiresIn: "1h" });

            return res.status(200).json({
                success: true,
                message: "User logged in successfully!",
                user: existingUser,
                token,
            });
        }

        // Register a new user if not found
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: { email, password: hashedPassword },
        });

        // Generate JWT token for the new user
        const token = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: "1h" });

        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user: newUser,
            token,
        });
    } catch (error) {
        next(error);
    }
});



export const getUsers =catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await prisma.user.findMany({ select: { id: true, email: true } });
      res.json({ success: true, users });
    } catch (error) {
      next(error);
    }
})