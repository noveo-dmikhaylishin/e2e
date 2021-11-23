import { memo } from 'react';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import { formatDate } from 'helpers/date';

import { useCardStyles } from './styles';

export const MemeCard = memo(({ meme }) => {
  const classes = useCardStyles();

  return (
    <Card>
      <CardHeader subheader={formatDate(meme.created)} />
      <CardMedia className={classes.media} image={meme.submissionUrl} />
      <CardContent>{meme.submissionTitle}</CardContent>
    </Card>
  );
});
