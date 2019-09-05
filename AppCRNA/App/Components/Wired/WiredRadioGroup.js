import React from 'react';
import { WiredRadioGroup } from '@bit/wiredjs.wired-elements.wired-radio-group';

export default function ({}, selected) {
	return (
	<>
		<WiredRadioGroup>
			{children}
		</WiredRadioGroup>
	</>
	);
}

// <wired-radio-group selected="two">
// 	<wired-radio name="one">One</wired-radio>
// 	<wired-radio name="two">Two</wired-radio>
// 	<wired-radio name="three">Three</wired-radio>
// 	<wired-radio name="four">Four</wired-radio>
// </wired-radio-group>
// import { WiredRadioGroup } from '@bit/wiredjs.wired-elements.wired-radio-group';
// import { WiredRadio } from '@bit/wiredjs.wired-elements.wired-radio';
