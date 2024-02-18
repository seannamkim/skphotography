import styled from "styled-components";

export const AboutPageWrap = styled.div`
  .AboutPage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .main-image {
      position: relative;
      width: 100%;
      height: 100vh;
    }

    & > .about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      color: white;
      font-size: 4rem;
      font-weight: bolder;

      & > span {
        letter-spacing: 0.2rem;
      }

      & > span:nth-child(2) {
        font-size: 2rem;
        margin: 1rem auto;
      }
    }
  }
  
  @media (max-width: 414px) {
    .AboutPage {
      min-height: 100vh;
      margin-top: 5rem;

      & > .main-image {
        position: relative;
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }

      & > .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        color: white;
        font-size: 4rem;
        font-weight: bolder;

        & > span {
          letter-spacing: 0.2rem;
        }

        & > span:nth-child(2) {
          font-size: 2rem;
          margin: 1rem auto;
        }
      }
    }
  }
`;

export default AboutPageWrap;
