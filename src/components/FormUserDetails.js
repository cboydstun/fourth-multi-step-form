import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render () {

        const { values, handleChange } = this.props;

        return (
            <div>
              <Button variant="outlined" color="primary"> Button
              </Button> <br />
              <TextField
                placeholder="Placeholder here"
                label="Basic TextField" />
                
                <AppBar title="Enter User Details" />
                <TextField 
                    placeholder="Enter Your First Name"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br />
                <TextField 
                    placeholder="Enter Your Last Name"
                    label="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br />
                <TextField 
                    placeholder="Enter Your Email"
                    label="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br />
                <Button
                    label="Continue"
                    primary={true}
                    //style={styles.button}
                    onClick={this.continue}
                />
            </div>
          );
        

        // return (
        //     <MuiThemeProvider>
        //         <div>
        //             <AppBar title="Enter User Details" />
        //             <TextField 
        //                 hintText="Enter Your First Name"
        //                 floatingLabelText="First Name"
        //                 onChange={handleChange('firstName')}
        //                 defaultValue={values.firstName}
        //             />
        //             <br />
        //             <TextField 
        //                 hintText="Enter Your Last Name"
        //                 floatingLabelText="Last Name"
        //                 onChange={handleChange('lastName')}
        //                 defaultValue={values.lastName}
        //             />
        //             <br />
        //             <TextField 
        //                 hintText="Enter Your Email"
        //                 floatingLabelText="Email"
        //                 onChange={handleChange('email')}
        //                 defaultValue={values.email}
        //             />
        //             <br />
        //             <Button
        //                 label="Continue"
        //                 primary={true}
        //                 //style={styles.button}
        //                 onClick={this.continue}
        //             />
        //         </div>

        //     </MuiThemeProvider>
        // )
    }
}

// const styles = {
//     button: {
//         margin: 15
//     }
// }

export default FormUserDetails;