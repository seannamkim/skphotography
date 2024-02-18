import styled from "styled-components";

export const PhotosSecondaryPageWrap = styled.div`
  .PhotosSecondaryPage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .location-title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      letter-spacing: 0.2rem;
      padding-top: 1rem;
    }

    & > .all-photos-secondary {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;

      & > .photo-secondary {
        margin: 2rem;
        max-width: 20%;
        height: min-content;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 768px) {
    .PhotosSecondaryPage {
      min-height: 100vh;
      margin-top: 5rem;

      & > .location-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        letter-spacing: 0.2rem;
        padding-top: 1rem;
      }

      & > .all-photos-secondary {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;

        & > .photo-secondary {
          margin: 2rem;
          max-width: 80%;
          height: min-content;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
  }
`;

export default PhotosSecondaryPageWrap;
