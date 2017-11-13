function onSuccess_contacts(contacts) {

    for (var i = 0; i < contacts.length; i++) {
        console.log("Formatted: "  + contacts[i].name.formatted       + "\n" +
            "Family Name: "  + contacts[i].name.familyName      + "\n" +
            "Given Name: "   + contacts[i].name.givenName       + "\n" +
            "Middle Name: "  + contacts[i].name.middleName      + "\n" +
            "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
            "Prefix: "       + contacts[i].name.honorificSuffix);
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
filter = ["displayName", "name"];
navigator.contacts.find(filter, onSuccess_contacts, onError_contacts, options);
}
