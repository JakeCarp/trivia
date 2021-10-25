import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { optionsPanel } from "../Utils/optionsPanel.js"
//private
function _showOptions() {
    let options = optionsPanel()
    document.getElementById('app').innerHTML = options
}
function _drawQuestions() {
    let template = ''
    ProxyState.questions.forEach(q => template += q.Template)
    document.getElementById('app').innerHTML = template
}

export class QuestionsController {
    constructor() {
        ProxyState.on('questions', _drawQuestions)
        _showOptions()
    }

    async getQuestions() {
        window.event.preventDefault()
        let form = window.event.target
        let data = {
            difficulty: form.difficulty.value,
            category: form.category.value
        }
        try {
            await questionsService.getQuestions(data)
        } catch (error) {
            console.error(error)
        }
    }
    guess(id, guessStr) {
        questionsService.guess(id, guessStr)
    }
}
