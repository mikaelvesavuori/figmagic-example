import React from 'react';

import DemoFormStyled from './DemoFormStyled';

import Button from '../../elements/Button/Button';
import Checkbox from '../../elements/Checkbox/Checkbox';
import Form from '../../elements/Form/Form';
import H1 from '../../elements/H1/H1';
import H2 from '../../elements/H2/H2';
import H3 from '../../elements/H3/H3';
import Hr from '../../elements/Hr/Hr';
import Input from '../../elements/Input/Input';
import Microcopy from '../../elements/Microcopy/Microcopy';
import Paragraph from '../../elements/Paragraph/Paragraph';
import Select from '../../elements/Select/Select';
import Slider from '../../elements/Slider/Slider';

interface FormProps {
  fill(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void;
  check(): void;
  value: any;
  filled: boolean;
  checked: boolean;
  submit(e: React.FormEvent<HTMLFormElement>): void;
}

const DemoForm: React.FC<FormProps> = ({ fill, check, filled, checked, submit, value }) => {
  return (
    <DemoFormStyled>
      <Form onSubmit={(e: any) => submit(e)}>
        <H1>Figmagic demo</H1>
        <Paragraph>
          This demo uses Figmagic with design tokens, and elements that are output into React and
          Styled Components.
        </Paragraph>
        <Paragraph>
          As a front end developer using Figmagic, your work should ideally focus on composing any
          larger compositions and handling any state that the application needs. For this form
          example, that's precisely the additional work that was needed to tie the
          Figmagic-generated elements into this small app. Figmagic should be able to handle most of
          the boilerplate and detail setup, sparing you from the most boring work.
        </Paragraph>
        <Paragraph>
          <strong>Pro tip</strong>: Make changes in your Figmagic template document (in Figma, that
          is!). Open a separate terminal and run Figmagic while you are still running this demo web
          server. The web server should reload automatically when it detects that it has new files.
          SUPER-HOT!
        </Paragraph>
        <Input value={value} onChange={(e: any) => fill(e)} />
        <H2>How cool is Figmagic?</H2>
        <Select>
          <option>Cooler than Keanu Reeves in John Wick</option>
          <option>Cooler than Nicolas Cage and his llamas in The Color Out of Space</option>
          <option>Cooler than that badass nitrogen in Terminator 2</option>
          <option>Cooler than the boss penguin in Madagascar</option>
        </Select>
        <H3>More specifically, on a sliding scale?</H3>
        <Slider />
        <Paragraph>
          Questions? Go to{' '}
          <a href="https://github.com/mikaelvesavuori/figmagic">
            https://github.com/mikaelvesavuori/figmagic
          </a>
          . Pull requests, ideas and discussion is appreciated!
        </Paragraph>
        <Hr />
        <Microcopy>
          Some tiny legalese text here, perhaps something about making a deal with the devil or
          Bezos or Zuckerberg...
        </Microcopy>
        <Checkbox required disabled={!filled} onChange={() => check()} />
        <Button disabled={!checked}>Submit</Button>
      </Form>
    </DemoFormStyled>
  );
};

export default DemoForm;
