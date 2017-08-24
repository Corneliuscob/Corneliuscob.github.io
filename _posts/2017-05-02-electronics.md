---
layout: page
title: Home Projects
date: 2016-05-05
description: My Home Hobbies
---
<script src="{{ '/assets/js/jquery-3.2.1.min.js' | prepend: site.baseurl | prepend: site.url }}"></script>
<div class="col two">
	You can also put regular text between your rows of images. Say you wanted to write a little bit about your project before you posted the rest of the images. You describe how you toiled, sweated, *bled* for your project, and then.... you reveal it's glory in the next row of images.

</div>
<div class="col one">
<div class="img-hold" >
	<img  class="" style="max-width: 289px;" id = "pop1" src="{{ site.baseurl }}/assets/img/all_elec2.jpg" alt="" title="example image"/>
<div class="pop popnomore"><a href="#">close</a></div>
</div>
</div>

<div class="img_row">
  
    <img class="col one" src="{{ site.baseurl }}/assets/img/test1.jpg" alt="" title="example image"/> 
    
    
    <img class="col one" src="{{ site.baseurl }}/assets/img/test2.jpg" alt="" title="example image"/>
    <img class="col one" src="{{ site.baseurl }}/assets/img/diagram.jpg" alt="" title="example image"/>

<div class="col three caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/5.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images. Say you wanted to write a little bit about your project before you posted the rest of the images. You describe how you toiled, sweated, *bled* for your project, and then.... you reveal it's glory in the next row of images.






    




<br/><br/><br/>

<script type="text/javascript">
   $('#pop1').click(function (e) {
 e.preventDefault();

$('.pop').removeClass('popnomore')
 });

  $('.pop a').click(function (e) {
 e.preventDefault();
$('.pop').addClass('popnomore')
 });

</script>