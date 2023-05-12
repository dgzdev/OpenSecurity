const doc = document;
const nav = navigator;

const Innapropriate = {
    
}

class TextAnalizer {
    constructor(text) {
        this.Source = text
    }
    GetWords() {
        return this.Source.split(" ")
    }
    AnalyzeWords(wordsArr){
        for (const w of wordsArr) {
            console.log(w.split(""))
        }
    }
    async GetInnapropriateWords() {
        return await fetch("https://raw.githubusercontent.com/coffee-and-fun/google-profanity-words/main/data/list.txt")
        .then((response) => {
            return response.text()
        })
        .then((data) => {
            return data.split("\n")
        })
    }
    async GetInnapropriateWordsPTBR() {
        return await fetch("https://raw.githubusercontent.com/dunossauro/chat-detox/main/palavras.txt")
        .then((response) => {
            return response.text()
        })
        .then((data) => {
            return data.split("\n")
        })
    }
    async AnalizeText() {
        const InnapropriateWords = await this.GetInnapropriateWords()
        const InnapropriateWordsPTBR = await this.GetInnapropriateWordsPTBR()
        const Words = this.GetWords()
        this.AnalyzeWords(Words)
        //console.log(this.AnalyzeWord())

        // comentario
        var InnapropriateWordsFound = []
        for (const Word of Words) {
            if (InnapropriateWords.includes(Word)) {
                InnapropriateWordsFound.push(Word)
            }
            if (InnapropriateWordsPTBR.includes(Word)) {
                InnapropriateWordsFound.push(Word)
            }
        }
        return InnapropriateWordsFound
    }
}

const TextInput = document.getElementById("verifier-text")
const TextResult = document.getElementById("verifier-result")

function ProcessTextResult(InnapropriateWords) {
    if (InnapropriateWords.length > 0) {
        TextResult.innerHTML = "Innapropriate words found: " + InnapropriateWords.join(", ")
    } else {
        TextResult.innerHTML = "No innapropriate words found"
    }
}

TextInput.addEventListener("keypress", async (e) => {
    var KeyString = e.key.toUpperCase();
    var ContentText = TextInput.value.toLowerCase()
    
    if (KeyString == "ENTER") {
        const Analizer = new TextAnalizer(ContentText)
        
        TextResult.innerText = "Analizing...";
        TextInput.value = "";
        
        ProcessTextResult(await Analizer.AnalizeText())

        return;
    }
})