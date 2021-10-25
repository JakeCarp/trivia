import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Question } from "../Models/Question.js"



class QuestionsService {
    constructor() {
        console.log('hello from questions service')
    }

    async getQuestions(data) {
        let defautlUrl = 'api.php?amount=10&'
        let appendUrl = 'category=' + data.category + '&difficulty=' + data.difficulty
        let url = defautlUrl + appendUrl
        console.log(url)
        const res = await api.get(url)
        console.log(res)
        ProxyState.questions = res.data.results.map(q => new Question(q))
    }

    guess(id, guessStr) {
        let question = ProxyState.questions.find(q => q.id == id)
        if (guessStr == question.correctAnswer) {
            window.alert('Correct!')
            question.correct = true
        } else {
            window.alert('Try Again!')
        }
        ProxyState.questions = ProxyState.questions
    }
}



export const questionsService = new QuestionsService()