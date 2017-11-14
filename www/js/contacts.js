function onSuccess_contacts(contacts) {
 console.log(contacts.length);
 
 var list;
 var email;    
 var name;
 var telephone;
    for (var i=0; i<contacts.length; i++)
        {

     name=contacts[i].displayName;
     email="";
     telephone="";
     
     
if (contacts[i].emails) {                        
for (var j=0; j<contacts[i].emails.length; j++) {
    email=email+contacts[i].emails[j].value+"\n";
    }
 } 
  

if (contacts[i].phoneNumbers) {                        
for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
    telephone=telephone+contacts[i].phoneNumbers[j].value+"\n";
    }
 }
 if (name) {
        if (telephone) {
 list="<li class='table-view-cell'><a class='navigate-right'>"+name+"\n"+email+"\n"+telephone+"</li>";
$( "#contacts_list" ).append( list );
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
$("#contacts_modal").addClass('active');
navigator.contacts.find(filter, onSuccess_contacts, onError_contacts, options);
}


