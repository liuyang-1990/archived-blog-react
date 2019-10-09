import React, { Component } from 'react';
import * as Loadable from "react-loadable";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Spin } from 'antd';

export default class LoadingPage extends Component<Loadable.LoadingComponentProps>{
	UNSAFE_componentWillMount() {
		NProgress.start();
	}

	componentWillUnmount() {
		NProgress.done();
	}

	render() {
		return (
			<div style={{ paddingTop: 100, textAlign: 'center' }}>
				<Spin size="large" />
			</div>)
	}
}


