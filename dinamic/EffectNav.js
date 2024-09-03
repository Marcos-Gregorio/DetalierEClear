let ActionBtnNav = document.querySelector('#ActionBtnNav')

ActionBtnNav.addEventListener('click',()=>{
    let myClassList = document.getElementById('section-navbar-ul');
    if(myClassList !== null){
      myClassList.classList.toggle('active-response')
    }

})
