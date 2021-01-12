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
  personalItem: {
    paddingRight: 10,
  },
}));

const UserMessage = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.guest}>
      <ListItemText align="right" primary={props.message} />
      <ListItemIcon>
        <Avatar alt="user1" src={props.avatar} />
      </ListItemIcon>
    </ListItem>
  );
};

export default UserMessage;
