import React, { Component } from 'react';

import ErrorButton from '../error-button/error-button';
import Spinner from '../spinner';


import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true
  }

  updatePerson = async () => {
    const id = this.props.id;
    if (!id) return; 
    const item = await this.props.getData(id);
    this.setState({
      item,
      loading:false
    })
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if (this.props.id !== prevProps.id) 
    this.updatePerson();
  }
 
  render() {
    const { item, loading  } = this.state;
    
    if (loading) return <Spinner />
    if (item === null) return (<span>Chose person</span>)
    const { name } = item;
    return (
      <div className="person-details card">
        <img className="person-image"
        alt="text"
          src={this.props.getImgUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map (this.props.children, (el) => {
                return React.cloneElement(el, { item })
              })
            }
          </ul>
           <ErrorButton />
        </div>
      </div>
    )
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {Record};