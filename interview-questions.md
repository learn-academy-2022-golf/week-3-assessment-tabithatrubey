# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a successful hybrid of running JavaScript and HTML flavored langauges together in React. This allows for programmers to write logical and format all on one page instead of having different tabs for each respective language. One syntax difference between HTML and JSX is their naming conventions; HTML uses attribute, while JSX uses className. 

Researched answer: JSX is used in React to display what the UI (user interface) will look like. It is an extension of JavaScript and allows programmers the ability to display logic and markup languages on a single page for successful deployment. Although JSX is not required in React, many programmers find it beneficial because of the reported errors and warning messages. There are many differences between JSX and HTML. HTML has optional forward slashes in its closing tag, whereas the forward slash is required to close a tag in JSX. Additionally, event listeners in JSX are written in camelCase, like onClick, whereas they are written in all lowercase letter, like onclick, in HTML. 

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager for jest. Yarn manages all files and snippets of code required to run the jest test properly. Yarn is responsible for deploying a jest test to allow a programmer to see where their tests fail or pass and how to remediate. The files that are modified in a React application when you run the command yarn in your terminal are pacakge.json and yarn.lock. 

Researched answer: Yarn was created by Facebook in 2016 becuase of the significant amount of dependencies and the requirement for all of them to work together in order to properly run properly. Yarn is a package manager that manages and installs the dependency files, and provides the proper terminal commands to run tests. To install dependencies, the command $yarn add jest should be ran. This command creates a directory, called node_modules and creates the files package.json and yarn.lock, which are also the files modified in a React app when the yarn command is ran in the terminal. 

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function without a name that can be used as an argument for another function. 

Researched answer: An anonymous function is a function without a name and is self-invoking. An anonymous function is best identified with the arrow syntax let add = () => {}. Similar to a traditional function expression, an anonymous function must be declared before it is invoked; it is not hoisted in JavaScript. Anonymous functions do not have their own "this" property, as they inherently assume the scope as their unwritten "this". Lastly, anonymous functions can create a more condensed function with the same functionality as a traditional function. 

4. What is the difference between state values and props in React?

Your answer: While they both store data, the difference between state values and props in React are state values can constantly be changed depending on user input, whereas, props, short for properties, cannot be changed as they are read-only. 

Researched answer: Props pass data back and forth between components, similar to parameters in a function as they pass data to a function. However, state is contained inside the component, like a variable that has been defined in a function. Props are external, state is internal. State values can constantly be changed, props cannot becuase they are only read-only.

5. What is the DOM?

Your answer: DOM is short for Document Object Model and displays the webpage for the corresponding code stored in React.

Researched answer: DOM is the visual representation of the data stored in React. DOM allows programmers to visualize a webpage and modify it's structure, logic, or style. Although DOM is not a scripting language, without it JavaScript programmers would not have the ability to view an example of a webpage or an HTML document, or even their corresponding components. The DOM represents a webpage via an object sequence, and is so important because it allows a programmer to add new or modify existing objects in JavaScript to alter a webpage.

6. STRETCH: Which is the difference between a div and a span?

Your answer: I believe the difference between a div and a span is div creates a container block for styling purposes and organization, whereas a span encapsulates the entire page of code. 

Researched answer: While both div and span section off like parts of a webpage, they are have different functionality purposes. A div creates block-level organization like <div>
                                    <h1>Hello World!</h1>
                                    <p>So long, World!</p>
                                    </div>

However, a span is used for inline organization. Span adds a styling element to a specific line of code before the outside tag closes. 
<p>First paragraph is <span id ="new text> and written here</span>for now</p>

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming (OOP) manages the complexity of massive software systems. OOP organizes large software systems around objects or data instead of logic and functions. OOP controls the objects that need to be altered, rather than the functionality of them. 

2. Ruby: Ruby is an object-oriented language. Due to Ruby's sole focus on objects, its common slogan is "everything is an object". ALL data types in Ruby are objects, which means its data types are instances of classes. Mac's are pre-programmed with Ruby, so to run Ruby in a Mac, open the terminal and run the command $irb. 

3. Implicit return: An implicit return is used in Ruby. If no return is written, the previous line's method value will be returned instead. 

4. Ruby blocks: Ruby blocks are anonymous functions sent to a method to render an outcome, if a method requires more data to alter the method action. Ruby blocks are written in between the keywords 'do' and 'end'.

5. Ruby hashes: A conglomoration of unique keys and their corresponding values.
