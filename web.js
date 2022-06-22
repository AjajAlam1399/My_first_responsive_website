const sliding_bar=()=>{
    const hum=document.querySelector('.humberger');
    const nav_bar=document.querySelector('.nav-items');
    hum.addEventListener('click',()=>{
        nav_bar.classList.toggle('sliding');
        hum.classList.toggle('toggle');
    })
}
sliding_bar();