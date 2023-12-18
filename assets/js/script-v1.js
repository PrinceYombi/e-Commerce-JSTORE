
const iconToggleMobileMenu = document.getElementById('toggleMobileMenu')
const closeMobileMenu = [].slice.call(document.getElementsByClassName('mobile-close'))


const toogleMenu = ()=>{

    const mobileMenu = document.getElementsByClassName('mobile')[0]
    
    if (!mobileMenu.classList.contains('none')) {
        //add none
        mobileMenu.classList.toggle('close')
        window.setTimeout(()=>{
            mobileMenu.classList.toggle('none')
            mobileMenu.classList.toggle('close')
            document.body.style.overflow = ''
        },2000)
    }else{
        //remove none
        mobileMenu.classList.toggle('none')
        document.body.style.overflow = 'hidden'
    }
}


iconToggleMobileMenu.addEventListener('click', toogleMenu)

closeMobileMenu.forEach(item => {
    item.addEventListener('click', toogleMenu)
});



















