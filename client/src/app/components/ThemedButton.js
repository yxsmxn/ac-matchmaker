import * as React from 'react';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme, useTheme} from '@mui/material/styles';

const ButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: 'themed'},
          style: {
            fontFamily: 'Montserrat',
            fontWeight: '600',
            textTransform: 'none',
            boxShadow: 'none',
            color: 'white',
          },
        },
        {
          props: {variant: 'cancel'},
          style: {
            fontFamily: 'Montserrat',
            fontWeight: '600',
            textTransform: 'none',
            boxShadow: 'none',
            backgroundColor: 'white',
          },
        },
        {
          props: {variant: 'gradient'},
          style: {
            fontFamily: 'Montserrat',
            fontWeight: '600',
            textTransform: 'none',
            boxShadow: 'none',
            backgroundColor: 'white',
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});

/**
 * Themed Button
 * @param {Object} children 'Button content'
 * @param {String} color 'yellow' || 'blue' || 'gray' || 'white'
 *                       - Default to 'blue'
 * @param {String} variant 'themed' || 'cancel' || 'gradient
 *                         - Default to MUI button
 * @param {Object} props 'Any MUI Button props'
 * @return {Object} JSX
 */
export default function ThemedButton({children, color, variant, ...props}) {
  const theme = useTheme();
  const blue = theme.palette.primary;
  const yellow = theme.palette.secondary;
  const gray = theme.palette.tertiary;
  const white = 'white';

  const themedStyling = {
    'padding': '8px 22px',
    'fontSize': '0.9375rem',
    'backgroundColor':
      color === 'yellow' ? yellow.main :
      color === 'gray' ? gray.main :
      color === 'blue' ? blue.main :
      white,
    'color':
      color === 'white' ? gray.dark :
      white,
    '&:hover': {
      backgroundColor:
        color === 'yellow' ? yellow.dark :
        color === 'gray' ? gray.dark :
        color === 'blue' ? blue.dark :
        gray.lightHover,
    },
  };

  const cancelStyling = {
    'padding': '8px 22px',
    'fontSize': '0.9375rem',
    'color':
      color === 'yellow' ? yellow.main :
      color === 'gray' ? gray.main :
      blue.main,
    'outline':
      color === 'yellow' ? `1px solid ${yellow.main}` :
      color === 'gray' ? `1px solid ${gray.main}` :
      `1px solid ${blue.main}`,
    '&:hover': {
      backgroundColor:
        color === 'yellow' ? yellow.lightHover :
        color === 'gray' ? gray.lightHover :
        blue.lightHover,
    },
  };

  const gradientStyling = {
    'padding': '8px 22px',
    'fontSize': '0.9375rem',
    'color': 'white',
    'background':
      color === 'yellow' ?
        `linear-gradient(to right, ${yellow.light}, ${yellow.dark})` :
      color === 'gray' ?
        `linear-gradient(to right, ${gray.light}, ${gray.dark})` :
        `linear-gradient(to right, ${blue.light}, ${blue.dark})`,
    '&:hover': {
      backgroundColor:
        color === 'yellow' ? yellow.dark :
        color === 'gray' ? gray.dark :
        blue.dark,
    },
  };

  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button
        {...props}
        variant={variant}
        sx={
          variant === 'themed' ? themedStyling :
          variant === 'cancel' ? cancelStyling :
          variant === 'gradient' ? gradientStyling :
          null
        }
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
