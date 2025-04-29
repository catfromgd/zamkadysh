import React, { useEffect } from "react";
import { useState } from "react";

const UsersAPI = () => {
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [userCity, setUserCity] = useState('');
  const [userStreet, setUserStreet] = useState('');
  const [userSuite, setUserSuite] = useState('');
  useEffect(() => {
    const getInfo = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => {
          setInfo(data);
        });
    };
    getInfo();
  }, []);
  const getUserInfo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setUserCity(data.adress.city);
        setUserStreet(data.adress.street);
        setUserSuite(data.adress.suite);
        setUserInfo(data);
      });
  };
  return (
    <>
      <div className="buttons">
        {info.map((el, index) => (
          <button key={index} onClick={() => getUserInfo(el.id)}>
            {el.name}
          </button>
        ))}
      </div>
      <div className="userInfo">
        <>
          <div className="buttons">
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.phone}</p>
          </div>
          <div className="userInfo">
            <p>{userCity}</p>
            <p>{userStreet}</p>
            <p>{userSuite}</p>
          </div>
           {userInfo.company}
        </>
      </div>
      <div className="posts"></div>
    </>
  );
};

export default UsersAPI;
