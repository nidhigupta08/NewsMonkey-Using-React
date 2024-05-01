import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    //Destructuring in JavaScript is a convenient way of extracting multiple values from data stored in objects or arrays.
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/04/30/550x309/The-extreme-heat-is-likely-to-continue-in-Odisha-t_1714490088104.jpg": imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
      
    )
  }
}

export default NewsItem
