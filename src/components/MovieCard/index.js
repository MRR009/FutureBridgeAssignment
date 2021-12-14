import './index.css'

const MovieCard = props => {
  const {eachVideo} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachVideo

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
