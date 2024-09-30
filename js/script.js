  //skills bar

  $('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });

//change menu item color
$("a.link").click(function(){
  $("a.link").css("color", "white");
$(this).css("color", "#0ef");
});
//Tag
const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'PHP', 'C#', 'Unity',
  'Visual Studio'
];
//tag cloud
var tagCloud = TagCloud('.Sphere', Texts, {

  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true

});

// Giving color to each text in sphere
var color = '#fff ';
document.querySelector('.Sphere').style.color = color;

//filter projects in projects section
let filterItem = document.querySelector('.items-link');
let filterImages = document.querySelectorAll('.project-img');
window.addEventListener('load',()=>{
   filterItem.addEventListener('click',(selectedItem)=> {
      if(selectedItem.target.classList.contains('item-link')){
         document.querySelector('.menu-active').classList.remove('menu-active');
         selectedItem.target.classList.add('menu-active');
         let filterName = selectedItem.target.getAttribute('data-name');
         filterImages.forEach((image)=>{
            let filterImages = image.getAttribute('data-name');
            if((filterImages==filterName) || filterName == 'all'){
               image.style.display='block'
            }else{
               image.style.display='none'
            }
         })
      }
   })
})