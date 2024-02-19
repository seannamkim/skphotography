import styled from "styled-components";

export const NavBarWrap = styled.div`
  @keyframes slidemenu {
    from {
      height: 0;
    }
    to {
      height: 11.5rem;
    }
  }

  @keyframes slidemenumedia {
    from {
      height: 0;
    }
    to {
      height: 9.5rem;
    }
  }

  @keyframes slideitems {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  .NavBar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: rgb(222, 222, 222);
    top: 0;
    width: 100%;
    height: 5rem;
    z-index: 2;

    & > h1 {
      display: flex;
      align-items: center;
      margin: 1rem;
      letter-spacing: 0.2rem;
      white-space: nowrap;
    }

    & > .nav-links {
      display: flex;
      align-items: center;
      margin-right: 1.5rem;

      & > .dropdown-arrow-right {
        margin-right: 1.5rem;
        margin-left: -1.5rem;
        cursor: pointer;
      }

      & > .dropdown-arrow-down {
        margin-right: 1.5rem;
        margin-left: -1.5rem;
        width: 8px;
        cursor: pointer;
      }

      & > .photos-dropdown {
        position: absolute;
        top: 50px;
        right: 25px;
        background-color: rgb(200, 200, 200);
        z-index: 2;
        animation: 0.5s slidemenu;

        & > .dropdown-items {
          display: flex;
          flex-direction: column;
          animation: 1s slideitems;

          & > .dropdown-item {
            padding: 0.5rem;
            color: grey;
            text-decoration: none;

            &:hover {
              color: black;
              background-color: rgba(0, 0, 0, 0.5);
            }
          }
        }
      }

      & > .nav-link {
        text-decoration: none;
        margin-right: 1.5rem;
        color: black;
        letter-spacing: 0.2rem;
        white-space: nowrap;
      }

      & > .selected {
        text-decoration: none;
        margin-right: 1.5rem;
        color: grey;
        letter-spacing: 0.2rem;
        white-space: nowrap;

        & > .dropdown-arrow-right {
          margin-right: 1.5rem;
          margin-left: -1.5rem;
          cursor: pointer;
        }

        & > .dropdown-arrow-down {
          margin-right: 1.5rem;
          margin-left: -1.5rem;
          width: 8px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .NavBar {
      display: flex;
      justify-content: space-between;
      position: fixed;
      background-color: rgb(222, 222, 222);
      top: 0;
      width: 100%;
      height: 2.5rem;
      z-index: 2;

      & > h1 {
        display: flex;
        align-items: center;
        margin: 1rem;
        letter-spacing: 0.2rem;
        white-space: nowrap;
        font-size: 1rem;
      }

      & > .nav-links {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
        font-size: 0.7rem;

        & > .dropdown-arrow-right {
          margin-right: 0.5rem;
          margin-left: -0.5rem;
          cursor: pointer;
        }

        & > .dropdown-arrow-down {
          margin-right: 0.5rem;
          margin-left: -0.5rem;
          width: 8px;
          cursor: pointer;
        }

        & > .photos-dropdown {
          position: absolute;
          top: 30px;
          right: 10px;
          background-color: rgb(200, 200, 200);
          z-index: 2;
          animation: 0.5s slidemenumedia;

          & > .dropdown-items {
            display: flex;
            flex-direction: column;
            animation: 1s slideitems;

            & > .dropdown-item {
              padding: 0.5rem;
              color: grey;
              text-decoration: none;

              &:hover {
                color: black;
                background-color: rgba(0, 0, 0, 0.5);
              }
            }
          }
        }

        & > .nav-link {
          text-decoration: none;
          margin-right: 0.5rem;
          color: black;
          letter-spacing: 0.2rem;
          white-space: nowrap;
        }

        & > .selected {
          text-decoration: none;
          margin-right: 0.5rem;
          color: grey;
          letter-spacing: 0.2rem;
          white-space: nowrap;

          & > .dropdown-arrow-right {
            margin-right: 0.5rem;
            margin-left: -0.5rem;
            cursor: pointer;
          }

          & > .dropdown-arrow-down {
            margin-right: 0.5rem;
            margin-left: -0.5rem;
            width: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default NavBarWrap;
