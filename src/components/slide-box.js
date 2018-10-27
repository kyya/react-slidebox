import React, { Component } from 'react'
import SlideBoxStyle from './slide-box.scss'
import PropTypes from 'prop-types'

const BannerList = (props) => {
    const BannerItems = props.banners.map((item, index) => (
        <li key={index} className={`${SlideBoxStyle['banner-item']} ${index === props.active ? SlideBoxStyle.active : ''}`}>
            <img src={item} />
        </li>
    ))
    return <ul className={SlideBoxStyle['banner-list']}>{BannerItems}</ul>
}

const PianoList = (props) => {
    const PianoItems = props.thumbs.map((item, index) => (
        <li
            order={index}
            key={index}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            className={`${SlideBoxStyle['piano-item']} ${index === props.active ? SlideBoxStyle.active : ''}`}>
            <img src={item} />
        </li>
    ))
    return <ul className={SlideBoxStyle['piano-list']}>{PianoItems}</ul>

}
export default class SlideBox extends Component {
    static defaultProps = {
        duration: 3000,
        fallback: 'https://i.loli.net/2018/10/26/5bd32a969e95e.png'
    }
    static propTypes = {
        duration: PropTypes.number,
        banners: PropTypes.arrayOf(PropTypes.string).isRequired,
        thumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
        fallback: PropTypes.string
    }
    state = {
        active: 0,
        disableTimeUpdate: true
    }
    constructor (props) {
        super(props)
        this.container = React.createRef()
    }
    tick = () => {
        if (this.state.disableTimeUpdate) {
            clearInterval(this.timerID)
        }
        else {
            this.setActive((this.state.active + 1) % 5)
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
            <div className={SlideBoxStyle['slide-box']} ref={this.container}>
                <div className={SlideBoxStyle.slide}>
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
