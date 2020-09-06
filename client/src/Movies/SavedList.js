import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button"><Link to="/">Home</Link></div>
  </div>
);

export default SavedList;
