import React from 'react'
import Image from 'next/image'

const MentorCard = () => {
  return (
    <div className="mentor-card">  
      <div className="mentor-img">
        <Image src="" layout="fill" alt="mentor-img" objectFit="cover"/>
      </div>
      <div>
        <p className="name">Janet Simpson</p>
        <p className="role">Blockchain Developer at Binance</p>
      </div>
    </div>
  )
}

export default MentorCard;