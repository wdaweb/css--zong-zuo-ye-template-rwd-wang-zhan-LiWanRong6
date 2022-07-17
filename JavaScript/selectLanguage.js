const select= document.querySelector('.select')
const optionslist= document.querySelector('.options-list')
const options= document.querySelectorAll('.option')

select.addEventListener('click',function(){
  optionslist.classList.toggle('active')
})

options.forEach( (option) => {
  option.addEventListener('click',()=>{

    select.querySelector('span').innerHTML=option.querySelector('span').innerHTML
    select.querySelector('img').src=option.querySelector('img').getAttribute('src')
  })
});