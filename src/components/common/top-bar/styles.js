import { makeStyles } from '@material-ui/core/styles';

export const useTopBarStyles = makeStyles(({ transitions, zIndex }) => ({
  root: {
    zIndex: zIndex.drawer + 1,
    height: ({ topBar }) => topBar.height,

    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  shifted: {
    marginLeft: ({ sideBar }) => sideBar.width,
    width: ({ sideBar }) => `calc(100% - ${sideBar.width}px)`,

    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
}));
