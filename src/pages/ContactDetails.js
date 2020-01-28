import React, { Component } from 'react';
import ContactService from '../services/ContactService.js'
import { Link } from 'react-router-dom';

export default class ContactDetails extends Component {

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

    loadContact = async () => {
        try {
            const { id } = this.props.match.params;
            const contact = await ContactService.getContactById(id)
            this.setState({ contact })
        } catch (err) {
            console.log('cant get contact')
        }
    }

    onDelete = async () => {
        await ContactService.deleteContact
        this.props.history.push('/contact')
    }

    goBack = () => {
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contact) return <div className="loading">Loading...</div>
        const { contact } = this.state;
        return (
            <div className="container">
                <h2>{contact.name}</h2>
                <img alt="contact" src={`https://robohash.org/${contact.name}.png?set=set4`}></img>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <button onClick={this.onDelete}>Delete</button>
                <button onClick={this.goBack}>BACK</button>
                <Link to={`/contact/${contact._id}/edit`}><button>Edit</button>
                </Link>
            </div>
        )
    }
}