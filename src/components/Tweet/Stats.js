import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Stats = () => {
  const {
    numOfRetweets,
    setNumOfRetweets,
    numOfLikes,
    setNumOfLikes,
  } = useContext(TweetContext);
  return (
    <Wrapper>
      <StatSpan>
        <Bold>{numOfRetweets} </Bold> Retweets
      </StatSpan>
      <StatSpan>
        <Bold>{numOfLikes} </Bold>
        Likes
      </StatSpan>
    </Wrapper>
  );
};

const StatSpan = styled.span`
  margin-right: 20px;
`;

const Bold = styled.span`
  font-weight: bold;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: rgb(101, 119, 134);
  margin-right: 20px;
`;

export default Stats;
