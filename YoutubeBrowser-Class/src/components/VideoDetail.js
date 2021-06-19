import React from 'react'

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) return <div>Loading...</div>
    return (
      <div>
        <div className='ui embed'>
          <iframe title="video player"
            src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
          ></iframe>
        </div>
        <div className='ui segment'>
          <h4 className='ui header'>{this.props.video.snippet.title}</h4>
          <p className='ui content'>{this.props.video.snippet.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoDetail
