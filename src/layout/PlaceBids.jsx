import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowTop } from "../img/arrowTop.svg";
import { ReactComponent as ArrowBottom } from "../img/arrowBottom.svg";
import { ReactComponent as ExitIcon } from "../img/exit.svg";

import img from "../img/nfts/1.png";

const PlaceBids = () => {
  const [value, setValue] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <PlaceBidsStyle>
      <form onSubmit={handleSubmit}>
        <h6>Place Bid</h6>
        <div>
          <label htmlFor="">Price per NFT (ETH)</label>
          <span>Include gas fees in your bid price. Higher bids will be filled first.</span>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Quantity</label>
          <Increment value={value} setValue={setValue} />
        </div>
        <button type="submit">Enter a Price and Quantity</button>
      </form>
      <Details />
    </PlaceBidsStyle>
  );
};
export default PlaceBids;

const PlaceBidsStyle = styled.section`
  margin-bottom: clamp(20px, 8vw, 40px);
  display: flex;
  width: clamp(480px, 80vw, 900px);
  margin-left: auto;
  margin-right: auto;
  form {
    background: #191b1f;
    border-radius: 24px;
    padding: 24px 24px;
    z-index: 1;
    flex: 60%;
    display: flex;
    flex-direction: column;

    h6 {
      margin-bottom: 40px;
      margin-left: 10px;
    }
    span {
      color: #95969a;
      font-size: 14px;
      line-height: 15px;
      display: block;
      margin-left: 10px;
    }
    label {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      display: block;
      margin-left: 10px;
    }
    > button {
      display: block;
      background: #2c2f36;
      border-radius: 16px;
      padding-top: 14px;
      padding-bottom: 14px;
      margin-top: auto;
      :hover {
        background: #2875e2;
      }
    }
  }
  input {
    background: #212429;
    border: 1px solid #2c2f36;
    display: block;
    border-radius: 16px;
    margin-top: 12px;
    margin-bottom: 24px;
    padding: 15px 24px;
    font-size: 20px;
    width: 100%;
    outline: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

const Increment = ({ value, setValue }) => {
  function min() {
    if (value > 0) setValue(value - 1);
  }
  return (
    <IncrementStyle>
      <input type="number" min="0" value={value} />
      <div>
        <button onClick={() => setValue(value + 1)}>
          <ArrowTop />
        </button>
        <button onClick={min}>
          <ArrowBottom />
        </button>
      </div>
    </IncrementStyle>
  );
};
const IncrementStyle = styled.div`
  position: relative;
  > div {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0px 16px 16px 0px;
    button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      line-height: 1;
      border-radius: 0;
      background-color: transparent;
      border: 1px solid #2c2f36;
      :hover {
        background-color: #2875e2;
      }
    }
  }
`;
const Details = () => {
  return (
    <DetailsStyle>
      <header>
        <img src={img} alt="" />
        <span>Untitled NFT</span>
      </header>
      <h6>Minting begins in</h6>
      <Counter>
        <div>
          <span>4</span>
          <span>days</span>
        </div>
        <div>
          <span>12</span>
          <span>hours</span>
        </div>
        <div>
          <span>46</span>
          <span>minutes</span>
        </div>
      </Counter>
      <footer>
        <h6>Yobot Stats</h6>
        <div>
          <span>Highest Bid</span>
          <ExitIcon />
        </div>
        <b>0.0243 ETH</b>
        <div>
          <span># of Bids Made</span>
          <ExitIcon />
        </div>
        <b>145</b>
      </footer>
    </DetailsStyle>
  );
};
const DetailsStyle = styled.div`
  flex: 40%;
  background: #2c2f36;
  border-radius: 0px 27px 36px 0px;
  padding: 26px;
  padding-left: 44px;
  position: relative;
  right: 17px;

  header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
    img {
      border-radius: 5px;
      overflow: hidden;
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin-right: 14px;
      box-shadow: 0 0 7px 0px #d42bd2;
    }
    span {
      font-size: 16px;
      line-height: 28px;
      color: #848b9a;
    }
  }
  h6 {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 12px;
    font-family: "Roboto Medium";
  }
  footer {
    color: #848b9a;
    h6 {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 19px;
    }
    > div {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        line-height: 14px;
      }
      svg {
        margin-left: 10px;
      }
    }
    b {
      display: block;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      font-family: "Roboto Medium";
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 768px) {
    right: 0;
    bottom: 40px;
    border-radius: 0px 0px 27px 27px;
    padding: 24px;
    padding-left: 24px;
    padding-top: 70px;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #848b9a;
  > div {
    display: flex;
    flex-direction: column;
    span {
      :first-child {
        font-weight: 500;
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 8px;
      }
      :last-child {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-decoration: capitalize;
        color: #848b9a;
      }
    }
  }
`;
