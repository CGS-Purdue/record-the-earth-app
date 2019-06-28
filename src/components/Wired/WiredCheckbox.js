import React from 'react';
import { WiredCheckbox } from '@bit/wiredjs.wired-elements.wired-checkbox';

// const WiredCheckboxComponent = new WiredCheckbox();
// export default function (prop) {
//   return (
// 		<WiredCheckboxComponent checked={prop.checked}>Checkbox</WiredCheckboxComponent>
// 	);
// }
//

export default (
	<>
		<wired-checkbox>Checkbox One</wired-checkbox>
		<wired-checkbox checked>Checkbox Two</wired-checkbox>
		<wired-checkbox disabled>Disabled checkbox</wired-checkbox>
	</>
)
