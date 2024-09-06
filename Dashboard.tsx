import React from 'react';
import {
  Card,
  Button,
  Page,
  Layout,
  Stack,
  TextStyle,
  Heading,
  DataTable,
  Badge,
  Link,
} from '@shopify/polaris';

const Dashboard: React.FC = () => {
  return (
    <Page fullWidth>
      <Layout>
        {/* Welcome Section */}
        <Layout.Section>
          <Heading>Welcome, John Mathew!!</Heading>
          <Stack distribution="fillEvenly" spacing="tight">
            <Card title="Order Sync Successful!">
              <Card.Section>
                <p>Your last sync was 3 days ago. Check your orders here.</p>
                <Button>Create New Order</Button>
              </Card.Section>
            </Card>

            <Card title="Customer Notification">
              <Card.Section>
                <p>
                  The Service Provider has updated the tracking details.
                </p>
                <Button>Get Notifications</Button>
              </Card.Section>
            </Card>

            <Card title="Tracking Link Sent">
              <Card.Section>
                <p>Your tracking link has been sent to your customer.</p>
                <Button>Copy Link</Button>
                <Button>Go to Navigation</Button>
              </Card.Section>
            </Card>
          </Stack>
        </Layout.Section>

        {/* Performance Metrics Section */}
        <Layout.Section>
          <Heading>Instant Dive into Your Performance Metrics</Heading>

          <Stack distribution="fillEvenly" spacing="tight">
            {/* Shipment Updates Card */}
            <Card title="Shipment Updates">
              <Card.Section>
                {/* Placeholder for Chart */}
                <div style={{ height: '150px', textAlign: 'center' }}>
                  <p>Chart Here</p>
                </div>
                <Stack>
                  <Badge status="success">Delivered</Badge>
                  <Badge status="attention">Out for Delivery</Badge>
                  <Badge status="warning">Pending</Badge>
                  <Badge status="critical">Exception</Badge>
                </Stack>
              </Card.Section>
            </Card>

            {/* Your Stats Card */}
            <Card title="Your Stats">
              <Card.Section>
                <p>
                  Keep track of your stats to see where improvements are needed.
                </p>
                <Button>Check Orders Page</Button>
              </Card.Section>
            </Card>

            {/* Tracking Page Views & Orders Card */}
            <Card title="Tracking Page Views & Orders">
              <Card.Section>
                <Stack>
                  <TextStyle variation="subdued">Tracking Page Views:</TextStyle>
                  <TextStyle>80</TextStyle>
                  <TextStyle variation="subdued">Orders:</TextStyle>
                  <TextStyle>44</TextStyle>
                </Stack>
              </Card.Section>
            </Card>
          </Stack>
        </Layout.Section>

        {/* Discover Functionality Section */}
        <Layout.Section>
          <Heading>Discover the Heart of Our Functionality</Heading>

          <Stack distribution="fillEvenly" spacing="tight">
            <Card title="Sync Your Brand">
              <Card.Section>
                <p>
                  Customize your tracking page with brand assets like logos,
                  colors, and fonts.
                </p>
              </Card.Section>
            </Card>

            <Card title="Onboarding Support">
              <Card.Section>
                <p>Get onboarding support for high-volume brands.</p>
              </Card.Section>
            </Card>

            <Card title="Custom HTML Integration">
              <Card.Section>
                <p>
                  Easily integrate custom HTML for a more personalized
                  experience.
                </p>
              </Card.Section>
            </Card>
          </Stack>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
