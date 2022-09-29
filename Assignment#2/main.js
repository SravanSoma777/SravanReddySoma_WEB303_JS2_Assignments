// WEB303 Assignment 2

$(document).ready(function(){
    $("a#prospect").click(function(){
        $("#content").hide().load("prospect.html").slideDown(1000); 
        console.log("Prospect is working!");

    });
    $("a#convert").click(function(){
        $("#content").hide().load("convert.html").slideDown(1000);
        console.log("Covert is working!");

    });

    $("a#retain").click(function(){
        $("#content").hide().load("retain.html").slideDown(1000);
        console.log("Retain is working!");
    });
});
/*

$(document).ready(function(){

    $(function(){
        const prospect = $('#prospect');
        const convert = $('#convert');
        const retain = $('#retain');
    
        const content = $('#content');
    
        function getContent(e) {
            content.slideUp(500, ()=>{
    
                const fileName = $(e.id).html;
    
                const xhr = new XMLHttpRequest();
                xhr.open('GET', fileName, true);
    
                xhr.onload = function(){
                    content.html(this.responseText);
                    content.slideDown();
                }
    
                xhr.send();
            });
    
        }
        prospect.click(getContent);
        convert.click(getContent);
        retain.click(getContent);
    
    
    });
    console.log("hi");
});
    
*/