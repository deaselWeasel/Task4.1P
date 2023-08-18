import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Freelancer from './components/Freelancer';
import { Grid, Button, Divider } from 'semantic-ui-react';
import Review from './components/Review';
import SubscriptionBanner from './components/SubscriptionBanner';
import ImageBanner from './components/ImageBanner';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageBanner imageUrl="/banner.jpg" />
      <h2 style={{ textAlign: 'center' }}>Featured Freelancers</h2>
      <Grid columns={3} divided>
        <Grid.Row>
            <Grid.Column>
                <Freelancer name="John Doe" description="Full-stack developer with 5 years experience." rating={4} />
            </Grid.Column>
            <Grid.Column>
                <Freelancer name="Jane Smith" description="Front-end developer specializing in React." rating={5} />
            </Grid.Column>
            <Grid.Column>
                <Freelancer name="Alice Brown" description="Back-end developer skilled in Node.js." rating={3} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Freelancer name="Bob White" description="Mobile developer with expertise in React Native." rating={3} />
            </Grid.Column>
            <Grid.Column>
                <Freelancer name="Ella Green" description="UI/UX designer with a passion for intuitive interfaces." rating={5} />
            </Grid.Column>
            <Grid.Column>
                <Freelancer name="Charlie Black" description="Database expert, specialized in MongoDB and PostgreSQL." rating={4} />
            </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
    <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
            <Button primary style={{ marginTop: '20px' }}>See more</Button>
        </Grid.Column>
    </Grid.Row>
</Grid>
<Divider horizontal></Divider>
      <h2 style={{textAlign:'center'}}>Featured Customers</h2>
      <Grid columns={3} divided>
    <Grid.Row>
        <Grid.Column>
            <Review reviewer="John Smith" comment="Great platform! Found a developer quickly and the project was a success." rating={4} />
        </Grid.Column>
        <Grid.Column>
            <Review reviewer="Jane Doe" comment="The freelancers here are professional and reliable. Highly recommended!" rating={5} />
        </Grid.Column>
        <Grid.Column>
            <Review reviewer="Alice Williams" comment="Smooth process from start to finish. Will definitely use again." rating={4} />
        </Grid.Column>
    </Grid.Row>
</Grid>
<Grid>
    <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
            <Button primary>See all customers</Button>
        </Grid.Column>
    </Grid.Row>
</Grid>
<SubscriptionBanner />

      
      <Footer />
    </div>
  );
}

export default App;
