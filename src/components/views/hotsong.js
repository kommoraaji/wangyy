import React from 'react'
import '../../assets/css/hotsong.css'

import { hotsong } from '../../utill/axios/'


class Hotsong extends React.Component {
  constructor() {
    super()
    this.state = {
      hotlist: []
    }
  }

  componentDidMount() {
    hotsong().then(res => {
      console.log(res)
      if (res.data.code === 200) {
        this.setState({
          hotlist: res.data.playlist.tracks
        })
      }
    })
  }

  toplay(id) {
    this.props.history.push(`/play?id=${id}`)
  }
  render() {
    const { hotlist } = this.state
    return (
      <div>
        <div className="notice"></div>
        <ul>
          {
            hotlist.map((item, i) => {
              return <li onClick={this.toplay.bind(this, item.id)} key={item.id} className='list'>
                <div className="listleft">
                  <span>{i + 1 < 10 ? '0' + (i + 1) : i + 1}</span>
                </div>
                <div className="listcenter">
                  <h3>{item.name}</h3>
                  <p>{item.ar[0].name} - {item.al.name}</p>
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

export default Hotsong