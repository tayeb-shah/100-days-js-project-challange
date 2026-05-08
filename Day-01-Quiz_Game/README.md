# Quiz Game

An interactive and beginner-friendly Quiz Game built using HTML, CSS, and JavaScript.  
This project was created to practice real-world JavaScript concepts such as DOM manipulation, event handling, functions, dynamic rendering, and clean code organization.

The application allows users to start the quiz, answer multiple-choice questions, view their score instantly, and restart the game smoothly without refreshing the page.

This project helped me understand how logic flows inside a real interactive web application and improved my confidence in structuring JavaScript code properly.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

# Difficulties I Faced During Development

While building this project, I faced several challenges that helped me learn JavaScript more deeply.

Some difficulties included:

- Understanding how function declarations work
- Calling functions at the correct time
- Managing question indexes dynamically
- Updating the UI using JavaScript
- Handling button click events properly
- Preventing repeated answer selections
- Keeping the code clean and organized

One of the biggest challenges was understanding when and where to call functions.  
For example:

```js
startButton.addEventListener("click", startQuiz);
```

At first, I was confused about why we pass the function name instead of calling it immediately.  
Later, I understood that JavaScript waits for the click event first, then executes the function when needed.

This project helped me understand many small but important JavaScript tricks and concepts.

---

# 📈 Improvements I Gained From This Project

After completing this project, I became more comfortable with:

- Function declarations
- Calling functions dynamically
- DOM manipulation
- Event handling
- Writing cleaner code
- Structuring JavaScript logic properly
- Separating UI and logic
- Problem-solving while debugging

I also improved my confidence in building interactive frontend projects independently.

---

# 🧠 Simple Logic Flow

The project follows a very simple and structured logic flow.

## Quiz Start Logic

```js
startButton.addEventListener("click", startQuiz);
```

- User clicks the Start button
- The `startQuiz()` function runs
- The start screen hides
- The quiz screen appears
- The first question loads dynamically

---

## Answer Selection Logic

```js
optionButton.addEventListener("click", selectAnswer);
```

- User selects an answer
- JavaScript checks if the answer is correct
- Score updates automatically
- Next question loads dynamically

---

## Restart Logic

```js
restartButton.addEventListener("click", restartQuiz);
```

- User clicks restart
- Score resets
- Question index resets
- Quiz starts again from the beginning

---

# Special Credit

Special thanks to youtube channel **Codesistency** for inspiration and learning resources that helped me improve my development journey.

---

# ⭐ Enjoy the Project?

If you found this project helpful or interesting, please consider giving the repository a **star** ⭐

Your support motivates me to build more projects and continue improving as a developer.

---

# Author

**Tayeb Shah**  
Frontend Developer & Learner