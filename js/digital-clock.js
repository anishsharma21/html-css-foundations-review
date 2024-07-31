const hourDiv = document.getElementById("hr");
const minDiv = document.getElementById("mn");
const secDiv = document.getElementById("sc");

function updateTime() {
  const now = new Date();
  hourDiv.innerHTML = now.getHours().toString().padStart(2, "0");
  minDiv.innerHTML = now.getMinutes().toString().padStart(2, "0");
  secDiv.innerHTML = now.getSeconds().toString().padStart(2, "0");
}

setInterval(updateTime, 1000);
