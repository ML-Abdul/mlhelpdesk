import React from 'react';
import { Button, Navigation } from '../../components';
import { ButtonType } from '../../types/ButtonType.enum';
function Dashboard() {
	return (
		<Navigation>
			<div>
				<Button name='Hello' type={ButtonType.OUTLINE} />
				<Button name='Hello' type={ButtonType.SOLID} />
			</div>
		</Navigation>
	);
}

export default Dashboard;
