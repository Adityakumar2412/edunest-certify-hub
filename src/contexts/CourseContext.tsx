
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  language: string;
  image: string;
  quiz: Question[];
}

interface CourseContextType {
  courses: Course[];
  getCourse: (id: string) => Course | undefined;
  loading: boolean;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch with mock data
    const mockCourses: Course[] = [
      {
        id: "javascript-basics",
        title: "JavaScript Fundamentals",
        description: "Learn the basics of JavaScript programming language including variables, data types, functions, and control flow.",
        language: "JavaScript",
        image: "/placeholder.svg",
        quiz: generateQuestions("JavaScript")
      },
      {
        id: "python-basics",
        title: "Python for Beginners",
        description: "Start your programming journey with Python, one of the most popular and beginner-friendly programming languages.",
        language: "Python",
        image: "/placeholder.svg",
        quiz: generateQuestions("Python")
      },
      {
        id: "html-css",
        title: "HTML & CSS Essentials",
        description: "Build the foundation of web development with HTML structure and CSS styling techniques.",
        language: "HTML/CSS",
        image: "/placeholder.svg",
        quiz: generateQuestions("HTML/CSS")
      },
      {
        id: "java-programming",
        title: "Java Programming",
        description: "Master object-oriented programming with Java, a versatile language for desktop, web, and mobile applications.",
        language: "Java",
        image: "/placeholder.svg",
        quiz: generateQuestions("Java")
      },
      {
        id: "react-fundamentals",
        title: "React Fundamentals",
        description: "Learn to build interactive user interfaces with React, a popular JavaScript library.",
        language: "React",
        image: "/placeholder.svg",
        quiz: generateQuestions("React")
      },
      {
        id: "cpp-programming",
        title: "C++ Programming",
        description: "Get started with C++, a powerful language used for systems programming, game development, and more.",
        language: "C++",
        image: "/placeholder.svg",
        quiz: generateQuestions("C++")
      }
    ];

    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  const getCourse = (id: string): Course | undefined => {
    return courses.find((course) => course.id === id);
  };

  return (
    <CourseContext.Provider value={{ courses, getCourse, loading }}>
      {children}
    </CourseContext.Provider>
  );
}

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};

