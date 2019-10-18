import React, { Component } from 'react';
//import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render () {

        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;

        return (
            <div>
                {/* <AppBar title="Enter User Details" /> */}
                <List>
                    <ListItem>
                        <ListItemText 
                        primary="First Name"  
                        secondary={ firstName }
                        />

                    </ListItem> 
                    <ListItem 
                        primaryText="Last Name"
                        secondText={ lastName }
                    />
                    <ListItem 
                        primaryText="Email"
                        secondText={ email }
                    />
                    <ListItem 
                        primaryText="Occupation"
                        secondText={ occupation }
                    />
                    <ListItem 
                        primaryText="City"
                        secondText={ city }
                    />
                    <ListItem 
                        primaryText="Bio"
                        secondText={ bio }
                    />
                </List>
                <Button 
                    label="Back"
                    variant="outlined"
                    color="primary"
                    //style={styles.button}
                    onClick={this.back}>
                    Back
                </Button>
                <Button 
                    label="Confirm"
                    variant="outlined"
                    color="primary"
                    //style={styles.button}
                    onClick={this.continue}>
                    Confirm
                </Button>
            </div>
        );
    }
}


export default FormUserDetails