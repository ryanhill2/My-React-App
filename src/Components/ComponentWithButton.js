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
      console.log('The button was clicked')
    }

    return (
        <div className={classes.root}>
                <p>
                    My component With Button
                </p>
                <Button variant="contained"
                onClick={clickFunction}>
                Click Me</Button>
        </div>
    );
}

export default ComponentWithButton;