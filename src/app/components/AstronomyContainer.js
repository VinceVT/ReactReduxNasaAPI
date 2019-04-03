import React from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';
import fetchData from '../../actions/fetchData';

class AstronomyContainerReact extends React.Component {

    constructor() {
        super();
        this.state = {
            astronomy: []
        }

    }

    componentDidMount() {
        const API_Key = 'kUZbGd3PkE6bbymjUX3hhhwHOfakfBp3x9Tp140k';
        const api = 'https://api.nasa.gov/planetary/apod?api_key=';
        const url = api+API_Key;
        
        //only need either axios or fetch
        axios.get(url+API_Key)
        .then(response => {
            this.setState({
                astronomy: response.data
            })
        })
        .catch(error => {
            console.log(error, 'failed to fetch data')
        });
        
        //only need either axios or fetch
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                astronomy: data
            })
        })
        .catch(error => {
            console.log(error, 'failed to fetch data')
        })
        
    }
    
    render() {
        const {astronomy} = this.state;
        return (
            <AstronomyCard data={astronomy} />
        )
    }
}

//redux refactor
class AstronomyContainer extends React.Component {

    componentWillMount() {
        this.props.fetchData();
        //console.log(this.props.astronomy);
    }

    render() {
        return (
            <AstronomyCard data={this.props.astronomy} />
        );
    }
}

//connect with redux
//@params mapStateToProps           (necessity)
//@params mapDispatchToProps        this is the action (optional)
function mapStateToProps(state) {
    return {astronomy: state.astronomy};
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);