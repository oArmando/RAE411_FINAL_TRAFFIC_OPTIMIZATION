import React, {Component} from 'react';
import './App.css';
import "survey-react/survey.css";
import * as Survey from "survey-react"

 class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }

  onCompleteComponent = () =>{
    this.setState({
      iscCompleted:true
    })
  }



  render(){
    var json = {
      completedHtmlOnCondition: [
       {
        expression: "{question1} = false and {question2} = true",
        html: "You have very small chance of having hearth disease, but better check doctor!"
       },
       {
        expression: "{question1} = true",
        html: "You have 80% chance of having hearth disease. We would suggest to go for doctor's appointment!"
       },
       {
        expression: "{question1} = false and {question2} = false and {question4} = 'item1'",
        html: "You only have 25% chance of hearth diseases, bet better check at doctors! "
       },
       {
        expression: "{question1} = false and {question2} = false and {question4} = 'item2'",
        html: "You have 75% chance of hearth disease. We suggest going go doctors appointment."
       }
      ],
      pages: [
       {
        name: "page1",
        elements: [
         {
          type: "boolean",
          name: "question1",
          title: "Do you have chest pain?"
         },
         {
          type: "boolean",
          name: "question2",
          title: "Please rest for 3 minutes. After resting do 20 sit-ups. Do you have trouble breating?"
         },
         {
          type: "radiogroup",
          name: "question4",
          title: "My gender is:",
          choices: [
           {
            value: "item1",
            text: "Man "
           },
           {
            value: "item2",
            text: "Women"
           }
          ]
         }
        ],
        title: "Hearth disease testing mechanichs for RAE411 Courswork",
        description: "This survey time page is working on WEKA machine learning model and is considered 80% correct. Remember, some random tests on internet, cant tell for sure your health status, so better check at hospital.Model is build based on data 45+ years old, so it may not work on younger people. It is very reduced version of full model as clause scripting in this GUI is nightmare. React-SurveyJS version will be more detailed."
       }
      ],
      triggers: [
       {
        type: "runexpression",
        runExpression: "You "
       },
       {
        type: "runexpression",
        expression: "{question1} = true",
        runExpression: "You "
       }
      ]
     };
    var surveyRender = !this.state.isCompleted ?(
      <Survey.Survey
        json = {json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null

    var onSurveyCompletion = this.state.iscCompleted ? (
      <div> [Thanks for completion!]</div>
    ) : null;
  return (
    <div className="App">
     <div>
       {surveyRender}
       {json.completedHtmlOnCondition.html}

       {onSurveyCompletion}
     </div>
    </div>
  );
}
}
export default App;
