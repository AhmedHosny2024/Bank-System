import { useState } from "react";
import "./ShowCustomers.css";
import { db } from "../firebase";
// import { getDocs, collection, doc } from "@firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

function ShowCustomers() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Customers");

  const gettingData = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useState(() => {
    gettingData();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="table">
        <h5>Account Number</h5>
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Balance</h5>
      </div>
      <br></br>
      <div className="table">
        <div>
          {users.map((user) => {
            return (
              <div>
                <strong>{user.account_num}</strong>
              </div>
            );
          })}
        </div>
        <div>
          {users.map((user) => {
            return (
              <div>
                <strong>{user.name}</strong>
              </div>
            );
          })}
        </div>
        <div>
          {users.map((user) => {
            return (
              <div>
                <strong>{user.email}</strong>
              </div>
            );
          })}
        </div>
        <div>
          {users.map((user) => {
            return (
              <div>
                <strong>{user.balance}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShowCustomers;
