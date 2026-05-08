const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

    studentId: Number,
    notificationType: String,
    title: String,
    message: String,
    isRead: {
        type: Boolean,
        default: false
    },
    priority: Number

}, {
    timestamps: true
});

module.exports = mongoose.model('Notification', notificationSchema);