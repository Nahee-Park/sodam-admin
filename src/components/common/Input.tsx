import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  valid?: boolean;
  [key: string]: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, valid = true, onChange, ...props }: InputProps, ref) => {
    return (
      <>
        <Styled.Input
          className={className}
          valid={valid}
          onChange={onChange}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);

export default Input;

const Styled = {
  Input: styled.input<InputProps>`
    display: block;
    background: transparent;
    outline: 0;
    border-radius: 8px;
    width: 100%;
    border: 1px solid #d1d1d1;
    padding: 8px 10px;
    color: #363636;
    /* &:focus {
      color: white;
      border-bottom: ${({ valid }) => (valid ? '1px solid #FFFFFF' : '1px solid #ffc5c5')};
    } */
    &::placeholder {
      color: #565656;
    }
  `,
};
