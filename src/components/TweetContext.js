import React from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

const date = moment().format("h:mm A - MMMM Do YYYY");

const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  function handleToggleLike() {
    if (isLiked === true) {
      setNumOfLikes(numOfLikes - 1);
      setIsLiked(false);
    } else {
      setNumOfLikes(numOfLikes + 1);
      setIsLiked(true);
    }
  }

  function handleToggleRetweet() {
    if (isRetweeted === true) {
      setNumOfRetweets(numOfRetweets - 1);
      setIsRetweeted(false);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
      setIsRetweeted(true);
    }
  }

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
