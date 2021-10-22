import React from 'react';
import { UserContext } from '../../Contexts/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../Styles/PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { logged } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>

      {logged && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
    </>
  )
}

export default PhotoComments;
