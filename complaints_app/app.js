 function getData(borough){
 let numberOfComp=document.getElementById('inputType').value;    
     const appUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency_name=NYPD&$limit=${numberOfComp}`; 
      fetch(appUrl)
         .then((response) => response.json() ) 
             .then(data => {
                             
                 let li = `<tr><th></th><th></th></tr>`;
                for (let i=0; i < data.length; i++) {
                    li += `<tr>
                            <td>${data[i].descriptor}</td>
                            <td><button onclick=showRow(${data[i].unique_key})>What did the Police Do?</button></td>
                            </tr>
                            <tr>
                            <td colspan="2" style="display: none;" id="${data[i].unique_key}">${data[i].resolution_description}</td></tr>`;
                };
                document.getElementById('info').innerHTML=li;
          });
        }

function showRow(uniqueId) {
    document.getElementById(uniqueId).style.display='inline';
}
 