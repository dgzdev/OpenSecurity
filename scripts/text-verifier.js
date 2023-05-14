const doc = document;
const nav = navigator;

class TrieNode {
    constructor(){
        this.children = []
        this.isWord = false
    }
    //(parameter) word :: string
    addWord(root, word){
        let cur = this
        //console.log(cur)
        for (const c of word){
            console.log(c)
            if(!cur.children.includes(c)){
                //cur.children[c] = new TrieNode()   
            }
            cur = cur.children[c]
        }
        cur.isWord = true
    }
}

class TextAnalizer {
    constructor(text) {
        this.Source = text
    }
    GetWords() {
        return this.Source.split(" ")
    }

    findWords(board, words){
        const root = new TrieNode()
            for (const w of words){
                //root.addWord(root,w)
                console.log(root)
            }
        const ROWS = board.length
        const COLS = board[0].length 
        var res = []
        var visit = []

        function isInArr(item){
            return true
        }

        
        function dfs(r , c, node, word){
            console.log(node.children)
            if (r < 0 || c < 0 || r == ROWS || c == COLS || (visit.includes(r) && visit.includes(c)) || !node.children.includes(board[r][c])) {
                return
            }
            visit.push(r)
            visit.push(c)
            node = node.children[board[r][c]]
            word += board[r][c]
            if (node.isWord){
                res.push(word)
            }
            //dfs(r-1, c, node, word)
            //dfs(r+1, c, node, word)
            //dfs(r, c-1, node, word)
            //dfs(r, c+1, node, word)
            visit.slice(r,r)
            visit.slice(c,c)
        }
        console.log(ROWS, COLS)
        for (let r = 0; r < ROWS; r++){
            for (let c = 0; r < COLS; c++){
                //dfs(r,c,root,"")
            }
        }
        
        return res
        
       // board.forEach(arr => {
       //     const Word = arr.join("")
       //     words.forEach(w => {
       //         if (Word.includes(w)){
       //             console.log(w)
       //         }
       //     })
       // })
    }

    AnalyzeWords(wordsArr){
        // wordsArr :: ['teste', '123', '231231', ...]
        const All = wordsArr.join("");
        const Has = All.includes("a")
        //console.log(wordsArr)
        var Dw = []
        for (const w of wordsArr){
            Dw.push(w.split(""))
        } 
        console.log(Dw)
        //const result = this.findWords(Dw,["fodase"])
        console.log(result)
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

const Submit = document.getElementById("verifier-submit")
const Reset = document.getElementById("verifier-reset")
const Example = document.getElementById("verifier-example")

const TextInput = document.getElementById("verifier-text")
const TextResult = document.getElementById("verifier-result")

function ProcessTextResult(InnapropriateWords) {
    if (InnapropriateWords.length > 0) {
        TextResult.innerHTML = "Innapropriate words found: " + InnapropriateWords.join(", ")
    } else {
        TextResult.innerHTML = "No innapropriate words found"
    }
}

Submit.addEventListener("click", async () => {
    var ContentText = TextInput.value
    const Analizer = new TextAnalizer(ContentText)
        
    // TextResult.innerText = "Analizing...";
     TextInput.value = "";
     
     ProcessTextResult(await Analizer.AnalizeText())

     return;
})
Reset.addEventListener("click", () => {
    TextInput.value = "";
})

Example.addEventListener("click", async () => {
    var Number = Math.floor(Math.random() * 100)
    var Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis lacinia lacinia, nisl nunc ultrices nunc, vitae ultricies nisl nunc"

    TextInput.value = TextInput.value+" "+Lorem.slice(0, Number)
})
