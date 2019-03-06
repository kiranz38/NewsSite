import React from 'react';
//Author Ram 
export function selectArticle(article){
  //select book is an action creator which return an object with type property
  return {
    type:'ARTICLE_SELECTED',
    payload: article
  }
}
