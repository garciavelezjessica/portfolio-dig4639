import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";

//timer function is from instructor video and with their permission (Murray)

export default function TriviaFour() {

  const navigation = useNavigation();
  const backButton = () => {
    navigation.goBack();
  };

  let [current, setCurrent] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const geographyQuestions = [
    {
      prompt: "The Olympics are held every how many years?",
      choices: [
        { testId: 0, text: "4", correct: true },
        { testId: 1, text: "5", correct: false },
        { testId: 2, text: "2", correct: false },
        { testId: 3, text: "3", correct: false },
      ]
    },
    {
      prompt: "How many medals did China win at the Beijing Olympics?",
      choices: [
        { testId: 0, text: "45", correct: false },
        { testId: 1, text: "80", correct: false },
        { testId: 2, text: "20 City", correct: false },
        { testId: 3, text: "100", correct: true },
      ]
    },
    {
      prompt: "What sport is best known as the 'king of sports'?",
      choices: [
        { testId: 0, text: "Hockey", correct: false },
        { testId: 1, text: "Soccer (Football)", correct: true },
        { testId: 2, text: "American Football", correct: false },
        { testId: 3, text: "Golf", correct: false },
      ]
    }
  ];

  const clickChoice = (correct) => {
    if(correct){
      setCurrent(current + 1)
    }
  }

  const styles = StyleSheet.create({
    buttons: {
      height: 100,
      width: 200,
      marginLeft: 900,
    },
    box: {
      height: 300,
      width: 100,
      backgroundColor: '16363d',
      color: '#ffffff',
    },
    screens: {},
    center: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
  });

  return (
    <div>
      <br></br>
       <Button style = {styles.buttons} title = "Home" onPress = {backButton} />
       <h1>Geography Quiz</h1>
       <div>
        <h1 style={styles.center}>{geographyQuestions[current].prompt}</h1>
        <ul>
          {geographyQuestions[current].choices.map((choices) => {
          return (
            <li key={choices.testId} onClick = {() => clickChoice(choices.correct)}>{choices.text}</li>
            )
            })}
            </ul>
       </div>
       
    </div>
  )
}
