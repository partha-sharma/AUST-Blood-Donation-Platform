import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Import the path module
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
// connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

// --- Make 'uploads' folder static ---
const __dirname = path.resolve(); // Get the current directory path
app.use('/uploads', express.static(path.join(__dirname, '/backend/uploads')));
// Now, a file at backend/uploads/image.jpg can be accessed at http://localhost:5000/uploads/image.jpg

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));