import React from 'react';
import { AccessAlarm, ThreeDRotation, DeleteOutlined } from '@material-ui/icons';
import { Typography, Button } from '@material-ui/core'


const IconComponent = () => {
    return (
        <div>
            <Typography variant="h3" color="initial">Icons</Typography>
            <AccessAlarm color="primary"   />
            <ThreeDRotation/>
            <Button variant="contained" color="secondary" endIcon={         <DeleteOutlined/> }    >Delete
            </Button>
        </div>
    )
}

export default IconComponent;