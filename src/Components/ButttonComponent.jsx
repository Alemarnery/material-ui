import React from 'react';
import {Button } from '@material-ui/core'

function ButtonComponent() {
  return (
    <div>
        <Button variant="contained">Button</Button>
        <Button variant="contained" disableElevation color="primary" size="small">Boton</Button>
        <Button variant="contained" fullWidth color="secondary">Boton</Button>
    </div>
  );
}

export default ButtonComponent;
