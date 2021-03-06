import React, { Component, PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    generateReviews = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    componentDidMount() {
        this.generateReviews()
    }


    render() {
        return (<div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }

}
            
export default LatestMovieReviewsContainer
