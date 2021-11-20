import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Wallet from "../components/Wallet";

import { ReactComponent as Logo } from "../img/logo/brand.svg";
import { ReactComponent as Discord } from "../img/media/discord.svg";
import { ReactComponent as Twitter } from "../img/media/twitter.svg";
const Navbar = ({ walletData }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <NavbarStyle className={scroll ? "scroll" : ""}>
      <div className="container">
        <Link to="/">
          <Logo className="brand" />
        </Link>
        <div className="nav">
          <Link to="/faq">FAQ</Link>
          <a href="https://www.discord.com">
            <Discord />
          </a>
          <a href="https://www.twitter.com">
            <Twitter />
          </a>
        </div>
        {walletData && (
          <Wallet
            balance={walletData.balance}
            address={walletData.address}
            state={walletData.state}
          />
        )}
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0.875rem;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem 0;
  transition: top 200ms, background-color 200ms;

  .brand {
    transition: width 200ms;
  }
  // on Scrole
  &.scroll {
    background-color: #212429;
    top: 0;
    transition: top 200ms, background-color 200ms;

    .brand {
      width: 100px;
      transition: width 200ms;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg:not(.brand) {
      cursor: pointer;
      min-height: 23px;
      max-height: 23px;
      min-width: 26px;
      max-width: 26px;
    }
    .nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > * {
        margin-right: 1.5rem;
      }
    }
    a {
      color: #c8cacf;
      font-weight: bold;
      font-family: "Roboto Bold";
      font-size: 1rem;
      :hover {
        color: #2875e2;
        * {
          fill: #2875e2;
        }
      }
    }
    @media (max-width: 768px) {
      justify-content: space-between;
      .brand {
        width: 100px;
      }
      .wallet {
        display: none;
      }
    }
  }
`;
