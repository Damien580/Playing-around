const sanctuaryContainer = document.querySelector('#sancContainer');
const form = document.querySelector('form');
const sancAddress = document.querySelector('#loc')
const sancType = document.querySelector('#type')
const sancInfo = document.querySelector('#info')
const sancList = document.querySelector('#sancList')


function handleSubmit(e) {
    e.preventDefault()

    if (sancAddress.value < 1) {
        alert ('You must enter an address for this sanctuary.')
        return
    }
    if (sancType.value < 1){
        alert('You must enter the type of building this is.')
        return
    }
    if (sancInfo.value < 1) {
        alert ('You must enter relevant details about this sanctuary.')
    }
    let body = {
        sancAddress: sancAddress.value,
        sancType: sancType.value,
        sancInfo: sancInfo.value,
    }

    axios.post('http://localhost:4004/zombies', body)
    .then()
}

function deleteCard(id) {
    axios.delete(`http://localhost:4004/zombies/${id}`)
        .then(() => getSanc())
        .catch(err => console.log(err))
}

function getSanc() {
    sancList.innerHTML = ''

    axios.get('http://localhost:4004/zombies/sancList')
    .then(res => {
        res.data.forEach(elem => {
            let sancCard = `<div class="sanc-card">
            <h2>${elem.address}<h2>
            <h2${elem.type}<h2>
            <h3>${elem.info}<h3>
            <button onclick="deleteCard(${elem['sanc_id']})">Delete</button>
            </div>`
            
            sancList.innerHTML += sancCard
        })
    })
}

getSanc()
form.addEventListener('submit', handleSubmit)
