/**
 * External dependencies
 */
import { useMemo } from '@wordpress/element';

export default function C() {
	const unusedVariable = "hey";

	if ( a == 123 ) {
		console.log( 456 );
	}

	const value = 123;
	const newValue = Math.round( 123 );

	return useMemo( () => {
		return { value, newValue };
	}, [ value ] );
}
