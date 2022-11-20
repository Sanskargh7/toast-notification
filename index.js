const btn=document.getElementById('btn');
const container=document.getElementById("container")
btn.addEventListener("click",()=>{
    toastnotification()
})
function toastnotification(){
    const notify=document.createElement("div");
    notify.classList.add("toast");
    notify.innerText="hey I will add if u add click";
container.appendChild(notify)
setTimeout(()=>{
notify.remove();
},3000)
}