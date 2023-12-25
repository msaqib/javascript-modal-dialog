function showModal(message, preModal, postModal) {
    return new Promise( (resolve) => {
        preModal()
        const div = document.createElement('div')
        div.classList.add('modal')
        div.innerHTML = `<p>${message}</p><div class="btn-row"><button id="yes">Yes</button><button id="no">No</button></div>`
        document.body.appendChild(div)
        document.getElementById('yes').addEventListener('click', function() {
            document.querySelector('.modal').remove()
            postModal()
            resolve(true)
        })
        document.getElementById('no').addEventListener('click', function() {
            document.querySelector('.modal').remove()
            postModal()
            resolve(false)
        })
    })
}