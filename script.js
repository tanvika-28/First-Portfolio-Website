console.log("Script running...")
document.querySelector('.cross').Style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})