import styled from "styled-components";
import { useState } from "react";

import motion from "framer-motion";

function MainSection({ data }) {
  const [selected, setSelected] = useState(data[0]);
  function clickerDiscover(e) {
    const deteeer = data.filter((item) => item.dataIndex === e.target.id);
    setSelected(deteeer[0]);
  }
  console.log(data);
  return (
    <>
      <Container Selectors={selected.dataIndex}>
        <div className="left-section">
          <div className="pints">
            <div
              onClick={clickerDiscover}
              id="first-item"
              className="pint-itself"
            ></div>
            <div
              onClick={clickerDiscover}
              id="second-item"
              className="pint-itself"
            ></div>
            <div
              onClick={clickerDiscover}
              id="third-item"
              className="pint-itself"
            ></div>
          </div>
        </div>
        <div className="mid-section">
          <div className="upper">
            <h5>
              20 January 2020 <span style={{ color: "red" }}>•</span> Blog
            </h5>
            <h1>{selected.tittle}</h1>
            <img src={selected.Url} alt="" />
          </div>
          <div className="lower">
            <h2>Facebook</h2>
            <h2>Twitter</h2>
            <h2>Instagram</h2>
          </div>
        </div>
        <div className="right-section">
          <div className="details">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <div className="parg">
              <h3>Air drone</h3>
              <p>
                It is a hard thing to love a good man. A good man is not a nice
                man – he does not do things to be nice, he does things because
                he has a moral code, a set of values he prioritizes and will
                always do his best to make sure that his actions are in line
                with his own personal standards.
              </p>
            </div>
            <div className="parg">
              <h3>Knowledge</h3>
              <p>
                It is a hard thing to love a good man. A good man is not a nice
                man – he does not do things to be nice, he does things because
                he has a moral code, a set of values he prioritizes and will
                always do his best to make sure that his actions are in line
                with his own personal standards.
              </p>
            </div>
          </div>
          <div className="inqure">
            <h4>Click here for any Inquers</h4>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 90vh;
  @media (max-width: 1366px) {
    min-height: 80vh;
  }
  width: 80%;
  margin: auto;
  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 10vw;
    .pints {
      display: flex;
      flex-direction: column;
      #first-item {
        background-color: ${(props) => {
          if (props.Selectors === "first-item") {
            return "black";
          } else {
            return "#e0e0e0";
          }
        }}
      }
      #second-item {
        background-color: ${(props) => {
          if (props.Selectors === "second-item") {
            return "black";
          } else {
            return "#e0e0e0";
          }
        }}
      }
      #third-item {
        background-color: ${(props) => {
          if (props.Selectors === "third-item") {
            return "black";
          } else {
            return "#e0e0e0";
          }
        }}
      }

      .pint-itself {
        width: 10px;
        height: 10px;
        cursor: pointer;
        background-color: #e0e0e0;
        border-radius: 50%;
        margin: 1rem 0;
        
        }
      }
    }
  }
  .mid-section {
    display: flex;
    flex-basis: 50vw;
    flex-direction: column;
    justify-content: space-around;
    padding: 3rem 5rem;
    @media (max-width: 1366px) {
      padding: 2rem 4rem;
    }

    .upper {
      display: flex;
      min-height: 80%;
      flex-direction: column;
      justify-content: space-around;

      h1 {
        font-size: 4rem;
        @media (max-width: 1366px) {
          font-size: 2.5rem;
        }
      }
      h5 {
        color: #9e9e9e;
      }
      img {
        width: 80%;
        height: 12rem;
        object-fit: cover;
        @media (max-width: 1366px) {
          width: 80%;
          height: 9rem;
        }
      }
    }
    .lower {
      display: flex;
      h2 {
        padding: 1rem;
        font-size: 1rem;
        @media (max-width: 1366px) {
          font-size: 0.9rem;
        }
      }
    }
  }
  .right-section {
    flex-basis: 30vw;
    border-left: 0.1rem solid #dddddd;
    padding: 4rem 6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 1366px) {
      padding: 2rem 4rem;
    }
    .details {
      display: flex;
      flex-basis: 60vh;
      flex-direction: column;
      justify-content: space-evenly;
      .parg {
        h3 {
          padding: 1rem 0;
        }
      }
      p {
        color: #9e9e9e;
        line-height: 1.5;
        @media (max-width: 1366px) {
          font-size: 0.7rem;
        }
      }
      img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        border-radius: 50%;
        @media (max-width: 1366px) {
          width: 3rem;
          height: 3rem;
        }
      }
    }
    .inqure {
      padding-top: 2rem;
      @media (max-width: 1366px) {
        font-size: 0.9rem;
      }
    }
`;

export default MainSection;
