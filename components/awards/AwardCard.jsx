import Image from 'next/image'
import React from 'react'

const AwardCard = ({name, imageUrl, username, jobTitle}) => {
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
                <p>{jobTitle}</p>
                <p className="small">{username}</p>
            </div>
        </div>
    </div>
  )
}

export default AwardCard