function onSuccess_contacts(contacts) {
 console.log(contacts.length);
    for (var i=0; i<contacts.length; i++)
        {
              
               console.log("Name:" + contacts[i].displayName + "\n"+
                         "Birthday:"+ contacts[i].birthday)
if (contacts[i].emails) {                        
for (var j=0; j<contacts[i].emails.length; j++) {
                               console.log("Type: " + contacts[i].emails[j].type + "\n" +
                                         "Value: "  + contacts[i].emails[j].value );
                        }
 
    
 } 

if (contacts[i].phoneNumbers) {                        
for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
                               console.log("Type: " + contacts[i].phoneNumbers[j].type + "\n" +
                                         "Value: "  + contacts[i].phoneNumbers[j].value );
                        }
 
    
 }  
}
};
 
function onError_contacts(contactError) {
    alert('onError!');
};
 
// find all contacts
function address_list() {
  var options = new ContactFindOptions();
options.filter = "";
options.multiple = true;
filter = ["*"];
navigator.contacts.find(filter, onSuccess_contacts, onError_contacts, options);
}


 function display_number() {
    console.log("전화번호");
window.plugins.sim.getSimInfo(successCallback, errorCallback);
}

function successCallback(result) {
  console.log(result);
}

function errorCallback(error) {
  console.log(error);
}


 // Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}