import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#151B23', // Set background color for TableCell
          color: 'white', // Set text color
          border: '1px solid white', // Set border color
          padding: '8px 16px', // Define padding
          '@media (max-width:600px)': {
            padding: '4px 8px',
          },
          '&:hover': {
            backgroundColor: '#2c3e50', // Change background color on hover
            cursor: 'pointer', // Change cursor to pointer on hover
            transition: 'background-color 0.3s ease', // Smooth transition on hover
          },
        },
      time: {
        
      }
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#151B23', // Ensure table headers match cell background
        },
      },
    },
  },
});

export default theme;
