import React from 'react'
import { render } from 'react-dom'

import 'react-slidebox/dist/react-slidebox.css'
import ReactSlideBox from 'react-slidebox'

const props = {
    duration: 2000,
    banners: [
        'https://i.loli.net/2018/10/26/5bd3109e4e7f9.jpg',
        'https://i.loli.net/2018/10/26/5bd3109f390aa.jpg',
        'https://i.loli.net/2018/10/26/5bd3109f43a00.jpg',
        'https://i.loli.net/2018/10/26/5bd310a0c47c0.jpg',
        'https://i.loli.net/2018/10/26/5bd310a16546d.jpg'
    ],
    thumbs: [
        'https://i.loli.net/2018/10/26/5bd310f62e777.jpg',
        'https://i.loli.net/2018/10/26/5bd310f64c03b.jpg',
        'https://i.loli.net/2018/10/26/5bd310f6c653d.jpg',
        'https://i.loli.net/2018/10/26/5bd310f78c4f8.jpg',
        'https://i.loli.net/2018/10/26/5bd310f8a7753.jpg'
    ]
}
const AppStyle = {
    margin: '2em',
    display: 'flex',
    justifyContent: 'center'
}
const App = () => (
    <div className="container" style={AppStyle}>
        <ReactSlideBox {...props} />
    </div>
)

render(<App />, document.getElementById('root'))
