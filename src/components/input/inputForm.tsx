import { postData } from '../../redux/reducers/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/reducers/fetchSlice';
import { useEffect } from 'react';
import './input.css';

const InputForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    if (data.name !== '' && data.phone !== '' && data.address !== '') {
      dispatch(postData(data));
    } else {
      alert('enter all fields');
    }
  };

  const post = useSelector((state: any) => state.post.data);

  useEffect(() => {
    dispatch(getData());
  }, [post]);

  return (
    <div className="inputForm">
      <form onSubmit={submitHandler} className="inputFormContainer">
        <div className="inputFields">
          <input type="text" className="name" name="name" placeholder="Name" />
          <input
            type="text"
            className="phone"
            name="phone"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="address"
            name="address"
            placeholder="Address"
          />
        </div>
        <button className="addButton">ADD</button>
      </form>
    </div>
  );
};

export default InputForm;
