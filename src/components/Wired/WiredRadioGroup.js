import React from 'react';
import { WiredRadioGroup } from '@bit/wiredjs.wired-elements.wired-radio-group';

export default function ({radios}) {
	return (
		<WiredRadioGroup>
			{radios}
		</WiredRadioGroup>
	);
}
