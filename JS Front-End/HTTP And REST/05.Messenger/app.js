const MESSAGES_URL = 'http://localhost:3030/jsonstore/messenger';
const refresh = document.getElementById('refresh');
const postMessage = document.getElementById('submit');
const textarea = document.getElementById('messages');

refresh.addEventListener('click', refreshMessenger);
postMessage.addEventListener('click', attachEvents);

function attachEvents() {
    const nameInput = document.getElementsByName('author')[0];
    const textInput = document.getElementsByName('content')[0];

    let post = { author: nameInput.value, content: textInput.value};

    fetch(MESSAGES_URL, {
        method: 'post',
        body: JSON.stringify(post),
    });

    refreshMessenger();
}

function refreshMessenger(){
    textarea.value = '';
    let messagesToLoad = [];

    fetch(MESSAGES_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let message = `${data[key].author}: ${data[key].content}`;
                messagesToLoad.push(message);
                textarea.value = messagesToLoad.join('\n');
            };
        });
}

//attachEvents();