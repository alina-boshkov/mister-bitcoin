import React, { Component } from 'react';

export default class Filter extends Component {
    state = {
        filterBy: {
            name: '',
            phone: ''
        }
    }
    onChangeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onFilter = () => {
        this.props.onFilter(this.state.filterBy)
    }

    render() {
        return <div>
            <input type="text" placeholder="Name" value={this.state.filterBy.name}
                onChange={this.onChangeInput} name="name" />
            <input type="text" placeholder="Phone" value={this.state.filterBy.phone}
                onChange={this.onChangeInput} name="phone" />
            <button type="primary search-btn" onClick={this.onFilter}>Search</button>
        </div>
    }
}