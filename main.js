

function getClient(){
    console.log("Piyush_Ele")
   
    axios.get("http://kamlesh-work.herokuapp.com/client")
    .then(res => showClient(res))
    .catch(err => console.log(err))
}



function delClient() {
    console.log("Deleted")
    // axios
    //   .delete('http://kamlesh-work.herokuapp.com/client/1"')
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
  }


function showClient(res){
    var obj = JSON.stringify(res);
  document.getElementById('dispClients').innerHTML =`
  <h6>${obj}</h6>

    // <tr>
    // <th>${res.data.id}</th>
    // <td>${res.data.name}</td>
    // <td>${res.data.mobileNo}</td>
    // <td>${res.data.address}</td>
    // <td>${res.data.Work}</td>
    // </tr>
  
`;
}
  






















document.getElementById("showClient").addEventListener('click', getClient);

// document.getElementById("rmClient").addEventListener('click', delClient);