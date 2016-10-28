import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { posts } from '../actions/index';

const FIELDS = {
	title: {
		label: 'Title for Post'
	}
	, categories: {
		label: 'Enter some categories for this post'
	}
	, content: {
		label: 'Post Content'
	}
}

class PostsNew extends Component {

	constructor(props) {
		super(props);
		this.renderField = this.renderField.bind(this);
		this.renderText = this.renderText.bind(this);
		this.renderTextArea = this.renderTextArea.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// Blog post has been created
				this.context.router.push('/')
			})
	}

	renderField(config, prop, field) {
		return(
			<div className={`form-group ${prop.touched && prop.invalid ? 'has-danger' : ':'}`}>
				<label>{config.label}</label>
				{field}
				<div className="text-help">{prop.touched && prop.error}</div>
			</div>
		);
	}

	renderText(config, prop) {
		return this.renderField(config, prop, (
			<input type="text" className="form-control" {...prop} />
		))
	}

	renderTextArea(config, prop) {
		return this.renderField(config, prop, (
			<textarea className="form-control" {...prop} />
		))
	}

	render() {
		const { handleSubmit, fields: { title, categories, content } } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<h3>Create a New Post</h3>
				{this.renderText(FIELDS.title, title)}
				{this.renderText(FIELDS.categories, categories)}
				{this.renderTextArea(FIELDS.content, content)}
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

// connect: 1st arg is mapStateToProps, 2nd mapDispatchToProps
// reduxForm: 1st arg is config, 2nd mapStateToProps, 3rd mapDispatchToProps

export default reduxForm({
	form: 'PostsNew'
	, fields: _.keys(FIELDS)
	, validate
}, null, { createPost: posts.create })(PostsNew);

function validate(values) {
	const errors = {};
	
	_.each(FIELDS, (type, field) => {
		// Required 
		if(!values[field]) errors[field] = 'Please enter a value for ' + field
	})

	return errors;
}


