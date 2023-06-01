
let tc = document.getElementById("tc")
function toastify(type, msg) {
    let icon
    if (type == "bg-danger") {
        icon = `<i class="bi bi-suit-club-fill"></i>`
    }
    if (type == "bg-primary") {
        icon = `<i class="bi bi-suit-heart-fill"></i>`
    }
    let toast = document.createElement("div")
    toast.classList.add("toastify", "p-4", type)
    toast.innerHTML = icon + msg

    tc.appendChild(toast)
    setTimeout(function () {
        toast.remove()

    }, 5000)

    //     tc.innerHTML += `<div class="toastify ${type} p-4 ">
    //     success
    // </div>`

}
