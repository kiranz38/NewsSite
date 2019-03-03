import React , {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Moment from 'react-moment';
import 'airbnb-browser-shims';

//Author :Ram
//Component to show article details
class FullArticle extends Component {
  constructor(props){
    super(props);
    this.state = {open:true};
    const {open} = this.props.open;
  }

  onOpenModel = () => {this.setState({open:true})};
  onCloseModel = () => {
    this.props.onClosePopUp();
  };

  render(){
    const {open} = this.props.open;
    if(!this.props.activeArticle){
      return (<div></div>);
    }
    return(
      <div >
      <Modal open={open} onClose={this.onCloseModel} center>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" style={{height:'140px',width:'140px'}} src={this.props.activeArticle.ThumbNail} />
        </div>
        <div className="media-body">
          <div className="media-heading"><h4>{this.props.activeArticle.Title}</h4></div>
          <div>Sub Title: {this.props.activeArticle.SubTitle}</div>
          <div>Author: {this.props.activeArticle.AuthorName}</div>
          <div>Published Date : <Moment format="MM-DD-YYYY" date={this.props.activeArticle.PublishDate} /></div>
          {this.props.activeArticle.TextContent}
        </div>
      </div>
      </Modal>
      </div>
    );
  }

  onOpenModal = () =>{
    this.setState ({open : true});
  }

}

function mapStateToProps(state){
  return{
    activeArticle : state.activeArticle
  };
}

export default connect(mapStateToProps)(FullArticle);
