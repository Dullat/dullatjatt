import React from 'react'
import { useProgress } from '@react-three/drei'

const Loading = () => {
    const { progress } = useProgress()
    return (
        <div className='h-72 w-full flex justify-center items-center'>
            <div className='w-16 h-2 bg-slate-800 rounded-md overflow-hidden'>
                <div className={`h-full bg-slate-400 w-5`} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export default Loading