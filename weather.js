$(document).ready(function(){
    $('form').submit(function(){
        var city = $('#city').val();
   
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=e26eeaf5ad8696dcac8f9623e80fd5e5&units=imperial", function(res) {
        
        var cityinfo = res.name
        var weatherinfo = res.main.temp
        var info = "<h1>"+cityinfo+"</h1>" + "<p>Temperature: " + weatherinfo + "</p>"
        console.log(res) 
        
        $('div').append(info)
        $('#city').val('')
        }, 'json');

        return false;
    });
});