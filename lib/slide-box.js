import React, { Component } from 'react'
import './slide-box.scss'

const BannerList = (props) => {
    const BannerItems = props.banners.map((item, index)=>(
        <li key={index} className={`banner-item ${index===props.active?'active':''}`}>
            <img src={item} />
        </li>
    ))
    return <ul className="banner-list">{BannerItems}</ul>
}

const PianoList = (props) => {
    const PianoItems = props.thumbs.map((item, index)=>(
        <li 
            order={index}
            key={index}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            className={`piano-item ${index===props.active?'active':''}`}>
            <img src={item} />
        </li>
    ))
    return <ul className="piano-list">{PianoItems}</ul>
    
}
export default class SlideBox extends Component {
    state = {
        active: 0,
        disableTimeUpdate: true
    }
    constructor(props) {
        super(props)
        this.container = React.createRef()
    }
    tick = () => {
        if (this.state.disableTimeUpdate) {
            clearInterval(this.timerID)
        }
        else {
            this.setActive((this.state.active+1)%5)
        }
    }
    handleMouseOut = () => {
        this.setState({ disableTimeUpdate: false})
        this.timerID = setInterval(this.tick, this.props.duration)
    }
    handleMouseOver = (ev) => {
        this.setState({ disableTimeUpdate: true })
        let target = null
        if (ev.target.tagName === 'IMG') {
            target = ev.target.parentElement
        }
        const order = Number.parseInt(target.getAttribute('order'))
        clearInterval(this.timerID)
        this.setActive(order)
    }
    componentDidMount = () => {
        this.template = {
            banners: this.container.current.querySelectorAll('.freyr-item'),
            thumbs: this.container.current.querySelectorAll('.piano-item')
        }
        this.timerID = setInterval(this.tick, this.props.duration)
        this.setState({ disableTimeUpdate: false })
    }
    componentWillUnmount = () => {
        clearInterval(this.timerID)
        this.setState({ disableTimeUpdate: true })
    }
    setActive = (index) => {
        this.setState({ active: index })
    }
    render = () => {
        return (
            <div className="slide-box" ref={this.container}>
                <div className="slide">
                    <BannerList 
                        active={this.state.active}
                        banners={this.props.banners} />
                    <PianoList 
                        active={this.state.active}
                        thumbs={this.props.thumbs}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut} />
                </div>
            </div>
        )
    }
}
