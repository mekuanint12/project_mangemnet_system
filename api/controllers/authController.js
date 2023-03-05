const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Login a user
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.cookie('accessToken', accessToken, { httpOnly: false });

    res.status(200).json({ 
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      accessToken: accessToken
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('+role');
    if (!user || user.deleted) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden route' });
    }
    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized Access for the route' });
  }
};


// Logout a user
exports.logoutUser = async (req, res) => {
  res.clearCookie('accessToken');
  res.status(200).json({ message: 'Logout successful' });
};
