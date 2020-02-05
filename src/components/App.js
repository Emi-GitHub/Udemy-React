import React from 'react';
import ApprovalCard from './ApprovalCard';
import Commentdetail from './CommentDetail';
import faker from 'faker';
//https://github.com/marak/Faker.js/
//npm install --save faker
//example: <img src={faker.name.avatar()}

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h3>Warning!</h3>
                <p>Are you sure you want to do this?</p>
            </ApprovalCard>
            <ApprovalCard>
                <Commentdetail 
                    author={faker.name.firstName()}
                    time="Today at 4:45PM"
                    comment="Nice blog post"
                    pic={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Commentdetail 
                    author={faker.name.firstName()}
                    time="Today at 2:30AM"
                    comment="Have a nice day!"
                    pic={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

export default App;