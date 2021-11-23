import { memo } from 'react';
import { Grid } from '@material-ui/core';

import { MemeCard } from 'components/memes/card';

export const MemesList = memo(({ memes }) => (
  <Grid spacing={2} container wrap="wrap">
    {memes.map((meme) => (
      <Grid item xs={3} key={meme.submissionId}>
        <MemeCard meme={meme} />
      </Grid>
    ))}
  </Grid>
));
