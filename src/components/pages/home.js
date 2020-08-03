import React from 'react'
import '../../assets/css/home.css'

import Recommend from '../views/recommend'
import Hotsong from '../views/hotsong'
import Search from '../views/search'

import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      img: require('../../assets/images/logo.jpg')
    }
  }
  render() {
    const { img } = this.state
    return (
      <div>
        <header>
          <div className='left'>
            <img className='logo' src={img} alt="" />
            <span className='text'>网易云音乐</span>
          </div>
          <div className='down'>
            <span>下载APP</span>
          </div>
        </header>
        <div className="title">
          <NavLink activeClassName='select' to='/home/recommend'>推荐音乐</NavLink>
          <NavLink activeClassName='select' to='/home/hotsong'>热歌榜</NavLink>
          <NavLink activeClassName='select' to='/home/search'>搜索</NavLink>
        </div>
        <Switch>
          <Route path='/home/recommend' component={Recommend}></Route>
          <Route path='/home/hotsong' component={Hotsong}></Route>
          <Route path='/home/search' component={Search}></Route>
          <Redirect to='/home/recommend'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default Home