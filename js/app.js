const questionsContainer = document.querySelector('.questions .container');

function resetElm(elmName, classRemove) {
    const elms = document.querySelectorAll(elmName);
    elms.forEach(elm => elm.classList.remove(classRemove));
}

questionsContainer.addEventListener('click', (e) => {
    const question = e.target.closest('.question');
    if (question) {
        if (!question.classList.contains('show')) {
            resetElm('.question','show');
            question.classList.toggle("show");
            return;
        }
        question.classList.remove('show');
    }    
    return

})