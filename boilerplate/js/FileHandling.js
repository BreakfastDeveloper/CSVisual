document.getElementById('loadButton').onclick = testMyCallBack;

function testMyCallBack() {
    var csvFile = document.getElementById('csvFile').files[0]; 
    
    if( !csvFile )
    {
        alert("Please choose a file to load, or pick one with some CONTENT!")
        return false;
    }
    
    var reader = new FileReader();
    
    reader.onload = function(file)
    {
        console.log(reader.result)
    };
    
    reader.readAsText(csvFile);
}
