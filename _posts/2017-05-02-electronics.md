---
layout: page
title: Home Projects
date: 2016-05-05
description: My Home Hobbies
---
<script src="{{ '/assets/js/jquery-3.2.1.min.js' | prepend: site.baseurl | prepend: site.url }}"></script>
<div class="col two">

The thing with electronics is that there is so much to learn. From simple facts such as Ohm's law to phenomena like frequency reponses, the sheer amount of information to know is staggering. To learn more about how our everyday electronics works, I've taken apart countless computers, microwaves, phone chargers, and laptops to see how they function. I have also ammassed a grand collection of small projects that I have worked on. These projects were done to learn more about the process of designing a circuit and how to efficiently prototype the a board. 

</div>
<div class="col one img_row" style="overflow: visible">
<div class="img-hold" >
	<img  class="col three" style="max-width: 289px;" id = "pop1" src="{{ site.baseurl }}/assets/img/all_elec2.jpg" alt="Electronic projects: power supply, infrared sensor, other things" title="electronics overview"/>
<div class="pop popnomore " id="popId1"><a style="color: black; overflow: visible;" href="#">This is an overview of a few projects that I have read into and designed. On top of electricity theory, I have garnered iformation baout many different components and IC's as well as skills such as layout design, soldering and CAD.</a></div>
</div>
</div>

<!-- <div class=""> -->
<div class="img_row">
    <div class="img-hold col one"   >
    <img class="col three" id="pop2" src="{{ site.baseurl }}/assets/img/test1.jpg" alt="#x3 Led Cube" title="3x3 Led Cube"/> 
    <div class="pop popnomore " id="popId2" ><a style="color: black; overflow: visible;" href="#">This is my very first project where I learned to solder and work with Arduino coding. Cable management and spacing were not the first thing on mind but hte project turned out extremely well!  Close</a></div>
    </div>
        <div class="img-hold col one"  >
    <img class="col three" id="pop3" src="{{ site.baseurl }}/assets/img/test2.jpg" alt="" title="8x8 2d Matrix "/> 
    <div class="pop popnomore "  id="popId3"><a style="color: black; overflow: visible;" href="#">Shift registers are used to reduce the number of I/O to the microcontroller... Too bad the amount of wires is still ridiculous. At least you can see the LED matrix!</a></div>
    </div>
    <div class="img-hold col one"  >
    <img class="col three" id="pop4" src="{{ site.baseurl }}/assets/img/diagram.jpg" alt="" title="example image"/> 
    <div class="pop popnomore " id="popId4"><a style="color: black; overflow: visible;" href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. </a></div>
    </div>
   

</div>

<br/><br/><br/>

<script type="text/javascript">
   $('#pop1').click(function (e) {
 e.preventDefault();

$('#popId1').removeClass('popnomore')
 });

  $('.pop a').click(function (e) {
 e.preventDefault();
$('.pop').addClass('popnomore')
 });


$('#pop2').click(function (e) {
 e.preventDefault();

$('#popId2').removeClass('popnomore')
 });

  $('.pop a').click(function (e) {
 e.preventDefault();
$('.pop').addClass('popnomore')
 });


  $('#pop3').click(function (e) {
 e.preventDefault();

$('#popId3').removeClass('popnomore')
 });

  $('.pop a').click(function (e) {
 e.preventDefault();
$('.pop').addClass('popnomore')
 });

  $('#pop4').click(function (e) {
 e.preventDefault();

$('#popId4').removeClass('popnomore')
 });

  $('.pop a').click(function (e) {
 e.preventDefault();
$('.pop').addClass('popnomore')
 });
</script>