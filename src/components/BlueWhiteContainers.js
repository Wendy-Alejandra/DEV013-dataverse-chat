export const BlueWhiteContainers = (element1) => {
    const blueDiv = document.createElement("section");
    blueDiv.className = "blue-container";
    //const whiteDiv = document.createElement("div")
   // whiteDiv. className = "white-container";
    //whiteDiv.innerHTML = `<button class="close"><i class="bi bi-x-lg"></i></button>`;
    blueDiv.append(element1);
    return blueDiv;
}

// export const BlueWhiteContainers = () => {
//     const blueDiv = document.createElement("div");
//     blueDiv.className = "blue-container";
//     blueDiv.innerHTML = `<div class="white-container">
//     <button class="close"></button>
//     </div>`;
//     blueDiv.append()
//     return div;
// }