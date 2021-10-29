/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
const tabs=document.getElementById('tabs');

//console.log(tabs);
const content=document.querySelectorAll('.content');
//console.log(content);
const tabsAddl=document.getElementById('tabs-addl');
const contentAddl=document.querySelectorAll('.content-addl');

tabs.addEventListener('click', e => {
    //console.log(e.target);
    const currTab=e.target.dataset.btn;
    console.log(currTab);
    changeClass(e.target);

    for (let i=0; i<content.length; i++){
        content[i].classList.remove('active');        
   
    if (content[i].dataset.content===e.target.dataset.btn){
        content[i].classList.add('active');

    }
} 

})

//клик по дополнительному табу

tabsAddl.addEventListener('click', e => {
    //console.log(e.target);
    
    changeClassAddl(e.target);

    for (let i=0; i<contentAddl.length; i++){
        
        contentAddl[i].classList.remove('active'); 
        //console.log(contentAddl[i].classList);
    
            if (contentAddl[i].dataset.content2===e.target.dataset.btn2) {
                contentAddl[i].classList.add('active');
                
            }
    }    
})



const changeClass= el => {
    //console.log(el);
   // console.log(tabs.children);

    for (let i=0; i<tabs.children.length; i++){
        tabs.children[i].classList.remove('active');        
    }
    

    el.classList.add('active');

}

//смена класса у дополнительного таба
const changeClassAddl= el => {
    //console.log(el);
   // console.log(tabs.children);

    for (let i=0; i<tabsAddl.children.length; i++){
        tabsAddl.children[i].classList.remove('active');        
    }
    

    el.classList.add('active');

}