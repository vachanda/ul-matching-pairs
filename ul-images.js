var copy_result = [];
function get_random_images() {

    var xmlHttp = null;
    var url = "https://script.google.com/macros/s/AKfycbwFYj0LiqWIFM4m3q0W_WD9bw5fuOEZO3gxYFI0JRe1_JgLDo5w/exec"
    var result = [];
    var index ;
    
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    result = xmlHttp.responseText; 
    copy_result = result;
    
    var image_url = [];
    for (index=0;index<result.length;index++)
    {
      image_url[index] = result[index].url;
    }
}
