import React, { Component } from 'react';

import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';


import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: false,
    image:null,
    error: false
  }

  updatePerson = async () => {
    const id = this.props.itemId;
    if (!id) return; 
    
    try {
      const item = await this.props.getData(id);
      this.setState({
      item,
      loading:false,
      image: this.props.getImgUrl(id)
    })
    }
    catch {
      this.setState({error: true})
    }

  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if (this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData ) {
      this.updatePerson();
      this.setState({loading:true})
    }
  }
 
  render() {
    const { item, loading, image, error } = this.state;
    if (error) return <ErrorIndicator />
    if (loading) return <Spinner />
    if (item === null) return (<span>Chose person</span>)
    const { name } = item;
    return (
      <div className="person-details card">
        <img className="person-image"
        alt="text"
          src={image} />

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