import React, { useEffect } from "react";
import { useState } from "react";

const UsersAPI = () => {
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isClosedPosts, setIsClosedPosts] = useState(true);
  

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
        setIsClosedPosts(true);
        setUserInfo(data);
        setUserPosts([]);
      });
  };
  const getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((data) => data.json())
      .then((data) => {
        setIsClosedPosts(!isClosedPosts);
        !isClosedPosts ? setUserPosts([]) : setUserPosts(data);
      });
  };
  return (
    <>
      <div className="buttons" style={{ display: "flex", gap: "20px" }}>
        {info.map((el, index) => (
          <button key={index} onClick={() => getUserInfo(el.id)}>
            {el.name}
          </button>
        ))}
      </div>
      <div className="userInfo" style={{ border: "1px solid black" }}>
        {userInfo && (
          <>
            <div className="buttons">
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
              <p>{userInfo.phone}</p>
            </div>
            <div className="userInfo">
              <p>{userInfo.address.city}</p>
              <p>{userInfo.address.street}</p>
              <p>{userInfo.address.suite}</p>
            </div>
            <div>
              <p>{userInfo.company.name}</p>
              <button onClick={() => getUserPosts(userInfo.id)}>{isClosedPosts ? 'Show posts' : 'Close posts'}</button>
            </div>
          </>
        )}
      </div>
      <div className="posts" style={{display: "flex", gap: "20px", flexWrap: "wrpa", marginTop: "10px", padding: "10px"}}>
        {userPosts.map((el, index) => (
          <div key={index} style={{width: "150px", border: "1px solid black"}}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
          
        ))}
      </div>
    </>
  );
};

export default UsersAPI;
