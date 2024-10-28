import { Request, Response } from 'express';
import Password from '../models/Password';
import bcrypt from 'bcryptjs';

export const addPassword = async (req: Request, res: Response) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPassword = new Password({ password: hashedPassword });
        await newPassword.save();
        res.status(201).json({ message: 'Password added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding password', error: (error as Error).message });
    }
};

export const deletePassword = async (req: Request, res: Response) => {
    try {
        const deletedPassword = await Password.findByIdAndDelete(req.params.id);
        if (!deletedPassword) {
            return res.status(404).json({ message: 'Password not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting password', error: (error as Error).message });
    }
};

export const updatePassword = async (req: Request, res: Response) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedPassword = await Password.findByIdAndUpdate(
            req.params.id,
            { password: hashedPassword },
            { new: true }
        );

        if (!updatedPassword) {
            return res.status(404).json({ message: 'Password not found' });
        }
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating password', error: (error as Error).message });
    }
};