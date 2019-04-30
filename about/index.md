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
 find a condensed pdf of my resume <a href="{{site.url}}assets/pdf/ngaito.pdf">here</a>
</div>

# Skills 

{% assign Skills_list = 'SolidWorks,AspenPlus,JavaScript,AutoCad,Ruby,NodeJS,EagleCAD,Python,MS Office,Arduino,Flask,VBA,MatLab' | split: "," %}
<center>
<div class="grid">
{% for skill in Skills_list %}
<div class="in-grid" > {{ skill }} </div>
{% endfor %}
</div>  
</center> 


# Work Experience
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


# Technical Projects 
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

# Conferences and Presentations
<div class="conf-wrapper">
{% for prezzie in site.confNpres %}

<div class="wex-job-row">

  <div class="wex-company-row">
    <h3 class="conf-title">{{ prezzie.name }}</h3>
  </div>
  <div class="conf-descriptions">
      <ul>
          <li>{{ prezzie.item1 }}</li>
          {% if prezzie.item2 %}
            <li>{{ prezzie.item2 }}</li>
          {% endif %}  
      </ul>
  </div>
</div>
{% endfor %}
</div>