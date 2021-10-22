import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import styles from '../../Styles/FeedPhotos.module.css'

const FeedPhotos = ({ user, page, total, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options);
     
      if (response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, [request, page, user, setInfinite]);

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
      </ul>
    )
  else return null
}

export default FeedPhotos
