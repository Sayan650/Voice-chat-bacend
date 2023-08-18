import React from "react";
import styles from "./RoomsCard.module.css";
import { useHistory } from "react-router-dom";

const RoomsCard = ({ room }) => {
  const history = useHistory()
  return (
    <div
      onClick={() => {
        if(room.type === "voice")
          history.push(`/room/${room.id}`);
        else
          history.push(`videoRoom/${room.id}`);
      }}
      className={styles.card}
    >
      <h3 className={styles.topic}>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singleSpeaker : ""
        }`}
      >
        <div className={styles.avatars}>
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src="/images/man-avatar.avif" alt="speaker-avatar" />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.nameWrapper}>
              <span>{speaker.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img className={styles.avatar} src="/images/user.png" alt="user-icon" />
      </div>
    </div>
  );
};

export default RoomsCard;
