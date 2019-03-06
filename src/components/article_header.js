import React,{Component} from 'react';
import Moment from 'react-moment';

//Author Ram 
//Company Header and Title
class ArticleHeader extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (
      <div className="article-align"><div className="float-right">Bigtincan News</div></div>
      
    );
  }
}

export default ArticleHeader;
