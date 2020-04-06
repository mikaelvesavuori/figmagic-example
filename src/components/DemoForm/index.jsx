import React from "react";
import PropTypes from "prop-types";

import DemoFormStyled from "./DemoFormStyled";

import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import Form from "elements/Form/Form";
import H1 from "elements/H1/H1";
import H2 from "elements/H2/H2";
import H3 from "elements/H3/H3";
import H4 from "elements/H4/H4";
import H5 from "elements/H5/H5";
import H6 from "elements/H6/H6";
import Hr from "elements/Hr/Hr";
import Input from "elements/Input/Input";
import Microcopy from "elements/Microcopy/Microcopy";
import Paragraph from "elements/Paragraph/Paragraph";
import Select from "elements/Select/Select";
import Slider from "elements/Slider/Slider";

const DemoForm = (props) => (
	<DemoFormStyled>
		<Form>
			<H1>Figmagic demo</H1>
			<Paragraph>
				This demo uses Figmagic with design tokens, and elements that are output
				into React and Styled Components.
			</Paragraph>
			<Paragraph>
				There has been a tiny amount of manual work to tie it all together, but
				most of this works from out of the box!
			</Paragraph>
			<Paragraph>
				Pro tip: Make changes in your Figmagic template document (in Figma, that
				is!). Open a separate terminal and run Figmagic while you are still
				running this demo web server. The web server should reload automatically
				when it detects that it has new files. SUPER-HOT!
			</Paragraph>
			<Input required onChange={(e) => props.fill(e)} />
			<H2>How awesome is Figmagic?</H2>
			<Select>
				<option>Cooler than Keanu Reeves in John Wick</option>
				<option>
					Cooler than Nicolas Cage and his llamas in The Color Out of Space
				</option>
				<option>Cooler than that badass nitrogen in Terminator 2</option>
				<option>Cooler than the boss penguin in Madagascar</option>
			</Select>
			<H3>More specifically, on a scale?</H3>
			<Slider />
			<Paragraph>
				Questions? Go to WWWWWWW. Pull requests, ideas and discussion is
				appreciated!
			</Paragraph>
			<Hr />
			<Microcopy>
				Some tiny legalese text here, perhaps something about making a deal with
				the devil or Bezos or Zuckerberg
			</Microcopy>
			<Checkbox required disabled={!props.filled} onChange={props.check} />
			<Button disabled={!props.checked} onClick={props.submit}>
				Submit
			</Button>
		</Form>
	</DemoFormStyled>
);

DemoForm.propTypes = {
	fill: PropTypes.func,
	check: PropTypes.func,
	filled: PropTypes.bool,
	checked: PropTypes.bool,
	submit: PropTypes.func,
};

export default DemoForm;
