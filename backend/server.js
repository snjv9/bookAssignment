const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')

// Connect to MongoDB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD)
mongoose.set("strictQuery", false);


// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(DB);
    console.log('Connected To DataBase');
}

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});