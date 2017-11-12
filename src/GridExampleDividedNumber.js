import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import mediaParagraph from './assets/images/wireframe/media-paragraph.png';

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src={mediaParagraph} />
      </Grid.Column>
      <Grid.Column>
        <Image src={mediaParagraph} />
      </Grid.Column>
      <Grid.Column>
        <Image src={mediaParagraph} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedNumber;