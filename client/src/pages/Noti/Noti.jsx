import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { Container, Typography, List, ListItem, ListItemText, Badge } from '@mui/material';
import 'styles.css'; // Import the CSS file

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref('notifications').once('value');
        const data = snapshot.val();
        if (data) {
          setNotifications(Object.values(data));
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="container">
      <Typography variant="h3" gutterBottom className="notification-header">
        Notifications
      </Typography>
      <List className="notification-list">
        {notifications.map((notification, index) => (
          <ListItem key={index} className="notification-item">
            <Badge badgeContent={notification.numNotifications} color="primary">
              <ListItemText primary={notification.username} secondary={notification.notification} />
            </Badge>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default NotificationPage;
