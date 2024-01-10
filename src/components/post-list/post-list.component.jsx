import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Post from '../post/post.component';
import NewPost from '../new-post/new-post.component';
import classes from './post-list.module.css';

const PostList = () => {
    const [enteredBody, setEnteredBody] = useState('');

    const changeBodyHandler = (e) => {
        setEnteredBody(e.target.value);
    };

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} enteredBody={enteredBody} />

            <ul className={classes.posts}>
                <Post author='Max' body='React is awesome' />
                <Post author='Tyler' body='React is great' />
                <Post author='Jimmy' body='React is fun' />
                <Post author='Sally' body='React is cool' />
            </ul>
        </>
    );
};

PostList.propTypes = {
    onBodyChange: PropTypes.function,
    enteredBody: PropTypes.string,
};

export default PostList;
