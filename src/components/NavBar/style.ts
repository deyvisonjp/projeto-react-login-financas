import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background: rgb(9,9,58);
  background: linear-gradient(0deg, rgba(9,9,58,1) 0%, rgba(0,68,197,1) 100%);

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  Link {
    text-decoration: none;
    color: #FFF;
  }

  .nav__brand{
    text-transform: uppercase;
    color: white;
    text-shadow: 1px 2px #5296ff;
    font-weight: bold;
    font-size: 2rem !important;
  }

  .nav__menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem
  }

  .nav__toggler div {
    width: 2.5rem;
    height: 0.2rem;
    margin: 0.4rem;
    background: darkgray;
    transition: 0.4s ease-in;
  }

  .nav__toggler {
    cursor: pointer;
    display: none;
  }

  @media screen and (max-width: 768px) {
        .nav__toggler {
            display: block;
        }
        .nav__menu {
            position: fixed;
            top: 6vh;
            right: 0;
            width: 50%;
            height: 93vh;
            background: rgb(0, 25, 70);
            flex-direction: column;
            transform: translateX(100%);
            transition: 0.5s ease-in;
        }
    }

    /* NAV ACTOVE CLASS */
    .nav__active {
        transform: translateX(0);
    }

    /* NAV ACTOVE CLASS */
    .toggle .line1 {
        transform: rotate(-45deg) translate(-4px, 5px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-4px, -5px);
    }

`;

