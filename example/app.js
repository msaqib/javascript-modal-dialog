const btnsArray = document.querySelectorAll('.centered button')

btnsArray.forEach(btn => btn.onclick = clickHanlder)

async function clickHanlder(e) {
    const itemText = e.target.parentElement.querySelector('span')
    const result = await showModal(`Are you sure you want to delete ${itemText.innerText}`, preModal, postModal)
    if (result) {
        e.target.parentElement.remove()
    }
}

function preModal() {
    btnsArray.forEach(btn => btn.disabled = true)
}

function postModal() {
    btnsArray.forEach(btn => btn.disabled = false)
}