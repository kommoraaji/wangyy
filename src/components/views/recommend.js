import React from 'react'
import '../../assets/css/recommend.css'

import { getsonglist , newsong } from '../../utill/axios/'

class Recomment extends React.Component{
  constructor(){
    super()
    this.state={
      songlist:[],
      newsongs:[]
    }
  }
  componentDidMount(){
    getsonglist({limit:6}).then(res=>{
      // console.log(res)
      if(res.data.code === 200){
        this.setState({
          songlist:res.data.result
        })
      }
    })
    newsong().then(res=>{
      // console.log(res)
      if(res.data.code === 200){
        this.setState({
          newsongs:res.data.result
        })
      }
    })
  }

  toplay(id){
    this.props.history.push(`/play?id=${id}`)
  }

  render(){
    const { songlist , newsongs } = this.state
    // console.log(songlist,'ddd')  
    return(
      <div>
        <h3 className='recommend'>推荐歌单</h3>
        <ul className='songs'>
          {
            songlist.map(item=>{
              return <li key={item.id} className='songlist'>
                <img src={item.picUrl} alt=""/>
                <p className='name'>{item.name}</p>
              </li> 
            })
          }
        </ul>
        <h3 className='recommend'>最新音乐</h3>
        <ul>
          {
            newsongs.map(item=>{
              return <li onClick={this.toplay.bind(this,item.id)} key={item.id} className='list'>
              <div className="listcenter">
                <h3>
                  {item.name}
                  {
                    item.song.alias ? item.song.alias.map(item=>{
                      return <span key={item}>({item})</span>
                    }):''
                  }
                </h3>
                <span className='listtit'>{item.song.artists[0].name}-{item.song.album.name}</span>
              </div>
              <div className="listright">
                ++
              </div>
            </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Recomment