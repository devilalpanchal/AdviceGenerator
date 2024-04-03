
const adviceid = document.querySelector('#advice')
const para = document.querySelector('#paragrafh')
const Randombtn = document.querySelector('.diceimage')

async function fetchData() {
    let url = 'https://api.adviceslip.com/advice'

    fetch(url).then((responce) => responce.json()).then((data) => {
        adviceid.innerHTML = `<p>ADVICE # &nbsp;${data.slip.id}</p>`
        para.innerHTML = `<q>${data.slip.advice}</q> ` 
        
    })
        .catch((err) => {
            let error = new Error();
            console.log(error);
        })
}
fetchData()

document.querySelector('.diceimage').addEventListener('click', () => {
    document.location.reload()
    fetchData()
})