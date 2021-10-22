import React from 'react'
import styles from '../../Styles/FeedPhotosItem.module.css'
import Image from '../Helpers/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.contador}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
