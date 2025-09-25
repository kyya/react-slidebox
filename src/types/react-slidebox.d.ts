declare module 'react-slidebox' {
    import type { FC } from 'react'

    export interface SlideBoxProps {
        duration?: number
        banners: string[]
        thumbs: string[]
        fallback?: string
    }

    const ReactSlideBox: FC<SlideBoxProps>

    export default ReactSlideBox
}
