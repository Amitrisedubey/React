import styled from "styled-components";
export const Button = styled.button`
  color: ${(props) => (props.theme === "light" ? "#feece9" : "#fe7e6d")};
  background-color: ${(props) =>
    props.theme === "light" ? "#fe7e6d" : "#feece9"};
  border: none;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    /* box-shadow: 1px 3px 3px #fe7e6d; */
  }
`;
//light : #feece9  dark: #fe7e6d
export const Div = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: ${(props) =>
    props.theme === "light" ? "#ffffff" : "#0c0201"};
  justify-content: center;
  color: ${(props) => (props.theme === "light" ? "#ffffff" : "#0c0201")};
  margin: auto;
  margin-top: 20px;
  border: 1px solid black;
  & > p {
    color: ${(props) => (props.theme === "light" ? "#0c0201" : "#ffffff")};
  }
  /* & > p:hover {
    color: white;
  } */
`;
