import React, { Component } from 'react';
import ContactList from '../cmps/ContactList.js'
import Filter from '../cmps/Filter.js'

import ContactService from '../services/ContactService.js'

export default class ContactApp extends Component {
    state = {
        contacts: [],
        filterBy:null
    }

    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = async () => {
        const contacts = await ContactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts);
    }

    render() {
        return (
            <section className="">
                <h1 className="">Contacts</h1>
                <Filter onFilter={this.onFilter}></Filter>
                <ContactList contacts={this.state.contacts} ></ContactList>
            </section>
        )
    }
}