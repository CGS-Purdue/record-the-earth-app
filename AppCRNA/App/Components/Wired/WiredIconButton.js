import React from 'react';
import { WiredIconButton } from '@bit/wiredjs.wired-elements.wired-icon-button';

const css = `wired-icon-button {
    margin: 0 10px;
}
.big {
    --wired-icon-size: 40px;
    padding: 16px;
}`

export default (
	<div>
		<style>{css}</style>
		<wired-icon-button>favorite</wired-icon-button>
		<wired-icon-button style={{ color: 'red' }}>favorite</wired-icon-button>
		<wired-icon-button style={{ color: 'red', '--wired-icon-bg-color': 'pink' }}>favorite</wired-icon-button>
		<wired-icon-button class="big">favorite</wired-icon-button>
		<wired-icon-button disabled>favorite</wired-icon-button>
		<br />
		<wired-icon-button>close</wired-icon-button>
		<wired-icon-button style={{ color: 'red' }}>close</wired-icon-button>
		<wired-icon-button style={{ color: 'red', '--wired-icon-bg-color': 'pink' }}>close</wired-icon-button>
		<wired-icon-button class="big">close</wired-icon-button>
		<wired-icon-button disabled>close</wired-icon-button>
	</div>
)
