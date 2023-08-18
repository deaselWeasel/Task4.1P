import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

const SubscriptionBanner = () => {
    return (
        <Segment textAlign='center' style={{ marginTop: '30px' }}>
            <span style={{ marginRight: '15px', fontSize: '1.2em' }}>Sign Up For Our Daily Insider</span>
            <Input 
                action={{ color: 'blue', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }}
                placeholder='Enter your email...'
            />
        </Segment>
    );
}

export default SubscriptionBanner;
    