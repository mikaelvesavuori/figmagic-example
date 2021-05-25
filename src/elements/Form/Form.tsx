import * as React from 'react';

import FormStyled from './FormStyled';

interface FormProps {
  children: any;
  [propName: string]: {};
}

const Form: React.FC<FormProps> = ({ children }) => (
  <FormStyled>{children ? children : "Text content inside form. This allows us to specify basic font styling but also infer the padding from the spacing between text and layout/rectangle element."}</FormStyled>
);

export default Form;