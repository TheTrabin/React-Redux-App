import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';
import styled from 'styled-components';

const JID = styled.p `
color: Yellow;
`;

const JT = styled.p `
color: Green;
`;
const JS = styled.p `
color: blue;
`;

const PUNCH = styled.p `
color:red;
font-weight: bold;
`;

const Jokes = (props) => {
    const fetchJoke = e => {
        e.preventDefault();
        props.getJoke();
        
      };
      
    return(
        <>
            <h1>Press the Button for a Joke!</h1>
            {props.isFetching && <p>Incomming Joke!</p>}
            {props.error && <p>{props.error}</p>}

            <button onClick={fetchJoke}>JOKE!</button>
            <div>
                <div className="joke">
                <JID key={props.joke.id}>{`Id: ${props.joke.id}`}</JID>
                <JT key={props.joke.type}>{`Type: ${props.joke.type}`}</JT>
                <JS key={props.joke.setup}>{`Setup: ${props.joke.setup}`}</JS>
                <PUNCH key={props.joke.punchline}>{`Punch! ${props.joke.punchline}`}</PUNCH>
                </div>
            </div>
            <div className="info">
                <h3>Information about the development of this application</h3>
                <p>This app took longer than expected to get underway.
                 Initially I started working with a different API, but the calls kept rounding to a 404 error, when it was an issue with a user-key.
                 This API (official Joke API) I was able to call data and get it to post. Now Initially it states "undefined," but when you click the button:</p>
                <p>You get a joke.</p>
                <p>The Asyncronis call sends the request on button click, applies the joke into an array to be pulled from via props called down from the store of states.
                After which the component, shown here, applies the information into the various slots: ID, Type, Setup, Punchline.
                Each Subsequent click will pull a new, Random, joke.</p>
            </div>
    </>
    
    )
};

const mapStateToProps = state => {
  return {
    joke: state.joke
  }
}

export default connect(mapStateToProps, {getJoke} )(Jokes)