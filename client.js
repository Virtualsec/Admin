document.getElementById("add").addEventListener('click', postClient);





function postClient(){
    console.log("Clicked")
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var work = document.getElementById("work").value;
    var area = document.getElementById("area").value;
    var buildingName = document.getElementById("buildingName").value;
    var wing = document.getElementById("wing").value;
    var room = document.getElementById("room").value;

    address = [
        area = document.getElementById("area").value,
        building = document.getElementById("buildingName").value,
        wing = document.getElementById("wing").value,
        room = document.getElementById("room").value
    ]
    // console.log(work)
    // console.log(buildingName)
    var addRev  = address.reverse();
    
    var addr = addRev.toString();
    console.log(name)
    console.log(mobile)
    console.log(addr)
    console.log(work)

    axios
    .post("http://kamlesh-work.herokuapp.com/client",{
        name: name,
        mobileNo: mobile,
        address: addr,
        work: work
    }
    )
    .then(res => console.log(res))
    .catch(err => console.error(err));
}












var buildingNames = new Array (
    "Agarwal Lifestyle A",
    "Agarwal Lifestyle B",
    "Agarwal Lifestyle C",
    "Agarwal Solitaire",
    "Agarwal Paramount",
    "Bhoomi Acropolis",
    "Bhavani View",
    "Blu Pearl",
    "Cosmos Regency",
    "M-Avenue",
    "J-Avenue",
    "H-Avenue",
    "G-Avenue",
    "I-Avenue",
    "K-Avenue",
    "L-Avenue",
    "D-Avenue",
    "Poonam Avenue",
    "Poonam ParkView",
    "Pooman Heights",
    "Poonam Imperial",
    "Bachraj Landmark",
    "Bachraj Residency",
    "Bachraj Paradise",
    "Bachraj LifeSpace",
    "Sumit Greendale",
    "Sumit Greendale NX",
    "Shree Shashwat",
    "Star Heights",
    "Shanti Homes",
    "Siddhi Homes",
    "Evershine Homes",
    "Evershine Avenue A3",
    "Evershine Avenue A6",
    "Ekta Parksville Central",
    "Ekta Parksville Lincoln",
    "Ekta Parksville Sentosa",
    "Ekta Parksville Regent",
    "Ekta Brooklyn Park",
    "Vinay Unique Gardens",
    "Vinay Unique Homes",
    "Vinay Unique Heights",
    "Vinay Unique Imperia",
    "Vinay Unique Corner",
    "Joyti Harmony",
    "Mandar Avenue",
    "Mandar Shlip",
    "Mahavir heights",
    "Casa Vista",
    "New Home Paradise",
    "Mathuresh Krupa",
    "Rachna Tower",
    "Datta Krishna Height",
    )
        
    var opt = '';
        for(var i = 0; i < buildingNames.length; ++i){
    
            opt += '<option value="'+buildingNames[i]+'"/>';
        }
        var buldList = document.getElementById("buildingList").innerHTML = opt;
    
    var str='';
    var work = new Array(
        "A-Wing",
        "B-Wing",
        "C-Wing",
        "D-Wing",
        "E-Wing",
        "F-Wing",
        "G-Wing",
        "H-Wing",
        "I-Wing",
        "J-Wing",
        "K-Wing",
        "L-Wing",
        "M-Wing",
        "O-Wing",
        "P-Wing",
        "Building.No.01",
        "Building.No.02",
        "Building.No.03",
        "Building.No.04",
        "Building.No.05",
        "Building.No.06",
        "Building.No.07",
        "Building.No.08",
        "Building.No.09",
        "Building.No.10",
        "Building.No.11",
        "Building.No.12",
        "Building.No.13",
        "Building.No.14",
        "Building.No.15",
        "Building.No.16",
        "Building.No.17",
        "Building.No.18",
        "Building.No.19",
        "Building.No.20",
    );
    
        for (var i=0; i < work.length;++i){
            
            str += '<option value="'+work[i]+'"/>'; 
        }
        var my_list = document.getElementById("wingList").innerHTML= str;
        