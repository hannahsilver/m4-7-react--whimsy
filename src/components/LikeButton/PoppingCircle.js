import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, height: size, background: color }}></Wrapper>
  );
};

const fade = keyframes`
0% {
opacity: 0;
}
50% {
opacity: 0.2;
}
100% {
  opacity: 0
}
`;

const scale = keyframes`
0% {
  transform: scale(0);
} 100% {
  transform: scale(1);
}
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${fade} 300ms forwards, ${scale} 300ms forwards;
`;

export default PoppingCircle;
