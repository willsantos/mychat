import { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  Container, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField,
} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import io from 'socket.io-client';
import avatar1 from './assets/avatar1.jpg';
import Message from './Message';

const useStyles = makeStyles(() => ({
  largeIcon: {
    width: 50,
    height: 50,
  },
  personalItem: {
    paddingRight: 10,
  },
  messageBox: {
    height: '70vh',
    overflowY: 'auto',
  },

}));

const socket = io('http://localhost:8080', { transports: ['websocket'] });
socket.on('connect', () => console.log('[IO] Connect =>New connection'));

const Chat = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleNewMessage = (newMessage) => setMessages([...messages, newMessage]);

    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage);
  }, [messages]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit('chat.message', {
        id: 1,
        message,
      });
      setMessage('');
    }
  };

  return (
    <Container maxWidth="xl">
      <List className={classes.messageBox}>
        <ListItem>
          <ListItemText align="right" className={classes.personalItem}>Oi, quer tc?</ListItemText>
          <ListItemIcon>
            <Avatar alt="user1" src={avatar1} />
          </ListItemIcon>
        </ListItem>
        {messages.map((m) => (
          <Message
            avatar={avatar1}
            message={m.message}
          />
        ))}

        <Message
          avatar={avatar1}
          message="Quantos anos?"
        />
      </List>
      <form onSubmit={handleFormSubmit}>
        <Grid container>
          <Grid item xs={11}>

            <TextField
              id="chat-multiline"
              label="chat"
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              value={message}
            />
          </Grid>
          <Grid item xs={1}>
            <Button>
              <SendIcon color="secondary" className={classes.largeIcon} />

            </Button>
          </Grid>

        </Grid>
      </form>

    </Container>
  );
};

export default Chat;
