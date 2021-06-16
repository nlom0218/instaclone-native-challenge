import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: rgba(225, 225, 225, 0.15);
  padding: 15px 8px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${props => props.lastOne ? "15px" : "8px"};
`