import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <main className='w-dvw h-dvh overflow-hidden'>
      <Image
      src="/assets/rainny/rain03.jpg"
      alt="backgroundImage"
      quality={100}
      width={100}
      height={100}
      style={
        { 
          objectFit: 'cover', 
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '10',
        }
      }
    
      />
    </main>
  )
}

export default HomePage
