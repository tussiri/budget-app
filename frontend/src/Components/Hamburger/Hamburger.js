import { GiHamburgerMenu } from "react-icons/gi";
import { styled } from "styled-components";
import useState from "react";

// Hamburger styled component
const Hamburger = styled(GiHamburgerMenu)`
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
