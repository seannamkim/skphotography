import styled from "styled-components";

export const HomePageWrap = styled.div`
  .HomePage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .photo-link {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      color: white;
      font-size: 4rem;
      font-weight: bolder;
      transition: 350ms ease-in-out;
      letter-spacing: 0.2rem;

      &:hover {
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
        transition: 350ms ease-in-out;
      }
    }

    & > .header {
      & > .main-image {
        position: relative;
        width: 100%;
        height: 100vh;
      }
    }

    & > .home {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem 1rem;
      color: black;
      padding: 1rem;
    }
  }

  @media only screen and (width: 393px) and (height: 852px) and (-webkit-device-pixel-ratio: 3) {
    .HomePage {
      min-height: 100vh;
      margin-top: 5rem;

      & > .photo-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        color: white;
        font-size: 3rem;
        font-weight: bolder;
        transition: 350ms ease-in-out;
        letter-spacing: 0.2rem;

        &:hover {
          text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
          transition: 350ms ease-in-out;
        }
      }

      & > .header {
        & > .main-image {
          position: relative;
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
      }

      & > .home {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0rem 1rem;
        color: black;
        padding: 1rem;
      }
    }
  }
`;

export default HomePageWrap;
