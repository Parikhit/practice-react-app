import Post from '../post/post.component';
import classes from './post-list.module.css';

const PostList = () => {
    return (
        <ul className={classes.posts}>
            <Post author='Max' body='React is awesome' />
            <Post author='Tyler' body='React is great' />
            <Post author='Jimmy' body='React is fun' />
            <Post author='Sally' body='React is cool' />
        </ul>
    );
};

export default PostList;
