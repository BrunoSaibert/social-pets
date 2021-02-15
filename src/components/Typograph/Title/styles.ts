import styled, { css } from "styled-components";

export const Container = styled.h1<{ sub: boolean }>`
  font-family: ${({ theme }) => theme.font.second};
  line-height: 1;
  ${(props) =>
    props.sub
      ? css`
          font-size: 2rem;

          &::after {
            content: "";
            display: block;
            width: 3rem;
            height: 0.5rem;
            background: #ddd;
            border-radius: 0.2rem;
          }
        `
      : css`
          font-size: 3rem;
          margin: 1rem 0;
          position: relative;
          z-index: 1;

          &::after {
            content: "";
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            background: ${({ theme }) => theme.color.primary};
            position: absolute;
            bottom: 5px;
            left: -5px;
            border-radius: 0.2rem;
            z-index: -1;
          }
        `}
`;
