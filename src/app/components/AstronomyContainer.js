import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends React.Component {

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
        /*
        axios.get(url+API_Key)
        .then(response => {
            this.setState({
                astronomy: response.data
            })
        })
        .catch(error => {
            console.log(error, 'failed to fetch data')
        });
        */
        
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

export default AstronomyContainer;