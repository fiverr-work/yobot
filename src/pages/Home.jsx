import Navbar from "../layout/Navbar";
import styled from "styled-components";
import { ReactComponent as Headline } from "../img/headline.svg";
import BG from "../img/bg.png";
const Home = () => {
  const walletData = {
    address: "0x71dwd1XXXXXXXXXXXXXXXXcTwU",
    balance: 0.4,
    state: "green",
  };
  return (
    <>
      <Navbar walletData={walletData} />
      <Section className="container">
        <div className="hero">
          <Headline />
          <p>
            Leverage the power of Ethereum flashbots to mint before the rush, and get the NFTs you
            want.
          </p>
          <div className="bg"></div>
        </div>
        <div className="join">
          <p>
            We build tools to help NFT collectors. Join the Discord to know when we launch tools,
            and tell us what tools you want us to build.
          </p>
          <a href="https://www.discord.com" className="btn">
            Join Discord
          </a>
        </div>
      </Section>
    </>
  );
};

export default Home;

const Section = styled.section`
  .hero {
    position: relative;
    margin-top: 10vw;
    > svg {
      margin-bottom: 36px;
      max-width: 100%;
    }
    p {
      width: 60vw;
      line-height: 32.5px;
    }
    .bg {
      width: 485.55px;
      height: 459.77px;
      background-image: url(${BG});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }
    @media (max-width: 768px) {
      > svg {
        margin-bottom: 24px;
        height: auto;
      }
      p {
        width: 100%;
      }
      .bg {
        transform: scale(0.5);
        top: -10vw;
        right: -40vw;
      }
    }
  }
  .join {
    background: #191b1f;
    border: 1px solid #2c2f36;
    border-radius: 8px;
    padding: 24px 50px;
    margin: 12vw auto 0;
    text-align: center;
    max-width: 674px;
    p {
      margin-bottom: 16px;
      font-size: 1.125rem;
      line-height: 32px;
    }
  }
`;
