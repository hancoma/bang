
function getImage() {
 

   
        navigator.camera.getPicture(uploadPhoto, function(message) {
alert('사진 등록에 실패 했습니다.');
},{
quality: 100,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});
    }

    

    function uploadPhoto(imageURI) {
        
         navigator.notification.activityStart("사진 등록 중", "사진 업로드 중입니다.");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        add_file_name=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
     
        params.uuid=uuid;
    
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://ku4h.com/upload_app_profile.php", win, fail, options);
    }



function win(r) {
      

      var img_src="http://ku4h.com/photo/"+member_srl+"_"+add_code+".jpg";
      var file_name=member_srl+"_"+add_code+".jpg";
      console.log(img_src);
      $("#img_board").attr("src", img_src);
 
    }

    // 성공


    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
navigator.notification.activityStop();
if (add_mode=="photo") {
      photo_show(add_category);
  } else if (add_mode=="freeboard") {

     freeboard_show(add_category);
  } 
  else if (add_mode=="qna") {

     qna_show(add_category);
  } 
  else if (add_mode=="goods") {

     goods_show(add_category);
  } 

 var modal = UIkit.modal("#add_contents_uk_modal");
    modal.hide();       
        

    }

    function fail(error) {
        navigator.notification.activityStop();

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
