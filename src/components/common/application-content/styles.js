import { makeStyles } from '@material-ui/core/styles';

export const useApplicationContentStyles = makeStyles(({ transitions }) => ({
  root: {
    paddingTop: ({ top }) => top,
    paddingRight: ({ right }) => right,
    paddingBottom: ({ bottom }) => bottom,
    paddingLeft: ({ left }) => left,
    transition: transitions.create(
      ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
      {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }
    ),
  },
}));
