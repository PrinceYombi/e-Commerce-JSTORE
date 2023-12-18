
const iconToggleMobileMenu = document.getElementById('toggleMobileMenu')
const iconToggleCart = document.getElementById('openCart')
const closeMobileMenu = [].slice.call(document.getElementsByClassName('mobile-close'))


const toogleMenu = (event)=>{

    const element = event.target
    const className = element.dataset.mobile
    console.log(className);
    
    const mobileMenu = document.getElementsByClassName(className)[0]
    
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
iconToggleCart.addEventListener('click', toogleMenu)

closeMobileMenu.forEach(item => {
    item.addEventListener('click', toogleMenu)
});



















