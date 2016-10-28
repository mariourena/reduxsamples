import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { posts } from '../actions/index';

class PostsShow extends Component {

	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	onDelete() {
		this.props.deletePost(this.props.params.id)
			.then(() => { this.context.router.push('/') });
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return (
				<div>Loading...</div>
			);
		}

		return(
			<div>
				<Link to="/">Back to Listing</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDelete}>Delete</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

export default connect(mapStateToProps, { fetchPost: posts.fetch, deletePost: posts.delete })(PostsShow);

function mapStateToProps(state) {
	return {
		post: state.posts.post
	}
}
