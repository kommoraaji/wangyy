import React from 'react'
import '../../assets/css/hotsong.css'

import { hotsong } from '../../utill/axios/'


class Hotsong extends React.Component{
  constructor(){
    super()
    this.state={
      hotlist:[]
    }
  }

  componentDidMount(){
    hotsong().then(res=>{
      // console.log(res)
      if(res.data.code === 200){
        this.setState({
          hotlist:res.data.result
        })
      }
    })
  }

  toplay(){
    console.log(this)
    this.props.history.push('/play')
  }
  render(){
    // const { hotlist } = this.state
    return(
      <div>
        <div className="notice"></div>
        <ul>
            <li onClick={this.toplay.bind(this)} className='list'>
              <div className="listleft">
                01
              </div>
              <div className="listcenter">
                <h3>爸爸妈妈</h3>
                <p>李荣浩</p>
              </div>
              <div className="listright">
                ++
              </div>
            </li>
        </ul>
      </div>
    )
  }
}

export default Hotsong