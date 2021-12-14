import {Component} from 'react'
import Cookies from 'js-cookie'

import MovieCard from '../MovieCard'
import './index.css'

class MoviesHome extends Component {
  state = {videosList: [], name: '' || 'anonymous'}

  componentDidMount() {
    this.getAccess()
    this.getMovies()
  }

  getAccess = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    // console.log(data.jwt_token)
    const jwttoken = data.jwt_token
    Cookies.set('jwt_token', jwttoken)
  }

  getMovies = async () => {
    const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    const fetchedVideos = fetchedData.videos.slice(0, 25)
    console.log(fetchedVideos)
    const updatedData = fetchedVideos.map(eachVideo => ({
      id: eachVideo.id,
      channel: eachVideo.channel,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))

    this.setState({videosList: [...updatedData]})
  }

  render() {
    const {videosList, name} = this.state
    console.log(name)
    return (
      <div className="videos-container">
        <h1 className="videos-heading">Youtube Videos</h1>
        <ul className="videos-list-container">
          {videosList.map(eachVideo => (
            <li key={eachVideo.id} className="list-item">
              <MovieCard eachVideo={eachVideo} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MoviesHome
