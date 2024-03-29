import {AiFillStar} from 'react-icons/ai'

import './index.css'

const MovieCard = props => {
  const {eachVideo} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo

  const randomNumber = Math.floor(Math.random() * 10)
  // console.log(randomNumber)

  return (
    <div className="movie-card-container">
      <img src={thumbnailUrl} className="thumbnail-url" alt="thumbnail" />
      <h1 className="title">{title}</h1>
      <hr className="horizontal-line" />
      <div className="card-bottom-container">
        <img
          src={channel.profile_image_url}
          alt="profile"
          className="profile-image"
        />
        <div className="channel-container">
          <p className="channel-name">{channel.name}</p>
          <div className="view-published">
            <p className="view-count">{viewCount} Views</p>
            <p className="published-date">{publishedAt}</p>
            <div className="rating-container">
              <p className="rating">{randomNumber}</p>
              <AiFillStar className="rating-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
