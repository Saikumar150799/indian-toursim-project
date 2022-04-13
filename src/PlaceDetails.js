import React from 'react'
import 'tachyons'

const PlaceDetails = (props) => {

    return (
        <div className='placesContainer grow'>
            <div className='PlaceCard'>
                <div className='PlaceDetails'>
                    <img src={props.image} alt={props.name} />
                    <div className='PlaceContent'>
                        <h3>{props.name}</h3>
                        <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails