import React from 'react';
import layoutstyles from './layout.module.css';

function Layout(children) {
	return <div className={layoutstyles.layout}>{children}</div>;
}

export default Layout;
