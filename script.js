// Selector
const myButton = document.querySelector(".my-button");

const cyrillicTextInput = document.querySelector("#cyrillic-text-input");
const transcribeButton = document.querySelector(".transcribe-button");
const transcriptionText = document.querySelector(".transcription-text")

// Event listeners

transcribeButton.addEventListener('click', transcribe)

const transcriptionKey = {

    " ":" ",
    ",":",",
    ".":".",

    "а":"a",
    "аь":"ä",
    "б":"b",

    "в":"v",
    "г":"g",
    "гӀ":"ġ",

    "д":"d",
    "е":"e",
    "ё":"yo",

    "ж":"ƶ",
    "з":"z",
    "и":"i",

    "й":"y",
    "к":"k",
    "кх":"q",

    "къ":"q̇",
    "кӀ":"kh",
    "л":"l",

    "м":"m",
    "н":"n",
    "о":"o",

    "оь":"ö",
    "п":"p",
    "пӀ":"ph",

    "р":"r",
    "с":"s",
    "т":"t",

    "тӀ":"th",
    "у":"u",
    "уь":"ü",

    "ф":"f",
    "х":"x",
    "хь":"ẋ",

    "хӀ":"h",
    "ц":"c",
    "цӀ":"ċ",

    "ч":"ç",
    "чӀ":"ç̇",
    "ш":"ş",

    "щ":"şç",
    "ъ":"'",
    "ы":"i",

    "ь":" ",
    "э":"e",
    "ю":"yu",

    "юь":"yü",
    "я":"ya",
    "яь":"yä",

    "Ӏ":"j"
}


// Functions

function transcribe() {
    console.log(cyrillicTextInput.value)

    initString = cyrillicTextInput.value.toLowerCase();
    resultString = ''

    for (let i = 0; i < initString.length; i++) {
        console.log("--------- Enter FOR ----------");
        console.log("i = ", i);
        console.log("character = ", initString[i]);

        let doubleChar = initString[i] + initString[i+1]

        if (transcriptionKey[doubleChar] != null) {
            console.log("---- Enter Double char");
            console.log("doubleChar: ", doubleChar)
            console.log("transcription: ", transcriptionKey[doubleChar]);

            let transcript = transcriptionKey[doubleChar];
            if (transcript == undefined) { transcript = "-"}

            resultString += transcript;
            i += 1

        } else {
            console.log("---- Enter simple char");
            console.log("character = ", initString[i]);
            console.log("transcription: ", transcriptionKey[initString[i]]);

            let transcript = transcriptionKey[initString[i]];
            if (transcript == undefined) { transcript = "-"}
            
            resultString += transcript;
        }

        console.log("Result string: ", resultString)

}

    transcriptionText.innerText = resultString;
}

