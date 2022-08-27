import React from 'react'

const DestinationDetails = ({title, text}) => {
  return (
    <div class="destination-info__details">
    <div class="destination-info__details__head">{title}</div>
    <div class="destination-info__details__text">
      {text}
    </div>
  </div>
  )
}

export default DestinationDetails