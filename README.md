# Speed Typing Test

This is a **Speed Typing Test** application built using **HTML, CSS, and JavaScript**. The application helps users improve their typing speed and accuracy by providing a random quote to type within a set time limit. The app calculates the time taken to type the quote and provides feedback on the user's performance.

## Features

- **Random Quote Generation**: Fetches a random quote from an API for the user to type.
- **Timer**: Tracks the time taken to type the quote.
- **Result Feedback**: Displays whether the user typed the quote correctly and the time taken.
- **Reset Functionality**: Allows the user to reset the test and start over.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **JavaScript**: For fetching quotes, handling the timer, and validating user input.
- **Bootstrap**: For responsive design and pre-built components like the spinner.
- **Google Fonts**: For custom typography.

## How to Use

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/lpkumarreddy/Speed-Typing-Test-App.git
   ```
2. Open the `index.html` file in your browser.
3. A random quote will be displayed. Start typing the quote in the text area.
4. Click **Submit** to check your result.
5. Click **Reset** to start a new test.

## Project Structure

- **`index.html`**: The main HTML file containing the structure of the application.
- **CSS Styling**: Custom styles are applied to the application for a unique look and feel.
- **JavaScript**: Handles fetching quotes, managing the timer, and validating user input.
- **Bootstrap Components**: Used for responsive design and the loading spinner.

## Screenshots

### Home Page
![Home Page](https://i.ibb.co/39VZ31Qw/Screenshot-2025-02-21-032036.png)

### Typing Test
![Typing Test](https://i.ibb.co/Q71FqS7W/Screenshot-2025-02-21-032314.png)

### Result Feedback
![Result Feedback](https://i.ibb.co/qMR36SNp/Screenshot-2025-02-21-032223.png)

## API Used

The application uses the following API to fetch random quotes:
```
https://apis.ccbp.in/random-quote
```

## Code Explanation

### HTML Structure
- The `textarea` element is used for user input.
- The `p` element displays the random quote.
- The `button` elements are used for submitting and resetting the test.

### JavaScript Functionality
- **`generateQuote`**: Fetches a random quote from the API and displays it.
- **`startTimer`**: Starts the timer when the test begins.
- **`stopTimer`**: Stops the timer when the user submits the test.
- **`checkResult`**: Compares the user's input with the displayed quote and displays the result.
- **`resetTest`**: Resets the test by fetching a new quote and clearing the input and result.

### CSS Styling
- Custom styles are applied to the timer, text area, and buttons.
- Google Fonts are used for typography.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## MIT License

```plaintext
MIT License

Copyright (c) 2025 LINGAM PAVAN KUMAR REDDY 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.
