import Image from 'next/image'
import React from 'react'

const AwardCard = ({name, imageUrl, username, subtext}) => {
  return (
    <div className="award__card">
       
            <Image
            width="223px"
            height="238px"
            className="award__card-image"

            src={imageUrl} 
            />
        
        <div className=" award__card-text">
            <p>{name}</p>
            <div className="d-flex align-center  award__card-text__subtext">
                <p>{subtext}</p>
                <div></div>
                <p className="small">{username}</p>
            </div>
        </div>
    </div>
  )
}

export default AwardCard