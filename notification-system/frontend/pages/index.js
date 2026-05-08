import { useEffect, useState } from 'react';
import API from '../services/api';
import NotificationCard from '../components/NotificationCard';

export default function Home() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        fetchNotifications();

    }, []);

    const fetchNotifications = async () => {

        const response = await API.get('/notifications');

        setNotifications(response.data);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Notification Dashboard</h1>

            {
                notifications.map((notification) => (
                    <NotificationCard
                        key={notification._id}
                        notification={notification}
                    />
                ))
            }
        </div>
    );
}