import React, { Component } from 'react';
import './NavBar.css';
import firebase from '../firebase';

export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark navbar-bg" >
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active nav-opt-active">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item nav-opt">
                            <a class="nav-link" href="https://thebrandonbestpodcast.podbean.com/" target="new" tabindex="-1">Podcast</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}