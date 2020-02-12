// Support IE11
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Other imports
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard
            greenbt={<i className="thumbs up outline icon"/>} 
            redbt={<i className="thumbs down outline icon"/>}>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                comment={faker.lorem.words()} 
                author={faker.name.firstName()} 
                timeAgo={faker.date.weekday()} />
            </ApprovalCard>

            <ApprovalCard 
            greenbt={<i className="thumbs up outline icon"/>} 
            redbt={<i className="thumbs down outline icon"/>}>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                author={faker.name.firstName()} 
                comment={faker.lorem.words()} 
                timeAgo={faker.date.weekday()} />
            </ApprovalCard>

            <ApprovalCard 
            greenbt={<i className="thumbs up outline icon"/>} 
            redbt={<i className="thumbs down outline icon"/>}>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                author={faker.name.firstName()} 
                comment={faker.lorem.words()} 
                timeAgo={"Last "+faker.date.weekday()} /> 
            </ApprovalCard>
        </div>
        


    );        
};

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);