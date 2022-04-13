import React from 'react'
import './App.css'
import 'tachyons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StateComponent = () => {
  const states = useSelector((state) => state.allStates.states)

  const renderStates = states.map((state) => {
    const { state_id, name, image_url } = state
    console.log(state_id)
    return (
      <>

        <div className='state grow' key={state_id}>
          <div className='card'>
            <div className='image'>
              <div className='overlay'></div>
              <img src={image_url} alt={name} />
              <div className='content'>
                <h3>AMAZING PLACES</h3>
        <Link to={`/states/${state_id}`}>
                <button>SEE MORE</button>
          </Link>
              </div>
            </div>
            <h3><i className="fa-solid fa-location-dot"></i>{name}</h3>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      {renderStates}
    </>
  )
}

export default StateComponent