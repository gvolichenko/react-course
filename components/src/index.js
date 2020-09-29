import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail 
                    author="George Volichenko" 
                    timeAgo="2 million years ago" 
                    message="Wow, that's cool!"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Jeremiah Jones" 
                    timeAgo="The other day" 
                    message="Gee willikers!"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'))