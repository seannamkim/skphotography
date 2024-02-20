import styled from "styled-components";

export const UploadPageWrap = styled.div`
  .UploadPage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .header {
      & > .main-image {
        position: relative;
        width: 100%;
        height: 100vh;
      }
    }

    & > .upload-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      color: white;
      font-size: 4rem;
      font-weight: bolder;

      & > .file-input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & > .uploaded-image {
        margin: 2rem;
        max-width: 100%;
        max-height: min-content;
        object-fit: cover;
      }

      & > .upload-button {
        appearance: button;
        backface-visibility: hidden;
        background-color: rgb(148, 83, 42);
        border-radius: 6px;
        border-width: 0;
        box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
          rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        height: 2rem;
        width: 5rem;
        margin: 1rem;
        outline: none;
        position: relative;
        text-align: center;
        text-transform: none;
        transition: all 0.2s, box-shadow 0.08s ease-in;
        user-select: none;
        touch-action: manipulation;
        font-weight: bold;
        font-size: 1rem;

        &:hover {
          background-color: rgb(122, 162, 201);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .UploadPage {
      min-height: 100vh;
      margin-top: 0rem;
    }
  }
`;

export default UploadPageWrap;
