import React, { Component } from 'react'
import { Alert } from 'reactstrap'
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Alert className="mt-1" color="primary">Not Found</Alert>
            </div>
        )
    }
}
