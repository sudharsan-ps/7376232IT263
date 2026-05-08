export default function NotificationCard({ notification }) {

    return (
        <div style={{
            border: '1px solid gray',
            padding: '10px',
            marginBottom: '10px'
        }}>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
            <small>{notification.notificationType}</small>
        </div>
    );
}