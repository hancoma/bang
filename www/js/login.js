/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
  window.localStorage.removeItem("user_id");
  window.localStorage.clear();
  window.localStorage.removeItem("member_srl");
  window.localStorage.clear();
  window.localStorage.removeItem("language");
  window.localStorage.clear();
  
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
      

        console.log('Received Event: ' + id);
        app.onmain();
    },
    onmain : function() {
       
    }
};




$("#find_pw_btn").click(
    function() {
      find_pw();
       

    })
$("#find_pw_submit").click(
    function() {
        var email=$("#email").val()
        alert_msg("MESSAGE",email+" send new password");
        var modal = UIkit.modal("#find_pw_uk_modal");
           modal.hide();
    })

$("#login_btn").click(
    function() {
    var user_id=$("#user_id").val();
    var password=$("#password").val();
    var language=$("#language").val();

    if (!user_id) {
        alert_msg("LOGIN","메일을 입력하세요."); 
        
        exit;
    }
    if (!password) {
        alert_msg("LOGIN","비밀번호를 입력하세요."); 
      
        exit;
    }
    login_press(user_id,password,language);

    })

function login_press(user_id,password,language) {
    var user_id=user_id;
    var password=password;
    var language=language;
    window.localStorage.setItem("language", language);


     $.post("http://homes1004.kr/login_check.php",
   {
    user_id:user_id,
    password:password
    
       },
   function(data){
     console.log(data);
    if (data=="ok"){
   
    alert_msg("LOGIN","로그인 되었습니다.");
    // 회원 memberuid 가져오기
        window.localStorage.setItem("user_id", user_id);
        user_id = window.localStorage.getItem("user_id");
        console.log(user_id);
               $.post("http://homes1004.kr/login_check_uid.php",
               {
                user_id:user_id
                   },
               function(data){
                
                window.localStorage.setItem("member_srl", data);
                member_srl = window.localStorage.getItem("member_srl");
                console.log(member_srl);
                 location.replace('main.html') ;
               });
          


    } else {
 alert_msg("LOGIN",data);

    } 
   });
}
function join_popup() {

    var url="http://homes1004.kr/xe/index.php?act=dispMemberSignUpForm";
  var ref_join = cordova.InAppBrowser.open(url, '_blank', 'location=no');
   ref_join.addEventListener('loadstop', function(event) {        
    if (event.url.match("member_join_end")) {
        alert("회원가입 되었습니다.");
        ref_join.close();
       
    }
  });
    
        
}

function find_pw() {

    var url="http://homes1004.kr/xe/index.php?mid=index&act=dispMemberFindAccount&m=1";
  var ref_find_pw = cordova.InAppBrowser.open(url, '_blank', 'location=no');
   ref_find_pw.addEventListener('loadstop', function(event) {        
    if (event.url.match("end_find")) {
        ref_find_pw.close();
       
    }
  });
    
        
}

function join_press() {

    var modal = UIkit.modal("#join_uk_modal",{center: true});
           modal.show();
}
function save_member() {
    var join_email=$("#join_email").val();
    var join_pw1=$("#join_pw1").val();
    var join_pw2=$("#join_pw2").val();
    var nick_name=$("#nick_name").val();
    var telephone=$("#join_telephone").val();
    if (!join_email) {
        alert_msg("회원가입","이메일을 입력하세요.");
        return;
    }
     if (!telephone) {
        alert_msg("회원가입","전화번호를 입력하세요.");
        return;
    }
     if (!join_pw1) {
        alert_msg("회원가입","비밀번호를 입력하세요.");
        return;
    }
       if (!join_pw2) {
        alert_msg("회원가입","비밀번호를 입력하세요.");
        return;
    }

       if (join_pw1!=join_pw2) {
        alert_msg("회원가입","비밀번호가 다릅니다. 다시 입력하세요.");
        return;
    }

    if (!nick_name) {
        alert_msg("회원가입","닉네임을 입력 하세요.");
        return;
    }


                $.post("http://homes1004.kr/join_member.php",
               {
                email:join_email,
                password:join_pw1,
                nick_name:nick_name,
                telephone:telephone
                   },
               function(data){
                console.log(data);
                alert_msg("감사합니다.","회원가입이 완료 되었습니다.");
  var modal = UIkit.modal("#join_uk_modal",{center: true});
           modal.hide();

               });

}