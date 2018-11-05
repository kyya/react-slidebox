![react-slidebox](https://i.loli.net/2018/10/27/5bd3e28460956.gif)
<h1 align="center">Another React Slidebox</h1>

[![npm](https://img.shields.io/npm/v/react-slidebox.svg?style=flat-square)](https://www.npmjs.com/package/react-slidebox)
[![npm](https://img.shields.io/npm/l/react-slidebox.svg?style=flat-square)](https://github.com/anapopo/react-slidebox/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/react-slidebox.svg?style=flat-square)](https://www.npmjs.com/package/react-slidebox)

React Slide Box [@Demos](https://anapopo.github.io/react-slidebox/)

## Props
+ **duration**: Picture switching time
+ **banners**: Large pictures, recommends 5
+ **thumbs**: Small pictures, recommends 5

example: 
```javascript
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
```

## How to Use
`yarn add react-slidebox` or `npm install react-slidebox`

```javascript
// For ES6
import 'react-slidebox/dist/react-slidebox.css'
import ReactSlideBox from 'react-slidebox'

//Then use <ReactSlideBox {...props} /> like Other React Component
```

## Build
`npm run build` or `yarn build`

## License
MIT

