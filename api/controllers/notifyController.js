const Notification = require('../models/Notification');


exports.createNotification = async (req, res, next) => {
  try {
    const { content, recipient, sender } = req.body;
    const notification = new Notification({
      content,
      recipient,
      sender
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    next(err);
  }
};


exports.getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    next(err);
  }
};


exports.getNotificationById = async (req, res, next) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json(notification);
  } catch (err) {
    next(err);
  }
};

exports.updateNotificationById = async (req, res, next) => {
  try {
    const { content, recipient, sender } = req.body;
    const notification = await Notification.findByIdAndUpdate(req.params.id, {
      content,
      recipient,
      sender
    }, { new: true });
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json(notification);
  } catch (err) {
    next(err);
  }
};

exports.deleteNotificationById = async (req, res, next) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json(notification);
  } catch (err) {
    next(err);
  }
};
