import React from 'react';
//Author Ram Date : 7/10/2018
export function selectEmployee(employee){
  //select book is an action creator which return an object with type property
  return {
    type:'EMPLOYEE_SELECTED',
    payload: employee
  }
}
