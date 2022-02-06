import { Request, Response } from "express";
import { response400 } from "../specs/error.spec";

const getAllData = (req: Request, res: Response) => {
    const identity = {
        name: "Your Name",
        age: "Your Age",
    };

    return res.status(200).json({
        data: identity
    });
};

const createData = (req: Request, res: Response) => {
    const { name, age } = req.body;

    if (!name || !age) {
        const errorResponse = response400;
        errorResponse.errors[0].message = 'Format tidak sesuai spesifikasi';

        return res.status(400).json(errorResponse);
    }

    return res.status(201).json({
        message: 'Berhasil ditambahkan',
        data: {
            name: name,
            age: age
        }
    });
};

export { getAllData, createData };