---
layout: about_wrapper
title: Jamie Ngai To Lo
tags: [about, Jekyll, theme, moon]
date: 2016-03-21
comments: false
---
    
<div style="padding:4em;padding-top:1em;">
{% for me in site.about_page %}
{{me.desc}}
{% endfor %}
</div>

## Skills 

{% assign Skills_list = 'SolidWorks,AspenPlus,JavaScript,AutoCad,Ruby,NodeJS,EagleCAD,Python,MS Office,Arduino,Flask,VBA,MatLab' | split: "," %}
<center>
<div class="grid">
{% for skill in Skills_list %}
<div class="in-grid" > {{ skill }} </div>
{% endfor %}
</div>  
</center> 


## Work Experience
{% for job in site.WEX %}

<div class="wex-job-row">
  <div class="wex-company-row">
    <h2 class="wex-h2">{{ job.company }}</h2>
  <div class="wex-div-h2"> {{ job.division }}</div>
  </div>

  <div class="wex-title-row">
    <div class="wex-title">{{ job.title }}</div>
    <div class="wex-duration">{{ job.time }}</div>
  </div>

  <div class="wex-descriptions">
      <ul>
          <li>{{ job.item1 }}</li>
          <li>{{ job.item2 }}</li>
          <li>{{ job.item3 }} </li>
      </ul>
  </div>
</div>



{% endfor %}


## Technical Projects 
{% for project in site.tech_project %}

<div class="wex-job-row">
  <div class="wex-company-row">
    <h2 class="wex-h2">{{ project.team }}</h2>
  <div class="wex-div-h2">
     {{ project.division }} <br>
     {{ project.time }}
  </div>
  </div>



  <div class="wex-descriptions">
      <ul>
          <li>{{ project.item1 }}</li>
          {% if project.item2 %}
            <li>{{ project.item2 }}</li>
          {% endif %}  
      </ul>
  </div>
</div>



{% endfor %}
## Preview

{% capture images %}
    https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png
    https://cloud.githubusercontent.com/assets/754514/14509716/61ac6c8e-01d6-11e6-879f-8308883de790.png
{% endcapture %}
{% include gallery images=images caption="Screenshots of Moon Theme" cols=2 %}

See a [live version of Moon](http://taylantatli.github.io/Moon) hosted on GitHub.

## Getting Started

To learn how to install and use this theme check out the [Setup Guide](http://taylantatli.me/Moon/moon-theme/) for more information.
      
[Install Moon](https://github.com/TaylanTatli/Moon){: .btn}
