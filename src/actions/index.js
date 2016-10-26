import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'mario.urena@gmail.com';

export const FETCH_POSTS = 'FETCH_POSTS';

export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
	return {
		type: FETCH_POSTS
		, payload: axios.get(`${API_URL}/posts/?key=${API_KEY}`)
	}
}

export function createPost(props) {
	return {
		type: CREATE_POST
		, payload: axios.post(`${API_URL}/posts/?key=${API_KEY}`, props)
	}
}