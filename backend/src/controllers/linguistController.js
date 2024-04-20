const linguistServices = require("../services/linguistServices")

const users = (req,res) => {
    const newUser = linguistServices.users()
    res.send({status:"OK",data:newUser})
}


const getUser = (req,res) => {
    const user = linguistServices.getUser()
}

const getAllContent = (req,res) => {

}



module.exports = {
    users,
    getUser,
    getAllContent,
}



























// const linguistService = require("../services")

// const getWords = (req,res) => {
//     const allWords = linguistService.getWords();
//     res.send({status:"OK",data:allWords})
// } 

// const getSentences = (req,res) => {
//     const allSentences = linguistService.getSentences();
//     res.send({status:"OK",data:allWords})
// }

// const getPhrases = (req,res) => { 
//     const allPhrases = linguistService.getPhrases();
//     res.send({status:"OK",data:allPhrases})

// }

// const testWords = () => {

// }
// const testPhrases = () => {

// }

// const testSentences = () => {

    // test_id,
    // test_score,
    // test_questions = {
    //     q_no,
    //     ques,
    //     answer,
    // },
    // test_answers = {
    //     user_answer = ""
    //     if answer.tolower() == user_answer.tolower():
    //         q_result = true
    //         score++
    //     else:
    //         q_result = false 

    // },
    // test_results, 


}

const testResult = () => {

    while(test):
        if test.answer == user

}

const getProgress = () => {


    // based on number of words learnt and number of tests taken 
    // if there are 1000 words, phrases and sentences in the database and the user goes through 100 thats 10% progress
    
}

module.exports = {
    getWords,
    getPhrases,
    getSentences,
    testWords,
    testPhrases,
    testSentences,
    getProgress
}