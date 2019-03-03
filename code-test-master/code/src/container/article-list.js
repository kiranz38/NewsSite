import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectArticle} from '../actions/action_articleselect';

import {filterNews} from '../actions/action_newsfilter';

import { bindActionCreators } from 'redux';

import FullArticle from './edit_article';

import ArticleHeader from '../components/article_header';

import 'airbnb-browser-shims';
import NewsCategory from '../components/news_category';
import ArticleItem from '../components/article_item';

import PerfectScrollbar from 'react-perfect-scrollbar'

//Author :Ram
//Main component which encloses cards and dropdowns of the employees
class Article_List extends Component{

  
    state = {news :[]};
  
 
    
  
   //for toggling the Model popup window on click of employee card
  togglePopUp(article){
    this.props.selectArticle(article);
    this.setState({open : true});
  }
  componentWillMount(){
    
    this.props.filterNews();
    this.setState({news: this.props.newsFilter});
    this.filterArticle.bind(this);
  }

filterArticle(term=null){
    if(term != null){
      // this.props.filterNews();
      
      if(this.props.newsFilter.length > 0){
        var filteredArticle = this.props.newsFilter.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
        this.setState({news : filteredArticle});
      }
    }
    else{
     
      this.setState({news:this.props.newsFilter});
    }
}
 filterEmployee(term,sortTerm=null)
  {
    //if(this.state.employees.length <= 0 && term===''){
    //  this.loadEmployees();
  //  }

    if(!sortTerm)
    {
      var employeeFilter =this.props.employeeFilter.filter((employee)=>employee.firstName.toLowerCase().includes(term.toLowerCase()));
      this.setState({employees : employeeFilter});
    }
    else
    {
      var employeeFilter =this.props.employeeFilter.filter((employee)=>employee.firstName.toLowerCase().includes(term.toLowerCase()));
      var employeeSort = _.sortByOrder(employeeFilter, [sortTerm],['asc']);
      this.setState({employees : employeeSort});
    }
  }
  //for sorting
  sortEmp(term){
      var empList = this.props.employeeList;
      if(!this.props.employeeFilter){
        empList = this.props.employeeList;
      }
     else{
       empList = this.props.employeeFilter;
     }
    this.props.sortEmployee(term,empList);
  }

  //for filtering based on search
  fetchEmployeeSearchList(term,sortTerm = null){
    //this.filterEmployee(term,sortTerm);

    this.filterEmployee(term,sortTerm);
  }

  closePopUp(){
    this.setState({open : false});
  }
  renderNews(){
    var newsList = this.props.newsFilter;

   
    if(newsList.length > 0){
      return (
        
        <NewsCategory news = {newsList} onCategoryClick = {term=>this.filterArticle(term)}/>
        );
    }
    else{
      return ("Loading..Please wait...");
    }
    
  }
  renderArticles(){
    var data = this.props.newsFilter;
    if(this.state.news.length > 0){
      data = this.state.news;
    }
    if(data.length > 0){
        return data.map((articleitem)=>{
          return articleitem.Stories.map((article,i)=>{
            return(<ArticleItem key={i} item={article} onClick={()=>this.togglePopUp(article)}/>);
          });
        });
    }
    else{
      return("Loading...Please wait..");
    }
  }
 
  render(){
    return(
      <div>
      
      <ArticleHeader />
      
       <div className="page-container">
          {this.renderNews()} 
         
          <div className="container">
              
              {this.renderArticles()} 
              
              
          </div>
        
       </div>
       <FullArticle open={this.state} onClosePopUp={()=>this.closePopUp()} />
       </div>
    );
  }
}

//mapping state to props so that it can be later passed on a params to the container
function mapStateToProps(state){
  return ({
    
    newsFilter : state.filterNews
  });
}
//anything returned from here will be as props on the employee-list container
function mapDispatchToProps(dispatch) {
  //whenever this get called, result will be passed to all the reducers
  return bindActionCreators(Object.assign({},{selectArticle:selectArticle},{filterNews:filterNews}) ,dispatch);
}


//making dispatch method as a prop
export default connect(mapStateToProps,mapDispatchToProps)(Article_List);
