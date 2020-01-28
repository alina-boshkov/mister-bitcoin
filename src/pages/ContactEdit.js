import React, { Component } from 'react';
import ContactService from "../services/ContactService.js";

export default class ContactEdit extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    loadContact() {
        ContactService.getContactById(this.props.match.params.id).then(contact => {
            this.setState({ contact })
        })
    }

    onEditContact = (name, phone) => {
        return ContactService.editContact(this.state.contact._id, name, phone).then(contact => {
            this.props.history.push('/contact/' + contact._id);
        })
    }

    render() {
        return <div> update </div>
    }
} 