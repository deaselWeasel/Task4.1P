import React from 'react';
import { Card, Rating } from 'semantic-ui-react';

const Freelancer = ({ name, description, rating }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{description}</Card.Description>
                <Rating icon='star' defaultRating={rating} maxRating={5} />
            </Card.Content>
        </Card>
    );
}

export default Freelancer;
