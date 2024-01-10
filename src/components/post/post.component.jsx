import { PropTypes } from 'prop-types';

//Using CSS modules
import classes from './post.module.css';

const Post = ({ author, body }) => {
    return (
        <div className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </div>
    );
};

Post.propTypes = {
    author: PropTypes.string,
    body: PropTypes.string,
};

export default Post;
