import React from 'react';
import { Card, Rating } from 'semantic-ui-react';

const Review = ({ reviewer, comment , rating}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{reviewer}</Card.Header>
                <Card.Description>{comment}</Card.Description>
                <Rating icon='star' defaultRating={rating} maxRating={5} />
            </Card.Content>
        </Card>
    );
}

export default Review;
