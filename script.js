

const adviceid = document.querySelector('#advice')
const  para = document.querySelector('#paragrafh')
const  Randombtn = document.querySelector('.diceimage')

async function fetchData() {
    let url = 'https://api.adviceslip.com/advice'

    fetch(url).then((responce) => responce.json()).then((data) => {
        adviceid.innerHTML =  data.slip.id
        para.innerHTML =  data.slip.advice;
        console.log(data);
        console.log(data.slip.id);
        console.log(data.slip.advice);
    })
        .catch((err) => {
            let error = new Error();
            console.log(error);
        })
}
fetchData()