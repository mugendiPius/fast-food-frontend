const wrapperGeneral=document.querySelector('.wrapperGeneral');
wrapperGeneral.classList.add("lessHeight")
window.addEventListener('load',()=>{
    const loader=document.querySelector('.loaderWrapper');

    setTimeout(()=>{
        loader.classList.add('hide');
        wrapperGeneral.classList.remove("lessHeight")
    },2000)
})




// Website Visit Counter Logic
let websiteVisitsDisplay=document.querySelector('.websiteVisits');
