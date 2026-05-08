const Notification = require('../models/notificationModel');

const getNotifications = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const notifications = await Notification.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

    res.json(notifications);
};

const createNotification = async (req, res) => {

    const notification = await Notification.create(req.body);

    res.status(201).json(notification);
};

module.exports = {
    getNotifications,
    createNotification
};