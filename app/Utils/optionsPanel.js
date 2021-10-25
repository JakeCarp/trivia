export function optionsPanel() {
  return `
 <div class="card text-center col-6">
              <div class="row">
                <div class="col-12">
                  <div class="questions-form">
                    <label for="difficulty">Difficulty:</label>
                    <select class="form-select" name="difficulty" id="difficulty" aria-label="difficulty" form="options">
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <label for="category">Category:</label>
                    <select class="form-select" name="category" aria-label="category" form="options">
                      <option value="9">General Knowledge</option>
                      <option value="10">Books</option>
                      <option value="11">Film</option>
                      <option value="12">Music</option>
                      <option value="13">Musicals & Theatres</option>
                      <option value="14">Television</option>
                      <option value="15">Video Games</option>
                      <option value="16">Board Games</option>
                      <option value="17">Science & Nature</option>
                      <option value="18">Computers</option>
                      <option value="19">Mathematics</option>
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>
                      <option value="26">Celebrities</option>
                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                      <option value="29">Comics</option>
                      <option value="30">Gadgets</option>
                      <option value="31">Japanese Anime & Manga</option>
                      <option value="32">Cartoon & Animations</option>
                    </select>
                    <form onsubmit="app.questionsController.getQuestions()" id="options" class="p-4">
                      <button class="btn btn-success " type="submit">Start game</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    `
}