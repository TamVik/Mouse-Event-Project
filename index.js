const container = document.querySelector(".container")
window.addEventListener("mousemove", (event)=> {
    container.innerHTML = `
        <div class="mouse-event">
        ${event.clientX} px
            <h4>mouse 'X' position</h4>
        </div>
        <div class="mouse-event">
        ${event.clientY} px
            <h4>mouse 'Y' position</h4>
        </div>
    `
})