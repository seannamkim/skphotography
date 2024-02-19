import styled from "styled-components";

export const PhotoModalWrap = styled.div`
  .PhotoModal {
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;

    & > .photo-modal {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;

      & > .photo-pop {
        margin: 1rem;
        height: 100%;
        object-fit: contain;
      }

      & > .close-modal {
        position: absolute;
        display: flex;
        margin: 0.5rem 0.5rem 0 0;
        justify-content: flex-end;
        color: red;
        font-size: 1.2rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        & > .close-icon {
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .PhotoModal {
      position: fixed;
      background: rgba(0, 0, 0, 0.9);
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 2;

      & > .photo-modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        margin: 0 auto;

        & > .photo-pop {
          width: inherit;
          margin: 1rem;
          object-fit: contain;
        }

        & > .close-modal {
          position: absolute;
          display: flex;
          margin: 0.5rem 0.5rem 0 0;
          justify-content: flex-end;
          color: red;
          font-size: 1.2rem;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;

          & > .close-icon {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default PhotoModalWrap;
