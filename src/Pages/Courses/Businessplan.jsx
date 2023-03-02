import React from "react";
import styled from "styled-components";

function Businessplan() {
  return (
    <Container>
      <div className="first-part">
        <h1>Business plan</h1>
        <div className="main-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xY7vU_ybbPk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="second-part">
        <div className="add">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/n6ecdYd8T6o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="add">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mSMtJMLpBZc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="add">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0h-HTUSZyKo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

export default Businessplan;

const Container = styled.div`
  padding: 0.5cm;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .first-part {
    display: flex;
    flex-direction: column;
    width: 70%;
    h1 {
      margin-bottom: 0.5cm;
    }
    .main-video {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 0.5cm;
      }
    }
  }
  .second-part {
    width: 28%;
    border-radius: 0.5cm;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.3cm;
    max-height: 89vh;
    overflow-y: hidden;
    overflow-y: scroll;
    .add {
      width: 90%;
      height: 4cm;
      margin-bottom: 0.25cm;
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 0.2cm;
      }
    }
  }
`;
