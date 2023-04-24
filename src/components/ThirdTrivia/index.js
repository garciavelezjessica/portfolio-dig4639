import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";

//timer function is from instructor video and with their permission (Murray)

export default function TriviaThree() {

  const navigation = useNavigation();
  const backButton = () => {
    navigation.goBack();
  };

  let [current, setCurrent] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const geographyQuestions = [
    {
      prompt: "Which is the largest internal organ in the human body?",
      choices: [
        { testId: 0, text: "Lungs", correct: false },
        { testId: 1, text: "Liver", correct: true },
        { testId: 2, text: "Heart", correct: false },
        { testId: 3, text: "Brain", correct: false },
      ]
    },
    {
      prompt: "How many wings does a mosquito have??",
      choices: [
        { testId: 0, text: "Eight", correct: false },
        { testId: 1, text: "Four", correct: false },
        { testId: 2, text: "Two", correct: true },
        { testId: 3, text: "Six", correct: false },
      ]
    },
    {
      prompt: "'Zr' is the symbol for which chemical element?",
      choices: [
        { testId: 0, text: "Zirconium", correct: true },
        { testId: 1, text: "Zinc", correct: false },
        { testId: 2, text: "Tin", correct: false },
        { testId: 3, text: "Silver", correct: false },
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
