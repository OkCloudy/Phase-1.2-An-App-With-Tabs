import React from 'react';

const Page2 = () => {
return (
	<div>
		<h1><bold>Choices</bold></h1>
		<p>Hat color to place on Player One's head:</p>
		<label>
			<input type="radio" name="color" value="red" /> 
			Red <br />
		</label>
		<label>
			<input type="radio" name="color" value="blue" /> 
			Blue
		</label>
		<p>Hat to place on Player Two's head:</p>
		<label>
		<select name="selectedHat">
			<option value="red">Red</option>
			<option value="green">Green</option>
			<option value="blue">Blue</option>
		</select>
		</label>
		<div style={{ border: '1px solid black', padding: '10px', width: '200px', marginTop: '10px' }}>
		 Have computer players make guesses <br /> exactly one will be correct
		</div>
	</div>
);
};

export default Page2;
