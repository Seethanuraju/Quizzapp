import React, { useState } from 'react'
import './App.css'
import Final from './final'

export default function App() {
  const ques=[
              "What is the capital of India?",
              "Who is the CM of Andhar Pradesh?",
              "Who is the god of cricket?",
              "Who is president of India?",
              "Who is the PM of India?" 
  ]
  const option=[
      {
        optionvalue:[
                      "Hyderbad",
                     "Mumbai",
                     "New Delhi",
                     "None of the Above"

        ]
      },
      {
        optionvalue:[
          "Pawan Kalayan",
          "Chandara Babu",
          "Revant Reddy",
          "P A Palu"
         ]
      },
      {
        optionvalue:[
          "Sachin Tendulakar",
          "M S Dhoni",
          "Sheewag",
          "Gowtham Gambir"
         ]
      },
      {
        optionvalue:[
          "Sonia Gandhi",
          "Narendra Modi",
          "Pawan kalyan",
          "Draupadi Murmu"
         ]  
      },
      {
        optionvalue:[
          "Revanth Reddy",
          "Narendra Modi",
          "Amit Shah",
          "Rahul Gandhi"
         ]  
      }
  ]
  const [count,setCount]=useState(0)
  const[score,setScore]=useState(0)

  const correctanswer=[
    "New Delhi",
    "Chandara Babu",
    "Sachin Tendulakar",
     "Draupadi Murmu",
     "Narendra Modi"
  ]

  let temp;
  function CheckAnswer(index){

   /* if(option[count].optionvalue[index]=="New Delhi"){
      temp=score+1
      setScore(temp)
      console.log(score)
      console.log(temp)
    }
    if(option[count].optionvalue[index]=="Chandara Babu"){
      temp=score+1
      setScore(temp)
      console.log(score)
      console.log(temp)
    }
    if(option[count].optionvalue[index]=="Sachin Tendulakar"){
      temp=score+1
      setScore(temp)
      console.log(score)
      console.log(temp)
    }
    if(option[count].optionvalue[index]=="Draupadi Murmu"){
      temp=score+1
      setScore(temp)
      console.log(score)
      console.log(temp)
    }
    if(option[count].optionvalue[index]== "Narendra Modi"){
      temp=score+1
      setScore(temp)
      console.log(score)
      console.log(temp)
    }*/
    if(option[count].optionvalue[index]===correctanswer[count]){
     setScore(score+1)
    }
  }
  const change=(index)=>
    {
      CheckAnswer(index);
    setCount(count+1)
  }
  if(count<=4){
  return (
    <>
    <div className='container'>
      <h1>My Quizz Application</h1>
      <div className='card'>
        <h2>Question No:{count+1}/{ques.length}</h2>
        <h1>{ques[count]}</h1>
        <div className='option'>
          {option[count].optionvalue.map((x,index)=><li key={index} onClick={()=>{change(index)}}id={index}>{x}</li>)}
        </div>
      </div>
    </div>
    </>
  )
}
else{
  return(
    <>
    <center>
      <Final/>
    <h3 id='answer'>Your score:{score}/{ques.length}</h3>
    </center>
    
    </>
  );
}
}
