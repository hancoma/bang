
function getImage() {
 

   
        navigator.camera.getPicture(uploadPhoto, function(message) {
alert('사진 등록에 실패 했습니다.');
},{
quality: 100,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.CAMERA
});
    }

    

    function uploadPhoto(imageURI) {
          var uuid=device.uuid;
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
        ft.upload(imageURI, "http://homes1004.kr/upload_bang_app.php", win, fail, options);
    }



function win(r) {
       console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
navigator.notification.activityStop();
var uuid=device.uuid;
      var img_src="http://homes1004.kr/photo3/"+uuid+".jpg";
      var file_name=uuid+".jpg";
      console.log(r.response);
    //  $("#photo1").attr("src", img_src);
 
    }

    // 성공


   

    function fail(error) {
        navigator.notification.activityStop();

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
