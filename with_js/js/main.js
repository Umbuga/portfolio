function showMood() {
    name = document.getElementById('name').value;
    mood = document.getElementById('mood').value;

    if (!name || !mood) {
        alert("Lūdzu aizpieldiet norādītos laukus!")
    }

    if (mood == "priecīgs") {
        face = " :-) "
    } else if (mood == "skumīgs") {
        face = " :-("
    } else {
        face = " :-|"
    }

    moodString = name + " ir " + mood + " šodien " + face;

    holder = document.getElementById('holder');

    holder.innerHTML = moodString;
}

function clearMood() {
    document.getElementById("moodForm").reset();
    holder = document.getElementById("holder");
    holder.innerHTML = " ";
}
