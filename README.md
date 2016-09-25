# Interactive Slide
Interactive slide is a small tool that helps to make any of the feature in your website beautiful. I used it to boost my skills section of my portfolio, and then realized that some of my friends really liked it and did one for their own.
So, this tiny tool will really boost your web skills.

## Getting started
To use this tool, all you need is to download *interactive.js* and *interactive.css*. Put the CSS and JS files in their respective folder. The folder structures vary with your preferred way.
For example, *ExpressJS* will generate the path for JS files and CSS files to
> mainProject/public/javascripts
>
> mainProject/public/stylesheets

I am going to assume these as the paths for rest of the document

Both of these files consists of style modifications that will eventually modify the characteristics of your class.
Inside `<head>` of your html file, you need to include these lines:

    // This will include JQuery to your HTML file so that your web app can render javascript file
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    // Change the path accordingly inside the ""
    <script src="/javascripts/interactive.js"/>

    // Change the path accordingly inside the ""
    <link rel='stylesheet' href='stylesheets/interactive.css'>

### Use the tools
This tool is used inside the list. You will need to put your list inside `.interactive-slide` class and the contents of the list inside `<span>`. This is done simply to make the content interactive and the parent of the content 
a block. 

In `<span>`, include one of the classes *high* or *medium*. This will define how you would like your elements to slide. By default, *high* is green in color, *medium* is orange and low is blue. You don't have to mention low. 
It is considered low by default. You can ofcourse change the color of your choice by going in to *interactive.css*

Example: 

    <div class="interactive-slide">
        <ol>
            <li><span class="high">Java</span></li>
            <li><span class="high">C++</span></li>
            <li><span class="medium">C</span></li>
        </ol>
    </div>

From my own code, I worked with **Jade Template** to write my HTML file. If you want to learn Jade, please follow this link: http://learnjade.com/tour/intro/

    #skills.interactive-slide
        h1.header-color I also have skills in few languages and technologies
        p.small-font (Hover over to find out my skill level)
        p.small-font Index: Green = High, Orange = Medium, Blue = Have encountered with it at some point
        ol
            li
                span.high Java 
            li
                span.high C++
            li
                span.medium C
            li
                span.high HTML/CSS

## Example of its use
![Alt text](https://github.com/smaharj1/Interactive-Slider/blob/master/Capture.PNG?raw=true "Example view")


## Final Words
I hope you liked this tool. If you have any questions, or if anything doesn't work, feel free to reach me @ smaharj1@ramapo.edu
