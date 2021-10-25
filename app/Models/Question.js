import { generateId } from "../Utils/generateId.js"


export class Question {
    constructor(data) {
        this.id = this.id || generateId()
        this.correct = this.correct || false
        this.question = data.question
        this.catagory = data.catagory
        this.difficulty = data.difficulty
        this.correctAnswer = data.correct_answer
        this.Answers = [...data.incorrect_answers, data.correct_answer]
    }


    get Template() {
        return `
        <div class="card text-center col-4">
            <div class="card-body">
              <p class="card-title">${this.question}</p>
              <div class="row">
                ${this.makeButtons()}
              </div>
            </div>
        </div>
        `
    }

    makeButtons() {
        let template = ''
        if (!this.correct) {
            this.Answers.forEach(a => {
                console.log(a)
                template += `<button onclick="app.questionsController.guess('${this.id}','${a}')">${a}</button>`
            })
        } else {
            template += `<p><b>${this.correctAnswer}</b></p>`
        }
        return template
    }
}

