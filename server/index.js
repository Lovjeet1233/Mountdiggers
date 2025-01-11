const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Admin = require('./models/Admin'); 
const bcrypt = require('bcrypt');
const path = require('path');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mdsf', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    const setInitialAdmin = async () => {
        const existingAdmin = await Admin.findOne({ username: 'admin' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            const admin = new Admin({
                username: 'admin',
                password: hashedPassword,
            });
            await admin.save();
            console.log('Default admin created with username: admin, password: admin123');
        } else {
            console.log('Admin already exists');
        }
    };
    setInitialAdmin();
}).catch((err) => console.error('MongoDB connection failed:', err));

// API Routes - Make sure these come before the static middleware
app.use('/api/treks', require('./routes/trekRoutes'));
app.use('/api/adminnn', require('./routes/adminRoutes'));

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));