import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background-color: black;
`;

const Paragraph = styled.p`
  border: 2px solid black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 25px;
  color: white;
  font-size: 1.8rem;
  font-family: NotoSerifJP-Medium;
`;

const H2 = styled.h2`
  color: red;
  font-family: LuckiestGuy-Regular;
  font-size: 3rem;
  margin: 50px 0px 50px 0px;
`;

export default function Photo(props) {
  return (
    <Div className="Photo" key={props.image.date}>
      <H2>{props.image.title}</H2>
      <img className="imgPhoto" src={props.image.url} alt={props.image.title} />
      <Paragraph>{props.image.explanation}</Paragraph>
    </Div>
  );
}
