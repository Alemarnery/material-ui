import React from 'react';
import { Typography, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
    botonPersonalizado: {
        backgroundColor: 'red',
        boder:0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255,105,135,.3)',
        color: 'white',
        height: 48,
        padding: '0 30px'
      },

})


const TypographyComponent = () => {

    const classes = useStyle()

    return (
        <div>
            <Typography variant="h1" color="primary">Typografic</Typography>
            <Typography variant="body1" color="secondary" align="center"  >centered</Typography>
            <Typography variant="body1" color="initial" align="center"  >centered</Typography>
            <Button variant="text" color="default" className={classes.botonPersonalizado}>Button
            </Button>
        </div>
    )
}

export default TypographyComponent;