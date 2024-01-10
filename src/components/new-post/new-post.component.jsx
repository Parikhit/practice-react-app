import { PropTypes } from 'prop-types';

import classes from './new-post.module.css';

const NewPost = ({ onBodyChange, enteredBody }) => {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows='3' onChange={onBodyChange} />
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' required />
            </p>
        </form>
    );
};

NewPost.propTypes = {
    onBodyChange: PropTypes.function,
    enteredBody: PropTypes.string,
};

export default NewPost;
