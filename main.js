

function getClient() {
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


function showClient({ data }) {
  const tbody = document.querySelector('table tbody')
  output = '';
  data.forEach(client => {
    output += `<tr>
    <th>${client._id}</th>
    <td>${client.name}</td>
    <td>${client.mobileNo}</td>
    <td>${client.address}</td>
    <td>${client.work}</td>
    </tr>`;
  });
  tbody.innerHTML = output;
}























document.getElementById("showClient").addEventListener('click', getClient);

// document.getElementById("rmClient").addEventListener('click', delClient);