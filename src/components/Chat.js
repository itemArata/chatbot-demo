import React from "react"
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Noprofile from '../assets/image/Great_Ball.png'
import Torahack from '../assets/image/bellsprout.png'
const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return(
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Torahack} />
                ) : (
                    <Avatar alt="icon" src={Noprofile} />

                )} 
            </ListItemAvatar>
            <div className="p-chat__bubble"> {props.text}</div>
        </ListItem>
    )
}

export default Chat