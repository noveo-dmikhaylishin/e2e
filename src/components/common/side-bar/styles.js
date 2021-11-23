import { makeStyles } from '@material-ui/core/styles';

export const useSideBarStyles = makeStyles(({ transitions }) => ({
  logo: {
    height: ({ topBar }) => topBar.height,
  },
  root: {
    width: ({ sideBar }) =>
      sideBar.opened ? sideBar.width : sideBar.shiftedWidth,
    overflowX: 'hidden',

    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
}));
