import React, {Component} from 'react';
import { CardStack, Card } from 'react-cardstack';
import NewsCategoryCard from '../components/news_details'

class NewsCategory extends Component
{
    constructor(props) {
        super(props);
        
        // Initial state
        this.state = { open: false };
        
      }
    
      toggle() {
        this.setState({
          open: !this.state.open
        });
      }
    
      render() {
        
        return (
          <div>
          
            <CardStack height={400} width={300} background="#f8f8f8" hoverOffset={25}>

                {this.props.news.map((newsitem, i) =>
                    
                    <Card 
                        key={i}
                        background={newsitem.background}>
                        
                        <NewsCategoryCard onClick={this.props.onCategoryClick.bind(this)} {...newsitem} />
                      
                    </Card>
                    
                )}

		    </CardStack>
           
          </div>

          
        );
      }
    
}

export default NewsCategory;