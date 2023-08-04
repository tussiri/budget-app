import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.jpg";
import { menuItems } from "../../utils/menuItems";
import { logout } from "../../utils/Icons.js";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      <NavStyled isOpen={isOpen}>
        <div className="user-container">
          <img src={avatar} alt="" />
          <div className="text">
            <h2>Thom</h2>
            <p>Your Budget</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? "active" : ""}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="bottom-nav">{logout}Sign Out</div>
      </NavStyled>
    </>
  );
}

const Hamburger = styled(GiHamburgerMenu)`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  position: absolute; // Add this
  top: 10px; // Add this or adjust to your needs
  right: 10px; // Add this or adjust to your needs
  z-index: 1000; // Add this

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    position: ${(props) => (props.isOpen ? "fixed" : "fixed")};
    top: 0;
    left: 0;
    height: auto;
    width: auto;
    ${"" /* height: ${(props) => (props.isOpen ? "100vh" : "auto")}; */}
    visibility: ${(props) => (props.isOpen ? "flex" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    z-index: 999;
  }

  .user-container {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid ##FFFFF;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      boarder-radius: 0, 10px 10px 0;
    }
  }
`;

export default Navigation;
