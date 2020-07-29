import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

const date = moment().format("h:mm A - MMMM Do YYYY");

const TweetProvider = ({ children }) => {
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        date,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
