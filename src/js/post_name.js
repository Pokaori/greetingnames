
async function addalert(message) {
    document.getElementById("for-alert").insertAdjacentHTML("beforeend", "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" 
    + message + 
    "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");
  }
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

let formEl = document.getElementById("greeting")

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    object = Object.fromEntries(formData.entries());
    let full_name = { "full_name": capitalize(object["first_name"]) + " " + capitalize(object["last_name"])};
    let my_names = JSON.parse(localStorage.getItem('my_names'));
    if (!my_names) my_names = [];
    if (my_names.includes(full_name["full_name"])) document.getElementById("greeting_text").innerText = "Вже бачились, " + full_name["full_name"];
    else {
        let json = JSON.stringify(full_name);
        let response = await fetch(document.URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-CSRFToken': object["csrfmiddlewaretoken"]
            },
            body: json
        });
        const res_json = await response.json();
        if (response.status === 409) document.getElementById("greeting_text").innerText = "Вже бачились, " + full_name["full_name"];

        else if (response.status === 200) document.getElementById("greeting_text").innerText = "Привіт, " + res_json["full_name"];
        else {
            await addalert(res_json["error"]);
            return ;
        }
        my_names.push(full_name["full_name"]);
        localStorage.setItem('my_names', JSON.stringify(my_names));
    }

})
