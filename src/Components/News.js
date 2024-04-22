import React, { Component } from 'react'  //rce-react class exxport components
import NewsItem from '../NewsItem'

export class News extends Component {

  articles =[
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "POLITICO.eu"
      },
      "author": "Joshua Posaner",
      "title": "Blinken heads back to China, with a threat over military aid to Russia - POLITICO Europe",
      "description": "Washington accuses Beijing of sending Moscow everything from missile and drone components to machine tools.",
      "url": "https://www.politico.eu/article/antony-blinken-head-back-china-armed-threat-russian-military-aid/",
      "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/04/21/11825858-scaled.jpg",
      "publishedAt": "2024-04-21T10:20:00Z",
      "content": "Reports have long circulated that China has been sending everything from vehicles to bullet-proof vests to Russia for use in its war against Ukraine, with the dual-use technology having both civilian… [+1105 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Caroline Frost",
      "title": "Spice Girls’ Musical Reunion Caught On Camera By An Excited David Beckham - Deadline",
      "description": "The Spice Girls performed 'Stop' as they partied to celebrate Victoria Beckham's 50th birthday.",
      "url": "http://deadline.com/2024/04/spice-girls-stop-musical-reunion-filmed-excited-david-beckham-1235891039/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/04/Screenshot-2024-04-21-at-10.43.28.png?w=1024",
      "publishedAt": "2024-04-21T09:58:00Z",
      "content": "The Spice Girls reunited Saturday evening for an impromptu musical reunion, caught on camera by David Beckham.\r\nThe former footballer’s wife Victoria was celebrating her 50th birthday in London with … [+1431 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Page Six"
      },
      "author": "Sara Whitman",
      "title": "Matty Healy's aunt implies Taylor Swift's 'TTPD' tracks don't tell full story about romance: We know 'more about what went on' - Page Six",
      "description": "“Nothing surprises him any more,” his aunt Debbie Dedes told the Daily Mail. “He will not be surprised by the song. Him and her know what went on.”",
      "url": "https://pagesix.com/2024/04/20/entertainment/matty-healys-aunt-implies-taylor-swifts-ttpd-tracks-dont-tell-full-story-about-romance/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/04/80424900.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-04-21T00:16:00Z",
      "content": "One of Matty Healy’s relatives has come to his defense.\r\nAs fans speculated that several of Taylor Swift’s songs from her brand new album, “The Tortured Poets Department,” referenced her brief romanc… [+4152 chars]"
    }
  ]
  constructor(){
    super(); 
    console.log("Hello i m constructor from the News component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
 
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey- Top headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}  >
                   <NewsItem title={element.title.slice(0,41)} description={element.description.slice(0,55)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>      
        })}     
        </div>
      </div>
    )
  }
}

export default News
