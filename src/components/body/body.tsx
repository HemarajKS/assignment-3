import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData } from '../../redux/reducers/deleteSlice';
import { getData } from '../../redux/reducers/fetchSlice';
import './body.css';

const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.fetch.data.data);
  console.log('userData', userData && Object.keys(userData));
  const deleted = useSelector((state: any) => state.delete.data);

  console.log('del', deleted && deleted.status);

  useEffect(() => {
    dispatch(getData());
  }, [deleted]);

  return (
    <div className="bodyContainer">
      {userData &&
        Object.keys(userData).map((key, index) => {
          return (
            <div key={index} className="bodyItems">
              <div className="itemcontainer">
                <div className="item">{userData[key].name}</div>
                <div className="item">{userData[key].phone}</div>
                <div className="item">{userData[key].address}</div>
              </div>
              <div className="delete">
                <button
                  onClick={() => {
                    dispatch(deleteData(key));
                  }}
                  className="deleteButton"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Body;
