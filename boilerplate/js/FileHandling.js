document.getElementById('loadButton').onclick = loadCallback;
document.getElementById('deleteButton').onclick = deleteCallback;

var recordSet;
var dataHeader;

function loadCallback() 
{
    var csvFile = document.getElementById('csvFile').files[0]; 
    var headerList = document.getElementById('listBox');
    
    if( !csvFile )
    {
        alert("Please choose a file to load, or pick one with some CONTENT!")
        return false;
    }
    
    Papa.parse(csvFile, {
        /* Config for parsing */
        complete: function(results)
        {
            recordSet = results.data;
            dataHeader = recordSet[0];
            recordSet.shift();
            
            for( var i = 0; i < dataHeader.length; i++ )
            {
                var opt = document.createElement('option');
                opt.value = dataHeader[i];
                opt.innerHTML = dataHeader[i];
                headerList.appendChild(opt);
            }
        }
    })
}

function deleteCallback(col)
{
    col = 0;
    for( var i = 0; i < recordSet.length; i++ )
    {
        recordSet[i].splice(col, 1);
    }
    
    console.log(dataHeader);
    console.log(recordSet);
}
