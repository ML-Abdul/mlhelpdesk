import React from 'react';
import NavItem from './NavItem';

type Props = {
	children: React.ReactNode;
};

function Navigation(props: Props) {
	const { children } = props;
	return (
		<div className='flex max-md:flex-col '>
			<nav className=' md:h-screen md:w-1/6 bg-red-600 sm:w-screen'>
				<ul className=' flex md:flex-col'>
					<NavItem name='Home' />
					<NavItem name='About' />
					<NavItem name='Contact' />
					<NavItem name='Services' />
				</ul>
			</nav>
			<div>{children}</div>
		</div>
	);
}

export default Navigation;
