import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


test("testing the text shown or not",()=>{
  const tree= renderer.create(<App/>).toJSON();
  const checker= tree.children;
  console.log( checker);
    expect(checker[0].type).toEqual('button');


})
test("testing button ",()=>{
  const tree= renderer.create(<App/>).toJSON();
  const checker= tree.children;
  console.log(checker);
     expect(checker[0].children[1]).toEqual('show');


})
