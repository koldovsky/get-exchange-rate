$(function() {
    $('#run').click(function() {
        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: 'http://apilayer.net/api/live?access_key=' + $('#APIKey').val(),   
            dataType: 'jsonp',
            success: function(json) {
                console.log(json);
                // exchange rata data is stored in json.quotes
                $('#result').html(json.quotes[$('#currency').val()]);
            }
        });    
    });
});
    

