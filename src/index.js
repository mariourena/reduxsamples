import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyADN1v_TdaNOOs8hYhaecw-RbagHnfkh50';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videos: []
			, selectedVideo: null
			, term: 'debate'
		};

		this.videoSearch(this.state.term);
		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, videos => {
			this.setState({ 
				videos
				, selectedVideo: videos[0] 
			});
		});
	}

	render() {

		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

		return (
			<main>
				<SearchBar
					onSearchTermChange={videoSearch} 
					term={ this.state.term } />
				<VideoDetail 
					video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } 
					videos={ this.state.videos } />
			</main>
		);
	}

}


ReactDOM.render(<App />, document.querySelector('.container'));