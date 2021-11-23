import { Box, Typography, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useCallback, memo } from 'react';

import { useMemes } from 'hooks/useMemes';
import { MemesList } from 'components/memes/list';
import { FixedProgress } from 'components/common/progress';
import { useQuery } from 'hooks/useQuery';

export const Memes = memo(() => {
  const { query, changePage } = useQuery();
  const { pending, memes, pagination } = useMemes({
    page: query.page,
    limit: 12,
  });

  const onChangePage = useCallback(
    (event, page) => changePage(page),
    [changePage]
  );

  return (
    <Box m={4}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Memes
      </Typography>

      {pending && <FixedProgress />}
      {!!memes.length && (
        <>
          <MemesList memes={memes} />
          <Box my={2}>
            <Grid container justifyContent="center">
              <Pagination
                count={pagination.totalPages}
                page={pagination.page}
                onChange={onChangePage}
              />
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
});
