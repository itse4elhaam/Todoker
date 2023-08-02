import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = express();
app.use(cors)


app.get("/", (req, res) => {
    res.send('sever is ready')
})


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
	console.log(`Listening at: http://localhost:${PORT}/`);
});