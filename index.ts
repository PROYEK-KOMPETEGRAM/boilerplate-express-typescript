import express from 'express';
import cors from 'cors';
import { MainRoute } from './src/routes/main.route';

require('dotenv').config();

const app = express();
const PORT: any | string = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api', MainRoute());

app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});
