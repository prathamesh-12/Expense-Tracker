import Card from '../Card/Card';
import classes from './UserList.module.css';

const UserList = ({users}) => {

    const renderedLI = users.map(user => {
        return <li key={user.id}>{user.name} {user.age}</li>
    })

    if(users.length < 1) {
        return <></>;
    }

    return (    
        <Card className={classes.users}>
            <ul>{renderedLI}</ul>
        </Card>
    );
}

export default UserList;