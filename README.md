# JS-Random-Password-Generator

# Application Description
This is a single page web application which uses a series of inputs from the user to
randomly generate and display a strong password. Through a series of prompts and confirmation
popups, the user selects:
-how many characters to include in the password
-whether to use upper and/or lower case letters
-should the password should include numbers
-should it contain special characters

# Application Notes
The app's logic is implimented in client-side javascript, all of which is contained in the
code file "script.js". In order to create a psuedorandom sequence of characters based on user
inputs, it uses the "random" function from the JS Math library. User input is taken in via the
built-in "prompt" and "confirm" functions. Most of the validation logic for this application is
containted in the "generatePassword" function.

# Link to Deployed Application
https://geotecdev.github.io/JS-Random-Password-Generator

# Link to Github Repository
https://github.com/geotecdev/JS-Random-Password-Generator

# Licence

MIT License

Copyright (c) 2021 Mike Ruane (geotecdev)

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
