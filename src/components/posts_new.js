import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

	constructor(props) {
		super(props);
		this.renderField = this.renderField.bind(this);
		this.renderText = this.renderText.bind(this);
		this.renderTextArea = this.renderTextArea.bind(this);
	}

	renderField(label, prop, field) {
		return(
			<div className={`form-group ${prop.touched && prop.invalid ? 'has-danger' : ':'}`}>
				<label>{label}</label>
				{field}
				<div className="text-help">{prop.touched && prop.error}</div>
			</div>
		);
	}

	renderText(label, prop) {
		return this.renderField(label, prop, (
			<input type="text" className="form-control" {...prop} />
		))
	}

	renderTextArea(label, prop) {
		return this.renderField(label, prop, (
			<textarea className="form-control" {...prop} />
		))
	}

	render() {
		const { handleSubmit, fields: { title, categories, content } } = this.props;

		return(
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a New Post</h3>
				{this.renderText('Title', title)}
				{this.renderText('Categories', categories)}
				{this.renderTextArea('Content', content)}
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	function required (field) {
		if(!values[field]) errors[field] = 'Please enter a value for ' + field
	}

	required('title');
	required('categories');
	required('content');

	return errors;
}

// connect: 1st arg is mapStateToProps, 2nd mapDispatchToProps
// reduxForm: 1st arg is config, 2nd mapStateToProps, 3rd mapDispatchToProps

export default reduxForm({
	form: 'PostsNew'
	, fields: ['title', 'categories', 'content']
	, validate
}, null, { createPost })(PostsNew);


