import React, { Component } from 'react';
import './App.css';

import Layout from './Layout.jsx';

const DATA_SERVICE_URL = 'https://api.thecatapi.com/v1/images/search?size=full';

export default class App extends Component {
    constructor(props) {
        super();

        this.state = {
            generatedCats: {},
            currentCatName: null,
            currentCatPhoto: null,
            langSelected: 'en',
            isFetching: false,
        };

        this.updateState=this.updateState.bind(this);
        this.generateRandomCatImage=this.generateRandomCatImage.bind(this);
    }

    componentDidMount() {
        this.setState({
            currentCatName: this.props.translations[this.state.langSelected].name,
        });
    }

    updateState(state, value) {
        this.setState({
            [state]: value,
        });
    }

    generateRandomCatImage() {
        this.setState({
            isFetching: 'pending',
            currentCatPhoto: null,
        });

        fetch(DATA_SERVICE_URL)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    currentCatPhoto: result[0]["url"],
                    isFetching: true
                })
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    isFetching: false
                });
            });
    };

    render() {
        const textTranslated = this.props.translations[this.state.langSelected];
        const data = {
            ...this.state,
            ...this.props,
            translations: textTranslated,
            cardPreview: {
                name: this.state.currentCatName,
                photo: this.state.currentCatPhoto,
                defaultName: textTranslated.name,
            }
        }
        return (
            <Layout {...data}
                updateState={this.updateState}
                generateRandomCatImage={this.generateRandomCatImage}
            />
        );
    }
}
