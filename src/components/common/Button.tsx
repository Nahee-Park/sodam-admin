import React, { ReactElement } from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
  width?: string;
  height?: string;
}
interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, ButtonStyleProps {
  className?: string;
  children: string | ReactElement;
  [key: string]: any;
}
function Button({ children, width = '100px', height = '30px' }: ButtonProps) {
  return (
    <Styled.Button width={width} height={height}>
      {children}
    </Styled.Button>
  );
}

export default Button;

const Styled = {
  Button: styled.button<ButtonStyleProps>`
    border-radius: 8px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #abacfe;
    color: white;
    border: none;
    cursor: pointer;
  `,
};
