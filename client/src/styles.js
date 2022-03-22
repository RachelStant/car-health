import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        width: '60%',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '30px',
        
      },
      heading: {
        color: 'rgba(84,95,102, 1)',
        fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        letterSpacing: '1.5px',
      },
      image: {
        marginLeft: '15px',
        borderRadius: '5px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse'
        }

      }
      
}));