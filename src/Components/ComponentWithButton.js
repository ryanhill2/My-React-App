import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function ComponentWithButton() {
    const classes = useStyles();
    function clickFunction(){
        console.log('The Button Was Clicked')
    }

    return (
        <div className={classes.root}>
            <p>
                My Component With Button
            </p>
            <Button variant="contained" 
                    color="primary"
                    onClick={clickFunction}>
                Click Me
            </Button>
        </div>
    );
}

export default ComponentWithButton;