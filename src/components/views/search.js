import React from 'react'
import '../../assets/css/search.css'

import { gethotsearch , getsearch } from '../../utill/axios/'

class Search extends React.Component{
  constructor(){
    super()
    this.state={
      searchlist:[],
      inputval:'',
      keywords:''
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
    console.log(e.target.value)
    this.setState({
      inputval:e.target.value
    })
  }
  render(){
    const { searchlist } = this.state
    return(
      <div>
        <div className="search">
          <input value={this.state.inputval} onChange={this.change.bind(this)} type="text" placeholder="搜索歌曲、歌手、专辑"/>
        </div>
        <div className="hotsearch">
          <h2>热门搜索</h2>
          {
            searchlist.map(item=>{
              return <span key={item.first} className='hotlist'>{item.first}</span>
            })
          }
        </div>
      </div>
    )
  }
}

export default Search