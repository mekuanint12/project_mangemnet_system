const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notifyController');

router.get('/', notificationController.getAllNotifications);
router.get('/:id', notificationController.getNotificationById);
router.post('/', notificationController.createNotification);
router.put('/:id', notificationController.updateNotificationById);
router.delete('/:id', notificationController.deleteNotificationById);

module.exports = router;
