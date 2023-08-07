import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const history = useHistory();
  function startRegister() {
    history.push("/authenticate");
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Welcome to MERN Chat</h1>
        <p className={styles.p}>Here you can hangout with <br /> your friends by text, voice and <br /> also video chat in real time</p>
        <div className={styles.Button}>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
      </div>
      <div className={styles.img}>
        <img src="/images/hero.png" alt="Picture" />
      </div>
    </div>
  );
};

export default Home;
