import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import NewNavbar from '../../Containers/NavBar/Navbar';
import { useLocation } from "react-router-dom";

const Loading = () => (
  <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2">
    <p className="text-xl text-gray-500">Loading...</p>
  </div>
);

// Utility function to format time
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    return formattedTime;
  };

const Test = () => {
  const navigate = useNavigate();
   
  //this code has to be removed
  const [questions, setQuestions] = useState([
    {
      "id": 1,
      "question": "What is the correct translation for 'telephone'",
      "options": [
        "ماء",
        "دراجة",
        "هاتف",
        "شمسية"
      ],
      "answer": "شمسية",
      "description": "HTML (Hypertext Markup Language) is the standard markup language for creating the structure of web pages. It defines the elements and their arrangement, allowing browsers to interpret and display content on the internet."
    },
    {
      "id": 2,
      "question": "How do you say 'Good morning'?",
      "options": [
        "مع السلامة.",
        "صباح الخير.",
        "مساء الخير.",
        "! نهارك سعيد"
      ],
      "answer":  "صباح الخير.",
      "description": "CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML. It controls the presentation, layout, and design of web pages, including aspects such as colors, fonts, and spacing."
    },
    {
      "id": 3,
      "question":"What is the correct translation for 'Please'",
      "options": [
        "أهلا.",
        "مع السلامة.",
        "من فضلك.",
        "يسار"
      ],
      "answer": "من فضلك.",
      "description": "Vue.js is a progressive JavaScript framework used for building user interfaces. It is commonly used on the front end to create dynamic and reactive web applications. Vue.js is known for its simplicity and flexibility."
    },
    {
      "id": 4,
      "question": "How do you say 'Thank You'?",
      "options": [
        "شكرا.",
        "آسف",
        "يمين",
        "مع السلامة."
      ],
      "answer":  "آسف",
      "description": "A web server is a software or hardware component that handles HTTP (Hypertext Transfer Protocol) requests and responses. It serves web pages to clients, manages communication between clients and servers, and facilitates the processing of dynamic content."
    },
    {
      "id": 5,
      "question": "How do you say 'water'",
      "options": [
        "ماء",
        "طبق",
        "ماء",
        "حليب"
      ],
      "answer":  "طبق",
      "description": "AJAX (Asynchronous JavaScript and XML) is a set of web development techniques used to create asynchronous web applications. It allows data to be retrieved from a server asynchronously in the background, enabling dynamic and responsive user interfaces."
    },
    {
      "id": 6,
      "question": "What is the correct translation for 'hospital'",
      "options": [
        "ماء",
        "مستشفى",
        "أسبرين",
        "البيت"
      ],
      "answer":  "أسبرين",
      "description": "Responsive design in web development refers to the practice of creating websites that can adapt and provide an optimal viewing experience across various devices and screen sizes, including desktops, tablets, and mobile phones."
    }
  ]);
  // const [questions, setQuestions] = useState(location?.state);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60); 
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [status, setStatus] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);
   
    setTimerIntervalId(intervalId);

    
    return () => {
      clearInterval(intervalId);
      if (timer <= 0) {
        setShowResult(true);
      }
    };
  }, [timer]);

  const handleAnswerSelect = (questionId, selectedOption) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    clearInterval(timerIntervalId);

    // Calculate score and show result
    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      // Determine the status based on the percentage
      const newStatus = percentage >= 50 ? "Passed" : "Failed";
      setStatus(newStatus);

      setShowResult(true);
      setLoading(false);
    }, 5000);

     // axios.post('/progress', {progress:{progressMade:50,score:score}})
    // .then(response => {
    //   
    // })
    // .catch(error => {
    //  console.log('error is updating score and progress',error)
    // })
  };

  const calculateScore = (userAnswers) => {
    const correctAnswers = questions.map((question) => question.answer);
    let score = 0;
    for (const questionId in userAnswers) {
      if (userAnswers[questionId] === correctAnswers[questionId - 1]) {
        score++;
      }
    }
    return score;
  };

  // Reset states and reload the page
  const restartQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLoading(false);
    setTimer(60); 
    navigate("/test"); 
  };

  return (
    <section>
      <NewNavbar />
      <div className="md:w-9/12 w-[90%] flex md:flex-row flex-col mx-auto">
        {/* question section */}
        <div className="md:w-[70%] w-full">
          <div>
            {questions.map((question, index) => (
              <div
                key={question.id}
                className="m-3 py-3 px-4 shadow-sm border border-gray-200 rounded "
              >
                <p className="flex items-center rounded text-xs p-2 cursor-pointer">
                  <span className="h-8 w-8 bg-[#FCC822] rounded-full flex justify-center items-center text-green-800 mr-3">
                    {index + 1}
                  </span>
                  <p className="">{question.question}</p>
                </p>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  {question.options.map((option, index) => (
                    <div
                      className={`border border-gray-200 rounded text-xs p-2 cursor-pointer ${
                        answers[question.id] === option ? "bg-gray-300" : ""
                      }`}
                      key={option}
                      onClick={() => handleAnswerSelect(question.id, option)}
                    >
                      <p className="text-[10px] mb-1">Option {index + 1}</p>
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={handleSubmit} className="bg-[#FCC822] px-6 py-2 text-white rounded">
              Submit Quiz
            </button>
          </div>
        </div>

        {/* answer  section*/}
        <div className="md:w-[30%] w-full p-4">
          {showResult && (
            <div>
              <h3 className="text-2xl font-medium">Your Score: </h3>
              <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2">
              <h3 className={`text-xl ${status === "Passed" ? "text-green-800" : "text-red-500"}`}>
              {status}
            </h3>
                <h1 className="text-3xl font-bold my-2">
                  {score * 10}
                  <span className="text-slate-800">/60</span>
                </h1>
                <p className="text-sm flex justify-center items-center gap-2">
                  Total Time:{" "}
                  <span className="text-xl text-orange-500">
                    {formatTime(60 - timer)}
                    <span className="text-xs">sec</span>
                  </span>
                </p>
              </div>
              <button
                onClick={restartQuiz}
                className="bg-[#FCC822] text-white w-full py-2 rounded mt-16"
              >
                Restart
              </button>
            </div>
          )}

          {loading && <Loading />}
        </div>
      </div>
    </section>
  );
};


export default Test;