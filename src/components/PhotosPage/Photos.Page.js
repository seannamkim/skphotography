import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  @keyframes openphoto {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    20% {
      opacity: 0.2;
    }
    30% {
      opacity: 0.3;
    }
    40% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.5;
    }
    60% {
      opacity: 0.6;
    }
    70% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }

  .PhotosPage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .all-photos {
      display: flex;
      justify-content: space-between;
      margin: 6rem 0;
      flex-wrap: wrap;

      & > .photos-column {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        overflow: auto;

        & > .location-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
          cursor: pointer;
          transition: 350ms ease-in-out;

          & > h2 {
            position: absolute;
            color: white;
            animation: 500ms openphoto;
            z-index: 1;
            font-size: 2rem;
            letter-spacing: 0.2rem;
          }

          & > .photo {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
            z-index: 0;
            animation: 500ms openphoto;
          }

          &:hover {
            text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
            transition: 350ms ease-in-out;
          }
        }
      }
    }
  }
`;

export default PhotosPageWrap;
