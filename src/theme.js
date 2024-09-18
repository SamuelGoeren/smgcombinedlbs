import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#151B23', // Set background color for TableCell
          color: 'white', // Set text color
          border: '1px solid white', // Set border color
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#151B23', // Ensure table headers match cell background
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#1e2330', // Optional: alternate row background color
          },
        },
      },
    },
  },
});

export default theme;
