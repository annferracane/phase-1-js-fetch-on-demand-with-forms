const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch('http://localhost:3000/movies'')
        .then(resp => )

    });
}

document.addEventListener('DOMContentLoaded', init);