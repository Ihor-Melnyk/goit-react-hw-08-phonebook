import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const ContainerView = styled(Container)`
  max-width: 500px;
  padding: 0 15px;
`;

export const ButtonAdd = styled.button`
  width: 60px;
  height: 60px;
  margin: 15px 0 5px;
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font: inherit;
  background-color: #4caf50;
  cursor: pointer;
  font-size: 50px;
  padding-bottom: 10px;
  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);
  -webkit-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);
  -moz-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);
  transition: transform 300ms;
  &:hover,
  :focus {
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
    transition: transform 300ms;
  }
`;
