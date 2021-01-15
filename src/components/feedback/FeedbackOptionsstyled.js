import styled from "styled-components";

const Wrapper = styled.div`
  .feedback__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }
  .feedback__list-item:not(:last-child) {
    margin-right: 9px;
  }
  .feedback__list-btn {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.63;
    color: #212121;
    background-color: #ffdab9;
    padding: 6px 22px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  //.feedback__list-btn:focus,
  .feedback__list-btn:hover {
    color: #fff;
    background-color: #dda0dd;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Wrapper;
