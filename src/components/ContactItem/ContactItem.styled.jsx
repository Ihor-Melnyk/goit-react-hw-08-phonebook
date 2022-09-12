import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Name = styled.p`
  margin: 0;
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonEdit = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ButtonDelete = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const DeleteContent = styled.div`
  width: 18px;
  height: 3px;
  background-color: white;
`;
