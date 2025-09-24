import React from 'react'
import ReactSlideBox from 'react-slidebox'

const sliderProps = {
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

const App = () => (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl rounded-2xl border border-slate-700/60 bg-slate-800/60 p-8 shadow-2xl backdrop-blur">
            <h1 className="mb-6 text-center text-3xl font-semibold tracking-tight text-slate-100">
                React Slidebox Demo
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-center text-base text-slate-300">
                Explore the slidebox component powered by React 19, Tailwind CSS, and Vite. Hover over each thumbnail to
                preview the corresponding banner image, or let the carousel autoplay to cycle through the gallery.
            </p>
            <div className="flex justify-center">
                <ReactSlideBox {...sliderProps} />
            </div>
        </div>
    </div>
)

export default App
