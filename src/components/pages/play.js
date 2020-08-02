import React from 'react'
import '../../assets/css/play.css'

import qs from 'querystring'

class Play extends React.Component{
  constructor(){
    super()
    this.state={
      id:''
    }
  }

  componentDidMount(){
    console.log(this)
  }

  render(){
    let queryStr = this.props.location.search.slice(1)
    let obj = qs.parse(queryStr)
    return(
      <div>
        <h2 className='slogo'>网易云音乐</h2>
        <div className='rod'>
          <img src={require('../../assets/images/needle-ip6.png')} alt=""/>
        </div>
        <div className="playing">
          <img src={require("../../assets/images/disc-ip6.png")} alt=""/>
        </div>
        <audio src={`https://music.163.com/song/media/outer/url?id=${obj.id}.mp3`} controls autoPlay></audio>
      </div>
    )
  }
}

export default Play