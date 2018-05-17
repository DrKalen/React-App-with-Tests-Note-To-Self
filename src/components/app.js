import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }
    render() {
        return (
                <div>
                    <h2>Note to Self</h2>
                    <Form>
                        <FormControl onChange={event => {console.log(event.target.value)}} />
                        <Button>Submit</Button>
                    </Form>
                </div>
        )
    }
}

export default App;