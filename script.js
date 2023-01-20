const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');

questions.forEach(link => {
    link.addEventListener('click', function () {
        if (link.nextElementSibling.classList.contains('show')) {
            link.classList.remove('active')
            link.nextElementSibling.classList.remove('show')
        } else {
            removeShow();
            link.classList.add('active')
            link.nextElementSibling.classList.add('show')
        }
    })
})

function removeShow() {
    answers.forEach(ans => {
        if (ans.classList.contains('show')) {
            ans.classList.remove('show')
        }
    })
}