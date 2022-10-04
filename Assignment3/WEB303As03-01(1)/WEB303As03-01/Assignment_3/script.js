$(document).ready(function() {      
    //jsonCallFunction();
    ajaxCallFunction();
});
function ajaxCallFunction(){
              
    $.ajax({
                url: 'team.json',                                           
                method: 'GET',                                              
                dataType: 'json',                                           
                beforeSend: function(){                                     
                        $('div#team').append('<h3 id="Loading">Loading......</h3>').show();  
                },                                                              
                    
                complete: function(){                                           
                    $('#Loading').hide(2000);                                         
                        $('div#team').hide(2000);
                },
                    
                success: function(teammembers) {                                
                        
                    $.getJSON('team.json', function(team) {                     
                            $.each(team.teammembers, function() {                                                   
                                $('#team').append("<h2>" +this['name']+ "</h2><h5>" +this['position']+ 
                                            "</h5><p>" +this['bio']+"</p>").fadeIn(3000);    
                            });
                            console.log(teammembers);
                        
                    }) 
                }}
)};
function jsonCallFunction(){
    $.getJSON("team.json", function(team) {                     
        $.each(team.teammembers, function() {                   
            $("#team").append("<h2>"+this['name']+"</h2><h5>"   
                                    +this['position']+ "</h5><p>"
                                    +this['bio']+"</p>");
            
        }                             
    )})};
