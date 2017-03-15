import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'todo-list';
import { connect } from 'react-redux';

const mapStateToCamerasProps = (state, ownProps) => {
	return {
		camerasContent
	};
};

const mapDispatchToCamerasProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
          dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
          });
		}
	};
};
//закинь сюда содержимое камер