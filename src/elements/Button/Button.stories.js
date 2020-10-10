import React from 'react';
import Button from './Button';

import notes from './Button.description.md';

export default { title: 'Button', parameters: { notes } };

export const ButtonRegular = () => <Button>Button text</Button>;