// Helper function to generate random questions for each course
function generateQuestions(language: string): Question[] {
  const questions: Record<string, Question[]> = {
    "JavaScript": [
      {
        id: 1,
        text: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x = 5;", "variable x = 5;", "x := 5;", "int x = 5;"],
        correctOption: 0
      },
      {
        id: 2,
        text: "Which method adds an element at the end of an array?",
        options: ["push()", "append()", "addToEnd()", "insert()"],
        correctOption: 0
      },
      {
        id: 3,
        text: "What does the === operator do in JavaScript?",
        options: [
          "Checks for equality, allowing type conversion",
          "Checks for equality without type conversion",
          "Assigns a value",
          "Compares memory addresses"
        ],
        correctOption: 1
      },
      {
        id: 4,
        text: "What is a closure in JavaScript?",
        options: [
          "A way to close the browser",
          "A function with access to its outer function's scope",
          "A method to end a loop",
          "A way to close a connection"
        ],
        correctOption: 1
      },
      {
        id: 5,
        text: "Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Integer", "Object"],
        correctOption: 2
      },
      {
        id: 6,
        text: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "It refers to the current HTML document",
          "It refers to the current function",
          "It refers to the current object",
          "It refers to the parent object"
        ],
        correctOption: 2
      },
      {
        id: 7,
        text: "What does JSON stand for?",
        options: [
          "JavaScript Object Notation",
          "JavaScript Oriented Navigation",
          "JavaScript Online Network",
          "Java Standard Object Notation"
        ],
        correctOption: 0
      },
      {
        id: 8,
        text: "Which method removes the last element from an array?",
        options: ["pop()", "remove()", "delete()", "slice()"],
        correctOption: 0
      },
      {
        id: 9,
        text: "How do you create a function in JavaScript?",
        options: [
          "function myFunction() {}",
          "create myFunction() {}",
          "new Function() {}",
          "def myFunction() {}"
        ],
        correctOption: 0
      },
      {
        id: 10,
        text: "How do you access the first element of an array named 'arr'?",
        options: ["arr(0)", "arr.first", "arr[0]", "arr.get(0)"],
        correctOption: 2
      }
    ],
    "Python": [
      {
        id: 1,
        text: "What symbol is used for comments in Python?",
        options: ["//", "/* */", "#", "<!--"],
        correctOption: 2
      },
      {
        id: 2,
        text: "Which of the following is a mutable data type in Python?",
        options: ["String", "Tuple", "List", "None of the above"],
        correctOption: 2
      },
      {
        id: 3,
        text: "What does the len() function do in Python?",
        options: [
          "Formats a string",
          "Returns the length of an object",
          "Converts to lowercase",
          "Creates a new list"
        ],
        correctOption: 1
      },
      {
        id: 4,
        text: "How do you create a function in Python?",
        options: [
          "function myFunction():",
          "def myFunction():",
          "create myFunction():",
          "func myFunction():"
        ],
        correctOption: 1
      },
      {
        id: 5,
        text: "Which method adds an item to the end of a list?",
        options: ["append()", "add()", "insert()", "extend()"],
        correctOption: 0
      },
      {
        id: 6,
        text: "What is the correct way to create a dictionary in Python?",
        options: [
          "{key: value}",
          "dict(key = value)",
          "array(key => value)",
          "map<key, value>"
        ],
        correctOption: 0
      },
      {
        id: 7,
        text: "Which statement is used for decision making in Python?",
        options: ["for", "while", "if", "switch"],
        correctOption: 2
      },
      {
        id: 8,
        text: "What does the import statement do in Python?",
        options: [
          "Creates a new module",
          "Updates existing modules",
          "Allows you to use functions from other modules",
          "Exports functions to other modules"
        ],
        correctOption: 2
      },
      {
        id: 9,
        text: "What is the output of print(2**3) in Python?",
        options: ["6", "8", "5", "Error"],
        correctOption: 1
      },
      {
        id: 10,
        text: "How do you create a virtual environment in Python?",
        options: [
          "python createvenv",
          "python -m venv myenv",
          "pip install venv",
          "virtualenv --create"
        ],
        correctOption: 1
      }
    ],
    "HTML/CSS": [
      {
        id: 1,
        text: "What does HTML stand for?",
        options: [
          "Hypertext Markup Language",
          "Hyperlink Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Technical Meta Language"
        ],
        correctOption: 0
      },
      {
        id: 2,
        text: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correctOption: 2
      },
      {
        id: 3,
        text: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "color", "background-color", "background"],
        correctOption: 2
      },
      {
        id: 4,
        text: "Which CSS property controls the text size?",
        options: ["text-size", "font-style", "font-size", "text-style"],
        correctOption: 2
      },
      {
        id: 5,
        text: "How do you select elements with the class name 'test' in CSS?",
        options: [".test", "#test", "test", "*test"],
        correctOption: 0
      },
      {
        id: 6,
        text: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctOption: 1
      },
      {
        id: 7,
        text: "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        correctOption: 1
      },
      {
        id: 8,
        text: "Which CSS position value creates a positioning context relative to the viewport?",
        options: ["static", "relative", "absolute", "fixed"],
        correctOption: 3
      },
      {
        id: 9,
        text: "What is the correct CSS syntax to select an element with id 'demo'?",
        options: ["demo", ".demo", "#demo", "*demo"],
        correctOption: 2
      },
      {
        id: 10,
        text: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctOption: 2
      }
    ],
    "Java": [
      {
        id: 1,
        text: "What is the entry point of a Java application?",
        options: [
          "start() method",
          "main() method",
          "run() method",
          "execute() method"
        ],
        correctOption: 1
      },
      {
        id: 2,
        text: "Which keyword is used to define a class in Java?",
        options: ["struct", "class", "object", "define"],
        correctOption: 1
      },
      {
        id: 3,
        text: "What is the access modifier with the widest scope in Java?",
        options: ["private", "protected", "public", "default"],
        correctOption: 2
      },
      {
        id: 4,
        text: "Which of the following is not a primitive data type in Java?",
        options: ["int", "boolean", "String", "double"],
        correctOption: 2
      },
      {
        id: 5,
        text: "What is the correct way to create an object in Java?",
        options: [
          "Object obj = new Object();",
          "new Object obj;",
          "Object obj();",
          "create Object obj;"
        ],
        correctOption: 0
      },
      {
        id: 6,
        text: "Which keyword is used to inherit a class in Java?",
        options: ["inherits", "extends", "implements", "using"],
        correctOption: 1
      },
      {
        id: 7,
        text: "What does JVM stand for?",
        options: [
          "Java Virtual Machine",
          "Java Visual Memory",
          "Java Value Method",
          "Java Variable Module"
        ],
        correctOption: 0
      },
      {
        id: 8,
        text: "Which Java keyword is used to define a constant?",
        options: ["constant", "static", "final", "const"],
        correctOption: 2
      },
      {
        id: 9,
        text: "Which statement is used to handle exceptions in Java?",
        options: ["try-catch", "exception", "handle", "error-catch"],
        correctOption: 0
      },
      {
        id: 10,
        text: "What is the output of System.out.println(5 / 2) in Java?",
        options: ["2.5", "2", "2.0", "Error"],
        correctOption: 1
      }
    ],
    "React": [
      {
        id: 1,
        text: "What function allows you to update state in a React functional component?",
        options: ["this.state()", "useState()", "setState()", "reactState()"],
        correctOption: 1
      },
      {
        id: 2,
        text: "What is JSX in React?",
        options: [
          "A JavaScript library",
          "A syntax extension that allows HTML in JavaScript",
          "A testing framework",
          "A database for React"
        ],
        correctOption: 1
      },
      {
        id: 3,
        text: "What method is used to render a React component to the DOM?",
        options: ["ReactDOM.create()", "ReactDOM.render()", "React.render()", "React.mount()"],
        correctOption: 1
      },
      {
        id: 4,
        text: "Which hook performs side effects in React components?",
        options: ["useEffect()", "useSideEffect()", "useImpact()", "useChange()"],
        correctOption: 0
      },
      {
        id: 5,
        text: "How do you pass data from a parent to a child component in React?",
        options: ["Using state", "Using props", "Using context", "Using Redux"],
        correctOption: 1
      },
      {
        id: 6,
        text: "What is the correct way to create a functional component in React?",
        options: [
          "function Component() { return <div>Component</div>; }",
          "class Component { render() { return <div>Component</div>; } }",
          "const Component = () => { <div>Component</div> }",
          "create Component() { return <div>Component</div>; }"
        ],
        correctOption: 0
      },
      {
        id: 7,
        text: "What method is called when a component is first mounted in the DOM?",
        options: [
          "componentDidCreate()",
          "componentDidMount()",
          "componentMounted()",
          "onComponentMount()"
        ],
        correctOption: 1
      },
      {
        id: 8,
        text: "What is the purpose of keys in React lists?",
        options: [
          "To style the list items",
          "To uniquely identify elements for efficient updates",
          "To sort the list items",
          "To enable list item deletion"
        ],
        correctOption: 1
      },
      {
        id: 9,
        text: "Which hook replaces componentDidUpdate, componentDidMount, and componentWillUnmount?",
        options: ["useUpdate()", "useEffect()", "useLifecycle()", "useMount()"],
        correctOption: 1
      },
      {
        id: 10,
        text: "What is the React context used for?",
        options: [
          "For styling components",
          "For passing data without prop drilling",
          "For handling HTTP requests",
          "For defining component templates"
        ],
        correctOption: 1
      }
    ],
    "C++": [
      {
        id: 1,
        text: "Which operator is used for dynamic memory allocation in C++?",
        options: ["malloc", "alloc", "new", "create"],
        correctOption: 2
      },
      {
        id: 2,
        text: "What is the correct way to declare a class in C++?",
        options: [
          "class MyClass { };",
          "struct MyClass { };",
          "type MyClass { };",
          "object MyClass { };"
        ],
        correctOption: 0
      },
      {
        id: 3,
        text: "Which C++ keyword is used to define a constant?",
        options: ["define", "const", "static", "fixed"],
        correctOption: 1
      },
      {
        id: 4,
        text: "What is the extension of C++ source files?",
        options: [".c", ".cp", ".cpp", ".cx"],
        correctOption: 2
      },
      {
        id: 5,
        text: "Which of the following is a valid C++ comment?",
        options: ["/* Comment */", "// Comment", "# Comment", "Both A and B"],
        correctOption: 3
      },
      {
        id: 6,
        text: "What is the correct way to create an object of a class in C++?",
        options: [
          "MyClass obj = create MyClass();",
          "obj = new MyClass();",
          "MyClass obj;",
          "obj = class MyClass;"
        ],
        correctOption: 2
      },
      {
        id: 7,
        text: "Which operator is used for pointer dereferencing in C++?",
        options: ["&", "*", "->", "@"],
        correctOption: 1
      },
      {
        id: 8,
        text: "What does the 'virtual' keyword do in C++?",
        options: [
          "Creates a virtual machine",
          "Allows function overriding in derived classes",
          "Makes a class abstract",
          "Creates a template function"
        ],
        correctOption: 1
      },
      {
        id: 9,
        text: "What is the correct way to include the iostream header in C++?",
        options: [
          "#include <iostream>",
          "#include \"iostream\"",
          "import iostream;",
          "using iostream;"
        ],
        correctOption: 0
      },
      {
        id: 10,
        text: "Which C++ data structure allows fast lookup by key?",
        options: ["vector", "array", "map", "list"],
        correctOption: 2
      }
    ]
  };

  return questions[language] || [];
}
