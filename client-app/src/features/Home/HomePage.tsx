import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        <Header as='h2' inverted content="Welocome to Reactivities" />
        <Button as={Link} to='/activities' size="huge" inverted>
            Redirect to Activities
        </Button>
      </Container>
    </Segment>
  );
}
