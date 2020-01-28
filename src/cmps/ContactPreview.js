import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactPreview extends Component {
    render = () => {
        const { props } = this;
        const { contact } = props
        return (
            < div className="" >
                <Link to={`/contact/${contact._id}`}>
                    <li>
                        <h2>{contact.name}</h2>
                        <img alt="contact" src={`https://robohash.org/${contact.name}.png?set=set4`}></img>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                    </li>
                </Link>
            </div >)
    }
}
