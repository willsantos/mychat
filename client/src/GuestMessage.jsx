/* eslint-disable react/destructuring-assignment */
import {
  ListItem, ListItemText, ListItemIcon, Avatar, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  guest: {
    backgroundColor: '#90caf9',
    flex: 1,
    alignContent: 'right',
  },
  personalItem: {
    paddingRight: 10,
  },
}));

const UserMessage = (props) => {
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

export default UserMessage;
