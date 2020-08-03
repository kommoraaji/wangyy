import React from 'react'
import '../../assets/css/search.css'

import { gethotsearch, getsearch } from '../../utill/axios/'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      hotitem: [],
      keyword: '',
      songlist: []
    }
  }
  componentDidMount() {
    gethotsearch().then(res => {
      // console.log(res)
      if (res.data.code === 200) {
        this.setState({
          hotitem: res.data.result.hots
        })
      }
    })
  }


  change(e) {
    this.setState({
      keyword: e.target.value
    })
    if (e.target.value === '') {
      this.setState({
        songlist: []
      })
    }
  }

  //点击回车进行搜索
  keydown = (e) => {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      // console.log(this.state.keyword)
      getsearch({ keywords: this.state.keyword }).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.setState({
            songlist: res.data.result.songs
          })
        }
      })
    }
  }

  //获取热门搜索词
  setval(e) {
    this.setState({
      keyword: e
    }, () => {
      getsearch({ keywords: this.state.keyword }).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.setState({
            songlist: res.data.result.songs
          })
        }
      })
    })
  }

  //点击按钮清空input框
  clearinput() {
    this.setState({
      keyword: '',
      songlist:[]
    })
  }

  //跳转播放页面
  toplay(id) {
    this.props.history.push(`/play?id=${id}`)
  }

  render() {
    const { hotitem, keyword, songlist } = this.state
    return (
      <div>
        <div className="search">
          <input value={this.state.keyword} onChange={this.change.bind(this)} onKeyDown={this.keydown} type="text" placeholder="搜索歌曲、歌手、专辑" />
          { keyword === '' ? '' : <button onClick={this.clearinput.bind(this)} className='clearinput'>x</button> }
        </div>
        {keyword === '' ? <div className="hotsearch" >
          <h2>热门搜索</h2>
          {
            hotitem.map(item => {
              return <span onClick={this.setval.bind(this, item.first)} key={item.first} className='hotlist'>{item.first}</span>
            })
          }
        </div> : ''}
        <ul>
          {
            songlist.map(item => {
              return <li onClick={this.toplay.bind(this, item.id)} key={item.id} className='list'>
                <div className="listcenter">
                  <h3>{item.name}</h3>
                  <p className='listtit'>{item.artists[0].name} - {item.album.name}</p>
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