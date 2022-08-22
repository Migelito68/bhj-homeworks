let showChatWidget = () => {
    let chatWidget = document.getElementsByClassName('chat-widget')[0];

    chatWidget.addEventListener('click', () => {
        chatWidget.classList.add('chat-widget_active');
    })

    let messages = document.querySelector('.chat-widget__messages');

    let input = document.getElementById('chat-widget__input');

    let messagesList = [
        'Добрый день, До свидания!',
        'Где Ваша совесть?',
        'Кто тут?',
        'К сожалению, все операторы сейчас заняты',
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
    ]

    input.addEventListener('keydown', (event) => {

        let randomMessage = messagesList[Math.floor(Math.random() * messagesList.length)];

        let time = new Date().toLocaleTimeString();

        if (event.keyCode === 13) {
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${event.target.value}
                </div>
            </div>
            `;

            messages.innerHTML += `
            <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${randomMessage}
                </div>
            </div>
            `;

            event.target.value = ''
        }
    })

}

showChatWidget()

/*let chatWindow = document.querySelector(".chat-widget");
let messages = document.querySelector(".chat-widget__messages");
let input = document.getElementById("chat-widget__input");
let messagesContainer = document.querySelector(".chat-widget__messages-container");

let randomMessages = [
    "Это администратор, не бот!",
    "Я искуственный интеллект",
    "нейросеть перегружена",
    "Спросите Алису",
];

function showChatWindow() {
    chatWindow.classList.add("chat-widget_active");
}

let hours = getHours();
let minutes = getMinutes();

function getHours() {
    return String(new Date().getHours()).padStart(2, "0")
}

function getMinutes() {
    return String(new Date().getMinutes()).padStart(2, "0")
}

function sendMessage(event) {
messages.innerHTML += `
                        <div class="message message_client">
                         <div class="message__time">${hours}:${minutes}</div>
                         <div class="message__text">
                           ${event.target.value}
                         </div>
                        </div>
`;
input.value = "";

getReply();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getReply() {
    let randomIndex = getRandomInt(0, randomMessages.length);
   
    return (messages.innerHTML += `
                          <div class="message">
                            <div class="message__time">${hours}:${minutes}</div>
                            <div class="message__text">
                              ${randomMessages[randomIndex]}
                            </div>
                          </div>
    `);
}



chatWindow.addEventListener("click", showChatWindow);
input.addEventListener("change", sendMessage);*/