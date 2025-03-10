import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Feedback extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({ posts: response.data });
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const posts = this.state.posts;
        const allPosts = posts.map((post, index) => {
            return (
                <div key={index}>
                    <a href="">{post.title}</a><br />
                    <p>{post.body}</p>
                </div>
            );
        });

        return (
            <div>
                <h1>isto é feedback</h1>
                <Link to="/LoginPainel">Add new</Link>
                <div className="media">
                    <div className="media-body">
                        {allPosts}
                    </div>
                </div>
            </div>
        );
    }    
}