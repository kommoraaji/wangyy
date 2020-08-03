import React from 'react'
import '../../assets/css/search.css'

import { gethotsearch , getsearch } from '../../utill/axios/'

class Search extends React.Component{
  constructor(){
    super()
    this.state={
      hotitem:[],
      keyword:'',
      songlist:[]
    }
  }
  componentDidMount(){
    gethotsearch().then(res=>{
      // console.log(res)
      if(res.data.code === 200){
        this.setState({
          hotitem:res.data.result.hots
        })
      }
    })
  }

  change(e){
    this.setState({
      keyword : e.target.value
    })
  }
  
  keydown=(e)=>{
    console.log(e.keyCode)
    if(e.keyCode == 13){
      getsearch({keywords:this.state.keyword}).then(res=>{
        console.log(res)
        if(res.data.code === 200){
          this.setState({
            songlist:res.data.result.songs
          })
        }
      })
    }
  }

  setval(e){
    this.setState({
      keyword : e
    },()=>{
      getsearch({keywords:this.state.keyword}).then(res=>{
        console.log(res)
        if(res.data.code === 200){
          this.setState({
            songlist:res.data.result.songs
          })
        }
      })
    })
  }


  toplay(id){
    this.props.history.push(`/play?id=${id}`)
  }
  
  render(){
    const { hotitem , keyword , songlist } = this.state
    return(
      <div>
        <div className="search">
          <input value={this.state.keyword} onChange={this.change.bind(this)} onKeyDown={this.keydown} type="text" placeholder="搜索歌曲、歌手、专辑"/>
        </div>
        { keyword === '' ? <div className="hotsearch" >
          <h2>热门搜索</h2>
          {
            hotitem.map(item=>{
              return <span onClick={this.setval.bind(this,item.first)} key={item.first} className='hotlist'>{item.first}</span>
            })
          }
        </div> : '' }
        <ul>
          {
            songlist.map(item=>{
              return <li onClick={this.toplay.bind(this,item.id)} key={item.id} className='list'>
              <div className="listcenter">
                <h3>{item.name}</h3>
                <span className='listtit'>{item.artists[0].name} - {item.album.name}</span>
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

export default Search