var siteNameInput = document.getElementById("name");
var siteUrlInput = document.getElementById("url");
var siteData = document.getElementById("table");

var siteList;
if (localStorage.getItem("siteData") == null) {
  siteList = [];
} else {
  siteList = JSON.parse(localStorage.getItem("siteData"));
  display();
}

function addSubmit() {
if(siteNameInput.classList.contains("is-valid")&&siteUrlInput.classList.contains("is-valid")){
    var site = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
      };
      siteList.push(site);
      localStorage.setItem("siteData", JSON.stringify(siteList));
      console.log(siteList);
      clearForm();
      display();
}
else{

   
}

}
function clearForm() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
}
function display() {
  var cartona = "";
  for (var i = 0; i < siteList.length; i++) {
    cartona += ` <tbody id="table">

            <tr>
                <td>${i}</td>
                <td>${siteList[i].siteName}</td>
                <td><button  id="visit" class="btn px-3">     <a target="_blank" href="${siteList[i].siteUrl}"> <i class="fa-solid fa-eye"></i> Visit</button></td>   </a> 
                <td><button onclick="deleteData(${i})" id="delete" class="btn px-3"> <i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>
        </tbody>
    </table>`;
  }
  siteData.innerHTML = cartona;
}
function deleteData(deletedIndex) {
  siteList.splice(deletedIndex, 1);
  display();
  localStorage.setItem("siteData", JSON.stringify(siteList));
}
function validation(element) {
  var regex = {
    name: /^[\w]{3,}$/,
    url: /\.com{1}$/,
  };
  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}


















