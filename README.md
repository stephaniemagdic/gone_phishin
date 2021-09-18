# Gone Phishin
## [Link to Deployed Site]()
## [Link to Project Spec] ()

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Contributors](#contributors)
+ [Reflections & Wins](#reflections-and-wins)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

## Overview
+   When our team had the chance to dive into some independent learning of new technologies and build something creative we chose. We focused on react's built in `context api` for state management and `functional programming principles` to build a UI that to allow Phish fans to find and play any live Phish audio stream.

  - Browse by year.
  - Browse by show.
  - See a list of all tracks broken down by set.
  - Click on any song to play that track.
  - Enter Party Mode and watch the page change in front of you to a more party friendly style. 🤪 🎉 🎛️

## Learning Goals
+ Our team learned several new technologies in the course of a week including React's context API and React hooks.
  - We chose to use React's context API to manage our application state. which allowed us to pass data through the component tree without having to pass props down manually at every level.
  - As the application grows, context will help our application stay organized and keep our code easier to read and manage as we start to use and manipulate shared state values from multiple components.  
  - Currently our application takes advantage of a party mode context called ThemeContext which allows multiple components to listen for state held in our ThemeContext (and shared by numerous components) that can be toggled on and off to change component styling.
  - Take a look at our ThemeContext, our ShowCard and our YearCard to see how state (theme, isPartyMode) is shared between components.
  - ThemeContext allowed us to take advantage of styled components as well, which allows us to write actual CSS in our Javascript 
  @ Nina or is this just inline styling?
+ Our application follows functional programming guidelines.

