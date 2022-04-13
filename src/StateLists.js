import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StateComponent from './StateComponent'
import { setStates } from './actions/stateAction'

const StateLists = () => {
  const states = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchStates = async () => {
    const URL = await axios.get('https://india-toursim-project.herokuapp.com/states')
      .catch((err) =>{
        console.log(err)
      } )
      dispatch(setStates(URL.data))
    }
    
  useEffect(() => {
    fetchStates()
  }, [])

  
  return (
    <>
    <div className='quote'> A JOURNEY OF A THOUSAND MILES BEGINS WITH A SINGLE STEP</div>
    <div className='allStates'>
      <StateComponent />
    </div>
    </>
  )
}

export default StateLists