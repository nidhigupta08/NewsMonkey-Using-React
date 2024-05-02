import React, { Component } from 'react'  //rce-react class exxport components
import NewsItem from '../NewsItem'

export class News extends Component {

  constructor(){
    super(); 
    console.log("Hello i m constructor from the News component");
    this.state={ 
      articles:[],
      loading:false,
      page:1
    }
  }
 //it will run after render //async fun apne body ke undr wait kr skta  kch promises resolved hone ka 
 async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=68902f95b70242799ebcb09283687818&page=1pageSize=20"
    //using fetch(takes url) api return promise
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles,totalResults:parseData.totalResults})
  }
  handlePreviousClick= async ()=>{
console.log("previous");
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=68902f95b70242799ebcb09283687818&page=${this.state.page-1}&pageSize=20`
//using fetch(takes url) api return promise
let data= await fetch(url);
let parseData=await data.json();
console.log(parseData);
this.setState({
  page:this.state.page-1,
  articles: parseData.articles})

  }

handleNextClick= async ()=>{
  if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

  }
  else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=68902f95b70242799ebcb09283687818&page=${this.state.page+1}&pageSize=20`;
    //using fetch(takes url) api return promise
    let data= await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
  
      this.setState({
        page:this.state.page+1, articles: parseData.articles
      })
  }

  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}  >
            {/* element.title?element.title.slice(0,41):"" */}
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>      
        })}     
        </div>

        <div className="d-flex justify-content-between">
          {/* &larr; ->> left arrow and right arrow(&rarr;) */}
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePreviousClick}> &larr;Previous</button>
<button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        
        </div>

        


      </div>
    )
  }
}

export default News
