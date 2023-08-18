import React from 'react';
import { Grid, List, Icon, Divider } from 'semantic-ui-react';

const Footer = () => {
    return (
        <div style={{ marginTop: '40px', padding: '20px 0', backgroundColor: '#f5f5f5' }}>
            <Grid container stackable columns={3}>
                <Grid.Column>
                    <h4>For Devs</h4>
                    <List link>
                        <List.Item as='a'>How it works</List.Item>
                        <List.Item as='a'>How to create a profile</List.Item>
                        <List.Item as='a'>Find jobs</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h4>For Clients</h4>
                    <List link>
                        <List.Item as='a'>How it works</List.Item>
                        <List.Item as='a'>How to Post a job</List.Item>
                        <List.Item as='a'>Find Dev</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h4>Stay Connected</h4>
                    <List horizontal>
                        <List.Item as='a' href="#!">
                            <Icon name='facebook' size='large' />
                        </List.Item>
                        <List.Item as='a' href="#!">
                            <Icon name='twitter' size='large' />
                        </List.Item>
                        <List.Item as='a' href="#!">
                            <Icon name='linkedin' size='large' />
                        </List.Item>
                        <List.Item as='a' href="#!">
                            <Icon name='instagram' size='large' />
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid>

            <Divider horizontal style={{ margin: '30px 0' }}>Devlink</Divider>

            <Grid textAlign='center'>
                <Grid.Row>
                    <List horizontal divided link>
                        <List.Item as='a' href="#!">Privacy Policy</List.Item>
                        <List.Item as='a' href="#!">Terms</List.Item>
                        <List.Item as='a' href="#!">Code of Conduct</List.Item>
                    </List>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Footer;
