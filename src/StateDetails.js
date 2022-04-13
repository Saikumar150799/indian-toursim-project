import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedStates, removeSelectedStates } from './actions/stateAction'
import PlaceDetails from './PlaceDetails'
const StateDetails = () => {
  const state = useSelector((states) => Object.values(states.state))//this .state getting from reducer
 
  const { statesId } = useParams() //statesId should be same which me mention in app.js



  const dispatch = useDispatch()
  const fetchStatesPlaces = async () => {
    const URL = await axios.get(`https://india-toursim-project.herokuapp.com/states/${statesId}/places`)
      .catch((err) => {
        console.log(err)
      })
    dispatch(selectedStates(URL.data))

  }
  useEffect(() => {
    if (statesId && statesId !== "") fetchStatesPlaces()
    return () => { dispatch(removeSelectedStates()) }
  }, [statesId])
  return (
    <>

    <div className='quote'> A JOURNEY OF A THOUSAND MILES BEGINS WITH A SINGLE STEP</div>
    <div className='Places'>
      {state.map((object) => {
        return <PlaceDetails name={object.name} description={object.description} image={object.image_url} />
      })}

    </div>
    </>
  )
}

export default StateDetails