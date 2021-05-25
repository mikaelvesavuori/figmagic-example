import * as React from 'react';

import FormStyled from './FormStyled';

interface FormProps {
  children: any;
  onSubmit(e: any): void;
  [propName: string]: {};
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <FormStyled onSubmit={onSubmit}>{children ? children : 'Text content inside form'}</FormStyled>
);

export default Form;
