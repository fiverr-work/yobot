import styled from "styled-components";
import { toast } from "react-toastify";
const Wallet = ({ balance, address, state }) => {
  function handleCopy() {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard");
  }
  return (
    <Style className="wallet">
      <span>{balance} ETH</span>
      <div>
        <span onClick={handleCopy}>
          {address.substr(0, 8)}...{address.substr(address.length - 4)}
        </span>
        <span state={state}></span>
      </div>
    </Style>
  );
};

export default Wallet;
const Style = styled.div`
  background-color: #212429;
  border-radius: 12px;
  padding-left: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    cursor: pointer;
    padding: 14px;
    background-color: #191b1f;
    border-radius: 12px;
    margin-left: 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      :last-child {
        background: #00f70a;
        width: 17px;
        height: 17px;
        border-radius: 50px;
        margin-left: 10px;
      }
    }
  }
`;
