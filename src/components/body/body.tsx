import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteData } from '../../redux/reducers/deleteSlice'
import { getData } from '../../redux/reducers/fetchSlice'

const Body = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state: any) => state.fetch.data.data)
  console.log('userData', userData && Object.keys(userData))
  const deleted = useSelector((state: any) => state.delete.data)

  console.log('del', deleted && deleted.status)

  useEffect(() => {
    dispatch(getData())
  }, [deleted])

  return (
    <div>
      {userData &&
        Object.keys(userData).map((key, index) => {
          return (
            <div key={index}>
              <div className="itemcontainer">
                <div className="item">{userData[key].name}</div>&nbsp;
                <div className="item">{userData[key].phone}</div>&nbsp;
                <div className="item">{userData[key].address}</div>
              </div>
              <div className="delete">
                <button
                  onClick={() => {
                    dispatch(deleteData(key))
                  }}
                >
                  Delete
                </button>
              </div>
              <hr />
            </div>
          )
        })}
    </div>
  )
}

export default Body
