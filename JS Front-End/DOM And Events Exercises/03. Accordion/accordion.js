function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const hiddenDiv = document.getElementById("extra");

    if (button.textContent == 'More'){
        hiddenDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        hiddenDiv.style.display = 'none';
        button.textContent = 'More';
    }
}