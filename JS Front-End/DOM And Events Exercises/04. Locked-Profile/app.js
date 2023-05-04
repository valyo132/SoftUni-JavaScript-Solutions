function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));

    for (const profile of profiles) {
        const showMore = profile.getElementsByTagName('button')[0];

        const radioButton = profile.querySelectorAll('input[type=radio]')[1];

        showMore.addEventListener('click', () => {
            const hiddenField = profile.getElementsByTagName('div')[0];

            if (radioButton.checked){
                if (showMore.textContent === 'Show more'){
                    hiddenField.style.display = 'inline';
                    showMore.textContent = 'Hide it';
                } else {
                    hiddenField.style.display = 'none';
                    showMore.textContent = 'Show more';
                }
            }
        } );
    }
}