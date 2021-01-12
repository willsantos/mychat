/* eslint-disable react/destructuring-assignment */
import {
  ListItem, ListItemText, ListItemIcon, Avatar, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  guest: {
    backgroundColor: '#b2dfdb',
    flex: 1,
    alignContent: 'right',

  },
}));

const Message = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.guest}>
      <ListItemIcon>
        <Avatar alt="user1" src={props.avatar} />
      </ListItemIcon>
      <ListItemText primary={props.message} />
    </ListItem>
  );
};

export default Message;
