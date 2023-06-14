const express = require("express")
const compression = require("compression")
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config();
const app = express();

const userRoute = require("./app/routes/user")
const profileRoute = require("./app/routes/profile")
const reportRoute = require("./app/routes/report")

//******** MiddlWare *************** //
app.use(express.json());
app.use(cors());
app.use(compression())
app.use((req,res,next)=>{
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader('Content-Security-Policy', 'unsafe-url');
    next();
})

// Routes
app.get('/health', (req, res) => {
    res.send('Hello, Diagnostic Express server!');
});
  
// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.use('/user', userRoute);
app.use('/profiles', profileRoute);
app.use('/reports', reportRoute);

const mongodbURI = "mongodb+srv://backend_user:KHTI1vAk5ZiFeY8n@admindiagnostic.dcs0b80.mongodb.net/omerald_diagnostic?retryWrites=true&w=majority";

mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10
});
  
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
  
mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('MongoDB connection closed');
        process.exit(0);
      });
}); 
