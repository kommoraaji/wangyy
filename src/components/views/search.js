import React from 'react'
import '../../assets/css/search.css'

import { gethotsearch , getsearch } from '../../utill/axios/'

class Search extends React.Component{
  constructor(){
    super()
    this.state={
      searchlist:[],
      keyword:''
    }
  }
  componentDidMount(){
    gethotsearch().then(res=>{
      // console.log(res)
      if(res.data.code == 200){
        this.setState({
          searchlist:res.data.result.hots
        })
      }
    })
  }

  change(e){
    this.setState({
      keyword : e.target.value
    })
  }

  setval(e){
    this.setState({
      keyword : e
    })
  }
  render(){
    const { searchlist , keyword } = this.state
    return(
      <div>
        <div className="search">
          <input value={this.state.keyword} onChange={this.change.bind(this)} type="text" placeholder="搜索歌曲、歌手、专辑"/>
        </div>
        { keyword == '' ? <div className="hotsearch" >
          <h2>热门搜索</h2>
          {
            searchlist.map(item=>{
              return <span onClick={this.setval.bind(this,item.first)} key={item.first} className='hotlist'>{item.first}</span>
            })
          }
        </div> : '' }
      </div>
    )
  }
}

export default Search