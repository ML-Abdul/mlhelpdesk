import React from 'react';

type Props = {
	name: string;
};

function NavItem(props: Props) {
	return <li className='p-4 md:p-3 '>{props.name}</li>;
}

export default NavItem;
