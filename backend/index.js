import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log('database berhasil terkoneksi');
} catch (error) {
  console.error('database gagal dikoneksi', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(5000, () => console.log('server running di port 5000'))