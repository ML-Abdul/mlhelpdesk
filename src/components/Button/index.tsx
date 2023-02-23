import React, { ReactElement, useMemo } from 'react';
import { ButtonType } from '../../types/ButtonType.enum';

type Props = {
	name: string;
	onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
	type?: ButtonType;
};

function Button(props: Props): ReactElement {
	const { name, type, onClick } = props;
	const buttonStyle = useMemo(() => {
		if (!type || type === ButtonType.SOLID) {
			return 'p-2 bg-red-400 text-white';
		}

		return 'px-4 py-1 bg-white text-red-500 border border-red-400 rounded-sm mt-4';
	}, [type]);

	console.log(buttonStyle);
	return (
		<button type='button' onClick={onClick} className={buttonStyle}>
			{name}
		</button>
	);
}

export default Button;
