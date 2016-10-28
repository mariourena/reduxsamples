import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = 'mario.urena@gmail.com';

export const FETCH_POSTS = 'FETCH_POSTS';

export const FETCH_POST = 'FETCH_POST';

export const CREATE_POSTS = 'CREATE_POST';

export const DELETE_POST = 'DELETE_POST';

export const posts = {
	fetch: function(id) {
		return {
			type: id ? FETCH_POST : FETCH_POSTS
			, payload: axios.get(getURL('posts' + (id ? '/' + id : '')))
		}
	}
	, create: function(props) {
		return {
			type: CREATE_POSTS
			, payload: axios.post(getURL('posts'), props)
		}
	}
	, delete: function(id) {
		return {
			type: DELETE_POST
			, payload: axios.delete(getURL('posts/' + id))
		}
	}
}

function getURL(path) {
	return `${API_URL}/${path}/?key=${API_KEY}`
}