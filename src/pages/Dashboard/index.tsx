import React from 'react';
import { Button, Navigation } from '../../components';
import { ButtonType } from '../../types/ButtonType.enum';
function Dashboard() {
	return (
		<Navigation>
			<div>
				<h1>HI</h1>
				<Button name='Hello' type={ButtonType.OUTLINE} />
			</div>
		</Navigation>
	);
}

export default Dashboard;
