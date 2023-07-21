const message = document.querySelector("#message");
const btn = document.querySelector("#bouton");


const wait = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time);
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const messageVal = message.value;

    if (messageVal) {
        btn.textContent = "...";
        btn.style.display = "inherit";
        wait(2000).then(() => {
            btn.textContent = "Envoyer";
            const userMessage = document.createElement("p");
            userMessage.classList.add("userMessage");
            userMessage.textContent = messageVal;
            document.querySelector("#bodyBox").appendChild(userMessage);
            document.querySelector("#message").value = "";
        });


        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://unserveur.com/une-resource');
        xhr.addEventListener("readystatechange", (ev) => {
            if (ev.res.status >= 200 && ev.res.status < 300) {
                const data = JSON.parse(ev.res.body);
                // handle data
            }
        });
        xhr.send();


        fetch('http://unserveur.com/une-resource').then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                throw new Error(res.statusText); //creer unne erreur
            }
        }).then(data => {
            // handle data
        }).catch(err => console.log(err));


        axios.get('http://unserveur.com/une-resource').then(data => {
            // handle data
        }).catch(err => console.log(err));


        ////////////// POST
        const postData = {
            name: 'Ben',
            age: 21
        }
        const xhrPost = new XMLHttpRequest();
        xhr.open('POST', 'http://unserveur.com/une-resource');
        xhr.addEventListener("readystatechange", (ev) => {
            if (ev.res.status >= 200 && ev.res.status < 300) {
                const data = JSON.parse(ev.res.body);
                // handle data
            }
        });
        xhr.send(JSON.stringify(postData));


        fetch('http://unserveur.com/une-resource', {
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                throw new Error(res.statusText); //creer unne erreur
            }
        }).then(data => {
            // handle data
        }).catch(err => console.log(err));

        axios.post('http://unserveur.com/une-resource', data).then(data => {
            // handle data
        }).catch(err => console.log(err));

        // AVEC LES try..catch
        const test = async() => {
            try {
                await axios.post('http://unserveur.com/une-resource', data);
            } catch (err) {
                console.log(err);
            }
        }
    }
});

const handleSendButton = () => {
    const value = document.querySelector("#message").value;
    if (value) {
        btn.style.opacity = 1;
        btn.removeAttribute("disabled");
    } else {
        btn.style.opacity = 0;
        btn.setAttribute("disabled", "disabled");
    }
}

message.addEventListener("keyup", handleSendButton);
message.addEventListener("change", handleSendButton);