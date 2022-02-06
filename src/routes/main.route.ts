import { Router } from "express";
import { createData, getAllData } from "../controllers/main.controller";

export const MainRoute = () => {
    const router = Router();

    router.get('/data', getAllData);
    router.post('/data', createData);
    // Tambahkan router sesuai template

    return router;
}