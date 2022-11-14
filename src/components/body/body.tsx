import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../redux/reducers/fetchSlice'

const Body = () => {
  const dispatch = useDispatch()

  const userData = useSelector((state: any) => state.fetch.data.data)
  return <div>{JSON.stringify(userData)}</div>
}

export default Body
