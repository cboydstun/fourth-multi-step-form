import React, { Component } from 'react';
//import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render () {

        const { values, handleChange } = this.props;

        return (
            <div>
                {/* <AppBar title="Enter User Details" /> */}
                <TextField 
                    placeholder="Enter Your Occupation"
                    label="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br />
                <TextField 
                    placeholder="Enter Your City"
                    label="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br />
                <TextField 
                    placeholder="Enter Your Bio"
                    label="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br />
                <Button 
                    label="Continue"
                    variant="outlined"
                    color="primary"
                    //style={styles.button}
                    onClick={this.continue}>
                    Continue
                </Button>
                <Button 
                    label="Back"
                    variant="outlined"
                    color="primary"
                    //style={styles.button}
                    onClick={this.back}>
                    Back
                </Button>
            </div>
          );
        }
    }

export default FormPersonalDetails