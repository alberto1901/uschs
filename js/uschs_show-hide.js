function toggle_visibility(id) {

//toggle visibility of div
    var e = document.getElementById(id);
    if(e.style.display == 'block')
          e.style.display = 'none';
    else
          e.style.display = 'block';

//toggle visibility of '>>>' div on menu
    var bullet = id.concat('_showing');   
    var f = document.getElementById(bullet);

    if(f.style.display == 'block')
       f.style.display = 'none';
    else
       f.style.display = 'block';              
} 
