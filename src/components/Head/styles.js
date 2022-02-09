import styled from "styled-components";

export const Head = styled.header`
  background: #2D0C5E;
  height: 449px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align_items};
  justify-content:${props => props.justify_content};
  `