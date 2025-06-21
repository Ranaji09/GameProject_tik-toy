let btn = document.querySelector("#btn");
let content = document.querySelector("#content")
let voice = document.querySelector("#voice");

function speak(text) {
     let text_speak = new SpeechSynthesisUtterance(text);
     text_speak.rate = 1
     text_speak.pitch = 1
     text_speak.volume = 1
     text_speak.lang = "hi-IN"
     window.speechSynthesis.speak(text_speak);
}
function wishME() {
     let day = new Date()
     console.log(day)
     let hour = day.getHours()
     if (hour >= 0 && hour < 12) {
          speak("Good Morning Rana ji")
     } else if (hour >= 12 && hour < 16) {
          speak("Good Afternoon Rana ji");
     } else {
          speak("Hey Rana ji i am  your personal assistant ?  Please tell me How Can Help You.");
     }
}
window.addEventListener("load", () => {
     wishME();
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult = (event) => {
     let currentIndex = event.resultIndex
     let transcript = event.results[currentIndex][0].transcript
     content.innerText = transcript;
     takeCommand(transcript)
}
btn.addEventListener("click", () => {
     recognition.start();
     btn.style.display = "none"
     voice.style.display = "block"
})
function takeCommand(message) {
     btn.style.display = "flex"
     voice.style.display = "none"
     message = message.toLowerCase();
     if (message.includes("hello") || message.includes("hey")) {
          speak("Hello Rana ji ? how can help you ?")
     } else if (message.includes("who are you") || message.includes("hu r u")) {
          speak("i am Rana ji hard beat so i can not live without Rana ji , i love You..")
     } else if (message.includes("how are you") || message.includes("how r u")) {
          speak("i am fine , and you.");
     } else if (message.includes("tell me owner name" || "who are rana")) {
          speak("My owner is Rana ji")
     } else if (message.includes("open youtube")) {
          speak("Opening Youtube.")
          window.open("https://www.youtube.com", "_blank");
     } else if (message.includes("open google")) {
          speak("Opening Google.");
          window.open("https://www.google.com", "_blank");
     } else if (message.includes("close window") || message.includes("close tab")) {
          speak("Closing this window.");
          window.close();
     } else if (message.includes("open instagram")) {
          speak("Opening Instagram.");
          window.open("https://www.instagram.com", "_blank");
     } else if (message.includes("open vscode") || message.includes("vscode")) {
          speak("opening visual studia code..")
          window.open("https://vscode.dev", "_blank");
     } else if (message.includes("time")) {
          let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
          speak(time);
     } else if (message.includes("date")) {
          let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
          speak(date);
     }
     else {
          let finaltext = "this is what i found on internet regarding" + message.replace("Rana ji", "") || message.replace("Rana ji", "")
          speak(finaltext)
          window.open(`https://www.google.com/search?q=${message.replace("Rana ji", "")} `, "_blank")
     }
}