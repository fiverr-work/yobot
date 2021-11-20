import styled from "styled-components";

const OpenBids = () => {
  const data = [
    {
      date: "04 / 04 / 2021",
      quantity: 2,
      total: 0.5,
    },
  ];
  return (
    <OpenBidsStyle>
      <h6>Open Bids</h6>
      <div className="row header">
        <span>Date</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>
      {data.map((item, index) => (
        <div className="row" key={index}>
          <span>{item.date}</span>
          <span>{item.quantity}</span>
          <span>{item.total} ETH</span>
          <span>
            <button>Cancel</button>
          </span>
        </div>
      ))}
    </OpenBidsStyle>
  );
};

export default OpenBids;

const OpenBidsStyle = styled.section`
  background: #191b1f;
  border-radius: 24px;
  padding: 12px 8px;
  width: clamp(480px, 80vw, 900px);
  margin: 0 auto;
  h6 {
    margin-left: 18px;
    margin-bottom: 13px;
  }
  .row {
    background: #212429;
    border: 1px solid #2c2f36;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 10px 22px;
    margin-bottom: 10px;
    &.header {
      background: none;
      border: none;
      margin-bottom: 0;
    }
    span {
      :nth-child(1) {
        flex: 40%;
      }
      :nth-child(2) {
        flex: 20%;
        text-align: center;
      }
      :nth-child(3) {
        flex: 20%;
        text-align: right;
      }
      :nth-child(4) {
        flex: 20%;
        text-align: right;
        button {
          all: unset;
          font-weight: 500;
          font-size: 14px;
          color: #12eb0e;
          cursor: pointer;
          :hover {
            color: #3cfd38;
          }
        }
      }
    }
  }
  table {
    width: 100%;
    tbody tr {
      background-color: #212429;
      border: 1px solid #2c2f36;
      td {
        padding: 10px;
      }
      td:first-child {
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
      }
      td:last-child {
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
      }
    }
  }
`;
