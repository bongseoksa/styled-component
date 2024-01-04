import styled, { css } from "styled-components";
import { TitleType } from "./adaptedPropsType";

const Wrapper = styled.section`
  padding: 4em;
  background: blue;
`;

const Title = styled.h1<TitleType>`
  ${({ color }) => {
    return css`
      color: ${color ? color : "orange"};
    `;
  }}
`;

export { Wrapper, Title };
