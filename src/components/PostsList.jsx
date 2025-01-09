import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Jovino" body="React.js é incrível" />
                <Post author="Maximilian" body="Assista o meu curso completo" />
            </ul>
        </>
    );
}

export default PostsList;
