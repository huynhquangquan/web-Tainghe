var productArray = [
   { productId: 0, brand: 'none', img: 'none', name: 'none', price: 0, type: 'none', quantity: 1 },
   { productId: 1080, brand: 'Sony', img: 'img/Shop tai nghe/On ear/Sony/Sony WH-CH520.jpg', name: 'Sony WH-CH520', price: 1290000, type: 'On ear', quantity: 113 },
   { productId: 1079, brand: 'Sony', img: 'img/Shop tai nghe/On ear/Sony/Bluetooth Sony WH-CH510.jpg', name: 'Sennheiser RS 175', price: 950000, type: 'On ear', quantity: 238 },
   { productId: 1078, brand: 'Skullcandy', img: 'img/Shop tai nghe/On ear/Skullcandy/Riff Wireless 2.jpg', name: 'Riff Wireless 2', price: 1550000, type: 'On ear', quantity: 162 },
   { productId: 1077, brand: 'Skullcandy', img: 'img/Shop tai nghe/On ear/Skullcandy/Cassette Wireless.jpg', name: 'Cassette Wireless', price: 980000, type: 'On ear', quantity: 250 },
   { productId: 1076, brand: 'Sennheiser', img: 'img/Shop tai nghe/On ear/Sennheiser/Momentum 4.jpg', name: 'Momentum 4', price: 7990000, type: 'On ear', quantity: 77 },
   { productId: 1075, brand: 'Sennheiser', img: 'img/Shop tai nghe/On ear/Sennheiser/EPOS C20.jpg', name: 'EPOS C20', price: 7039000, type: 'On ear', quantity: 118 },
   { productId: 1074, brand: 'Sennheiser', img: 'img/Shop tai nghe/On ear/Sennheiser/ADAPT 261.jpg', name: 'ADAPT 261', price: 6290000, type: 'On ear', quantity: 87 },
   { productId: 1073, brand: 'Plantronics', img: 'img/Shop tai nghe/On ear/Plantronics/Plantronics Voyager 4210 UC.jpg', name: 'Plantronics Voyager 4210 UC', price: 5220000, type: 'On ear', quantity: 223 },
   { productId: 1072, brand: 'Plantronics', img: 'img/Shop tai nghe/On ear/Plantronics/BackBeat SENSE.jpg', name: 'Beyerdynamic Lagoon Anc', price: 5900000, type: 'On ear', quantity: 110 },
   { productId: 1071, brand: 'Plantronics', img: 'img/Shop tai nghe/On ear/Plantronics/Backbeat Fit 505.jpg', name: 'Sony WH CH720N', price: 2990000, type: 'On ear', quantity: 176 },
   { productId: 1070, brand: 'Plantronics', img: 'img/Shop tai nghe/On ear/Plantronics/BackBeat 500.jpg', name: 'Sony Pulse 3D CFI-ZWH1G', price: 2699000, type: 'On ear', quantity: 157 },
   { productId: 1069, brand: 'Pioneer', img: 'img/Shop tai nghe/On ear/Pioneer/Bluetooth Pioneer SE-S3BT.jpg', name: 'Bluetooth Pioneer SE-S3BT', price: 1290000, type: 'On ear', quantity: 90 },
   { productId: 1068, brand: 'Philips', img: 'img/Shop tai nghe/On ear/Philips/Philips TAH4205.jpg', name: 'Philips TAH4205', price: 950000, type: 'On ear', quantity: 181 },
   { productId: 1067, brand: 'NuForce', img: 'img/Shop tai nghe/On ear/NuForce/Bluetooth NuForce BHP2.jpg', name: 'Bluetooth NuForce BHP2', price: 645000, type: 'On ear', quantity: 209 },
   { productId: 1066, brand: 'Marshall', img: 'img/Shop tai nghe/On ear/Marshall/Bluetooth Marshall Major IV.jpg', name: 'Bluetooth Marshall Major IV', price: 3690000, type: 'On ear', quantity: 244 },
   { productId: 1065, brand: 'Koss', img: 'img/Shop tai nghe/On ear/Koss/Koss PortaPro Wireless.jpg', name: 'Koss PortaPro Wireless', price: 1650000, type: 'On ear', quantity: 255 },
   { productId: 1064, brand: 'JBL', img: 'img/Shop tai nghe/On ear/JBL/JBL JR300BT.jpg', name: 'JBL JR300BT', price: 1090000, type: 'On ear', quantity: 251 },
   { productId: 1063, brand: 'JBL', img: 'img/Shop tai nghe/On ear/JBL/Bluetooth JBL Everest 310GA BT.jpg', name: 'Bluetooth JBL Everest 310GA BT', price: 4650000, type: 'On ear', quantity: 270 },
   { productId: 1062, brand: 'FIIL Audio', img: 'img/Shop tai nghe/On ear/FIIL Audio/Bluetooth FiiL Diva Pro.jpg', name: 'Bluetooth FiiL Diva Pro', price: 870000, type: 'On ear', quantity: 142 },
   { productId: 1061, brand: 'FIIL Audio', img: 'img/Shop tai nghe/On ear/FIIL Audio/Bluetooth FiiL Diva 2 Pro.jpg', name: 'Bluetooth FiiL Diva 2 Pro', price: 1490000, type: 'On ear', quantity: 212 },
   { productId: 1060, brand: 'Audio-technica', img: 'img/Shop tai nghe/On ear/Audio-technica/bluetooth ATH-SR5BT.jpg', name: 'bluetooth ATH-SR5BT', price: 3500000, type: 'On ear', quantity: 96 },
   { productId: 1059, brand: 'SoundMAGIC', img: 'img/Shop tai nghe/In ear/SoundMAGIC/T60BT.jpg', name: 'T60BT', price: 969000, type: 'In ear', quantity: 202 },
   { productId: 1058, brand: 'Sony', img: 'img/Shop tai nghe/In ear/Sony/Sony WF-C700N.jpg', name: 'Sony WF-C700N', price: 2490000, type: 'In ear', quantity: 263 },
   { productId: 1057, brand: 'Sony', img: 'img/Shop tai nghe/In ear/Sony/Sony WF-C500.jpg', name: 'Sony WF-C500', price: 1890000, type: 'In ear', quantity: 107 },
   { productId: 1056, brand: 'Sony', img: 'img/Shop tai nghe/In ear/Sony/Sony WF-1000XM5.jpg', name: 'Sony WF-1000XM5', price: 6990000, type: 'In ear', quantity: 72 },
   { productId: 1055, brand: 'Sony', img: 'img/Shop tai nghe/In ear/Sony/Sony WF-1000XM4.jpg', name: 'Sony WF-1000XM4', price: 4390000, type: 'In ear', quantity: 142 },
   { productId: 1054, brand: 'Sony', img: 'img/Shop tai nghe/In ear/Sony/Sony LinkBuds S WF-LS900N.jpg', name: 'Sony LinkBuds S WF-LS900N', price: 3490000, type: 'In ear', quantity: 151 },
   { productId: 1053, brand: 'Beyerdynamic', img: 'img/Shop tai nghe/In ear/Beyerdynamic/True Wireless Beyerdynamic Free BYRD.jpg', name: 'True Wireless Beyerdynamic Free BYRD', price: 5990000, type: 'In ear', quantity: 65 },
   { productId: 1052, brand: 'Beats', img: 'img/Shop tai nghe/In ear/Beats/True Wireless Beats Studio Buds - chính hãng.jpg', name: 'True Wireless Beats Studio Buds - chính hãng', price: 2600000, type: 'In ear', quantity: 73 },
   { productId: 1051, brand: 'Bang & Olufsen', img: 'img/Shop tai nghe/In ear/Bang & Olufsen/True Wireless B&O Beoplay E8 Sport.jpg', name: 'True Wireless B&O Beoplay E8 Sport', price: 8990000, type: 'In ear', quantity: 66 },
   { productId: 1050, brand: 'Bang & Olufsen', img: 'img/Shop tai nghe/In ear/Bang & Olufsen/B&O Beoplay EQ.jpg', name: 'B&O Beoplay EQ', price: 9500000, type: 'In ear', quantity: 203 },
   { productId: 1049, brand: 'Audio-technica', img: 'img/Shop tai nghe/In ear/Audio-technica/ATH-TWX9.jpg', name: 'ATH-TWX9', price: 5990000, type: 'In ear', quantity: 284 },
   { productId: 1048, brand: 'Audio-technica', img: 'img/Shop tai nghe/In ear/Audio-technica/ATH-SQ1TW.jpg', name: 'ATH-SQ1TW', price: 1990000, type: 'In ear', quantity: 153 },
   { productId: 1047, brand: 'Audio-technica', img: 'img/Shop tai nghe/In ear/Audio-technica/ATH-ANC300TW.jpg', name: 'ATH-ANC300TW', price: 6490000, type: 'In ear', quantity: 97 },
   { productId: 1046, brand: 'Astell & Kern', img: 'img/Shop tai nghe/In ear/Astell & Kern/Astell & Kern AK UW100.jpg', name: 'Astell & Kern AK UW100', price: 6990000, type: 'In ear', quantity: 122 },
   { productId: 1045, brand: 'Apple', img: 'img/Shop tai nghe/In ear/Apple/SpinFit SuperFine™ for AirPods Pro.jpg', name: 'Apple Airpods 3', price: 349000, type: 'In ear', quantity: 81 },
   { productId: 1044, brand: 'Apple', img: 'img/Shop tai nghe/In ear/Apple/AirPods Pro 2021  Magsafe.jpg', name: 'Sony WF C500', price: 4750000, type: 'In ear', quantity: 264 },
   { productId: 1043, brand: 'Apple', img: 'img/Shop tai nghe/In ear/Apple/Airpods  Pro 2 (2022).jpg', name: 'Sony WF 1000XM5', price: 5990000, type: 'In ear', quantity: 256 },
   { productId: 1042, brand: 'Skullcandy', img: 'img/Shop tai nghe/over-ears/skullcandy_crusher_anc.jpg', name: 'Skullcandy Crusher Anc', price: 6590000, type: 'over-ear', quantity: 87 },
   { productId: 1041, brand: 'Skullcandy', img: 'img/Shop tai nghe/over-ears/skullcandy-crusher-wireless.jpg', name: 'Skullcandy Crusher Wireless', price: 3450000, type: 'over-ear', quantity: 177 },
   { productId: 1040, brand: 'Skullcandy', img: 'img/Shop tai nghe/over-ears/skullcandy_hesh_anc.jpg', name: 'Skullcandy Hesh Anc', price: 2950000, type: 'over-ear', quantity: 123 },
   { productId: 1039, brand: 'Skullcandy', img: 'img/Shop tai nghe/over-ears/skullcandy_hesh_evo_wireless.jpg', name: 'Skullcandy Hesh Evo Wireless', price: 3992000, type: 'over-ear', quantity: 267 },
   { productId: 1038, brand: 'Skullcandy', img: 'img/Shop tai nghe/over-ears/skullcandy_crusher_anc_2.jpg', name: 'Skullcandy Crusher Anc 2', price: 5990000, type: 'over-ear', quantity: 88 },
   { productId: 1037, brand: 'Sennheiser', img: 'img/Shop tai nghe/over-ears/sennheiser_rs_175.jpg', name: 'Sennheiser RS 175', price: 7999000, type: 'over-ear', quantity: 172 },
   { productId: 1036, brand: 'Sennheiser', img: 'img/Shop tai nghe/over-ears/sennheiser_hd_350bt.jpg', name: 'Sennheiser HD 350BT', price: 1790000, type: 'over-ear', quantity: 202 },
   { productId: 1035, brand: 'Sennheiser', img: 'img/Shop tai nghe/over-ears/sennheiser_gsp370_wireles.jpg', name: 'Sennheiser GSP370 Wireless', price: 4389000, type: 'over-ear', quantity: 56 },
   { productId: 1034, brand: 'Sennheiser', img: 'img/Shop tai nghe/over-ears/sennheiser_hd_450bt.jpg', name: 'Sennheiser HD 450BT', price: 2990000, type: 'over-ear', quantity: 285 },
   { productId: 1033, brand: 'Sennheiser', img: 'img/Shop tai nghe/over-ears/sennheiser_hd_458bt.jpg', name: 'Sennheiser HD 458BT', price: 3599000, type: 'over-ear', quantity: 93 },
   { productId: 1032, brand: 'Beyerdynamic', img: 'img/Shop tai nghe/over-ears/beyerdynamic_amironwireless.jpg', name: 'Beyerdynamic Amiron wireless', price: 16500000, type: 'over-ear', quantity: 110 },
   { productId: 1031, brand: 'Beyerdynamic', img: 'img/Shop tai nghe/over-ears/Beyerdynamic_Aventho_Wireless.jpg', name: 'Beyerdynamic Aventho Wireless', price: 12500000, type: 'over-ear', quantity: 134 },
   { productId: 1030, brand: 'Beyerdynamic', img: 'img/Shop tai nghe/over-ears/beyerdynamic_lagoon_anc.jpg', name: 'Beyerdynamic Lagoon Anc', price: 5900000, type: 'over-ear', quantity: 286 },
   { productId: 1029, brand: 'Sony', img: 'img/Shop tai nghe/over-ears/sony_wh_ch720n.jpg', name: 'Sony WH CH720N', price: 2990000, type: 'over-ear', quantity: 231 },
   { productId: 1028, brand: 'Sony', img: 'img/Shop tai nghe/over-ears/sony_pulse_3d_cfi_zwh1g.jpg', name: 'Sony Pulse 3D CFI-ZWH1G', price: 2599000, type: 'over-ear', quantity: 189 },
   { productId: 1027, brand: 'Sony', img: 'img/Shop tai nghe/over-ears/sony_pulse_3d_midnight_black_cfi_zwh1g_01.jpg', name: 'Sony Pulse 3D Midnight Black CFI-ZWH1G 01', price: 2699000, type: 'over-ear', quantity: 160 },
   { productId: 1026, brand: 'Audio-technica', img: 'img/Shop tai nghe/over-ears/ATH-MSR7.jpg', name: 'ATH MSR7', price: 4900000, type: 'over-ear', quantity: 91 },
   { productId: 1025, brand: 'Audio-technica ', img: 'img/Shop tai nghe/over-ears/ATH-DSR7BT.jpg', name: 'ATH DSR7BT', price: 8600000, type: 'over-ear', quantity: 178 },
   { productId: 1024, brand: 'Audio-technica ', img: 'img/Shop tai nghe/over-ears/ATH-DSR9BT.jpg', name: 'ATH DSR9BT', price: 13900000, type: 'over-ear', quantity: 66 },
   { productId: 1023, brand: 'Audio-technica ', img: 'img/Shop tai nghe/over-ears/ATH-M50xBT2.jpg', name: 'ATH M50xBT2', price: 5990000, type: 'over-ear', quantity: 295 },
   { productId: 1022, brand: 'Audio-technica ', img: 'img/Shop tai nghe/over-ears/ATH-S220BT.jpg', name: 'ATH S220BT', price: 1990000, type: 'over-ear', quantity: 124 },
   { productId: 1021, brand: 'Audio-technica', img: 'img/Shop tai nghe/over-ears/ATH-M50xBT2MO.jpg', name: 'ATH M50xBT2MO', price: 6290000, type: 'over-ear', quantity: 177 },
   { productId: 1020, brand: 'TribitAudio', img: 'img/Shop tai nghe/earbuds/tribit_flybuds_c2.jpg', name: 'Tribit Flybuds C2', price: 600000, type: 'earbud', quantity: 269 },
   { productId: 1019, brand: 'Sudio', img: 'img/Shop tai nghe/earbuds/sudio_n2.jpg', name: 'Sudio N2', price: 1690000, type: 'earbud', quantity: 275 },
   { productId: 1018, brand: 'SoundPEATS', img: 'img/Shop tai nghe/earbuds/soundpeats_air4.jpg', name: 'SoundPEATS Air4', price: 1390000, type: 'earbud', quantity: 154 },
   { productId: 1017, brand: 'SoundPEATS', img: 'img/Shop tai nghe/earbuds/soundpeats_air_3_deluxe_HS.jpg', name: 'SoundPEATS Air3 Deluxe HS', price: 1190000, type: 'earbud', quantity: 188 },
   { productId: 1016, brand: 'SoundPEATS', img: 'img/Shop tai nghe/earbuds/soundpeats_air3.jpg', name: 'SoundPEATS Air3', price: 890000, type: 'earbud', quantity: 68 },
   { productId: 1015, brand: 'SoundPEATS', img: 'img/Shop tai nghe/earbuds/soundpeats_trueair2.jpg', name: 'SoundPEATS TrueAir2', price: 750000, type: 'earbud', quantity: 103 },
   { productId: 1014, brand: 'SoundPEATS', img: 'img/Shop tai nghe/earbuds/soundpeats_wings2.jpg', name: 'SoundPEATS Wings2', price: 690000, type: 'earbud', quantity: 57 },
   { productId: 1013, brand: 'Sabbat', img: 'img/Shop tai nghe/earbuds/sabbat_x12_pro.jpg', name: 'Sabbat X12 Pro', price: 950000, type: 'earbud', quantity: 121 },
   { productId: 1012, brand: 'Sabbat', img: 'img/Shop tai nghe/earbuds/sabbat_x12_ultra_star.jpg', name: 'Sabbat X12 Ultra Star', price: 1150000, type: 'earbud', quantity: 269 },
   { productId: 1011, brand: 'Monster', img: 'img/Shop tai nghe/earbuds/monster_clarity105.jpg', name: 'Monster Clarity105', price: 1950000, type: 'earbud', quantity: 112 },
   { productId: 1010, brand: 'Marshall', img: 'img/Shop tai nghe/earbuds/Marshall_Minor_III.jpg', name: 'Marshall Minor III', price: 3590000, type: 'earbud', quantity: 57 },
   { productId: 1009, brand: 'Huawei', img: 'img/Shop tai nghe/earbuds/huawei_freebuds_3.jpg', name: 'Huawei Freebuds 3', price: 3090000, type: 'earbud', quantity: 228 },
   { productId: 1008, brand: 'Havit', img: 'img/Shop tai nghe/earbuds/havit_TW916.jpg', name: 'Havit TW916', price: 499000, type: 'earbud', quantity: 108 },
   { productId: 1007, brand: 'FIIL', img: 'img/Shop tai nghe/earbuds/fiil_CC2.jpg', name: 'FIIL CC2', price: 1299000, type: 'earbud', quantity: 105 },
   { productId: 1006, brand: 'FIIL', img: 'img/Shop tai nghe/earbuds/fiil_CC.jpg', name: 'FIIL CC', price: 1450000, type: 'earbud', quantity: 212 },
   { productId: 1005, brand: 'FIIL', img: 'img/Shop tai nghe/earbuds/fiil_key.jpg', name: 'FIIL Key', price: 890000, type: 'earbud', quantity: 74 },
   { productId: 1004, brand: 'Defunc', img: 'img/Shop tai nghe/earbuds/Defunc _True_Go.jpg', name: 'Defunc True Go', price: 1490000, type: 'earbud', quantity: 58 },
   { productId: 1003, brand: 'Apple', img: 'img/Shop tai nghe/earbuds/apple_airpods_3.jpg', name: 'Apple Airpods 3', price: 4390000, type: 'earbud', quantity: 163 },
   { productId: 1002, brand: 'Sony', img: 'img/Shop tai nghe/earbuds/Sony-WF-C500.jpg', name: 'Sony WF C500', price: 6990000, type: 'earbud', quantity: 97 },
   { productId: 1001, brand: 'Sony', img: 'img/Shop tai nghe/earbuds/sony-wf-1000xm5.jpg', name: 'Sony WF 1000XM5', price: 2290000, type: 'earbud', quantity: 115 }

];
const listProduct = 'listProduct'

var product = JSON.parse(localStorage.getItem(listProduct));
// localStorage.setItem(listProduct, JSON.stringify(productArray));
if(!product){
   localStorage.setItem(listProduct, JSON.stringify(productArray))
}


for (var i = 0; i < product.length; i++) {
   if(product[i].status == null){
      product[i].status = 1;
   }
}

localStorage.setItem(listProduct, JSON.stringify(product))


// ------------------------------------------------------------Header-----------------------------------------------------
//-----User-------
const user = document.querySelector(".user");
//-----Signup-----
const signup = document.querySelector(".signup");
const signuparea = document.getElementById("signup-area");
const closeSignup = document.querySelector(".close-signup");
const signupsubmit = document.querySelector(".submit-signup");
var username = document.getElementById("username-field"),
   password = document.getElementById("password-field"),
   phonenumber = document.getElementById("number-field"),
   address = document.getElementById("address-field"),
   confirmation = document.getElementById("confirm-password-field");
signup.addEventListener("click", function () {
   document.querySelector(".signup-form").style.display = "flex";
});

signupsubmit.addEventListener("click", function () {
   var check = true;
   // Get all users from localStorage
   var users = JSON.parse(localStorage.getItem("users")) || [];

   // Find if the username matches with any existed username
   var checkusername = users.find(function (checkusername) {
    return checkusername.username === username.value.trim();
   });

   if (!username.value) {
      document.querySelector(".username-warning").innerHTML = "Vui lòng không bỏ trống";
      check = false;
   } else {
        var usernameRegex = /^[a-zA-Z\d\s\p{L}]+$/u;
       if (!username.value.match(usernameRegex)) {
          document.querySelector(".username-warning").innerHTML = "Tên người chỉ được dùng chữ và số";
          check = false;
       }else{
           document.querySelector(".username-warning").innerHTML = "";
       }
   }
   if (!password.value) {
      document.querySelector(".password-warning").innerHTML = "Vui lòng không bỏ trống";
      check = false;
   } else {
      if (password.value.length < 8) {
         document.querySelector(".password-warning").innerHTML = "Mật khẩu phải tối thiểu 8 kí tự";
         check = false;
      } else {
         document.querySelector(".password-warning").innerHTML = "";
      }
   }
   if (!phonenumber.value) {
      document.querySelector(".number-warning").innerHTML = "Vui lòng không bỏ trống";
      phonenumber.value = "";
      check = false;
    } else {
      var phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(phonenumber.value)) {
         document.querySelector(".number-warning").innerHTML = "Số điện thoại chỉ được chứa 10 chữ số bắt đầu bằng con số 0";
         phonenumber.value = "";
         check = false;
      } else {
            var phoneNumberNumeric = Number(phonenumber.value);
            if (phoneNumberNumeric < 100000000 || phoneNumberNumeric > 999999999) {
               document.querySelector(".number-warning").innerHTML = "Số điện thoại không đúng";
               phonenumber.value = "";
               check = false;
            } else {
               document.querySelector(".number-warning").innerHTML = "";
            }
          }
    }

   if (!address.value) {
      document.querySelector(".address-warning").innerHTML = "Vui lòng không bỏ trống";
      check = false;
   } else {
      var addressRegex = /^[a-zA-Z\d\s\p{L},\-\/]+$/u;
      if (!address.value.match(addressRegex)){
            document.querySelector(".address-warning").innerHTML = "Vui lòng nhập lại địa chỉ";
            check = false;
        }
        else{
            document.querySelector(".address-warning").innerHTML = "";
        }
   }
   if (!document.getElementById("info-verification").checked) {
      document.querySelector(".checkbox-warning").style.color = "red";
      check = false;
   } else {
      document.querySelector(".checkbox-warning").style.color = "black";
   }
   if (checkusername) {
      document.querySelector(".username-warning").innerHTML = "Người dùng đã tồn tại";
      check = false;
   }
   if (confirmation.value !== password.value) {
      document.querySelector(".confirmation-warning").innerHTML = "Mật khẩu không trùng khớp";
      confirmation.value = "";
      check = false;
   }else{
       document.querySelector(".confirmation-warning").innerHTML = "";
   }
   if (check === true) {
      // Add the new user to the array
      users.push({
         username: username.value,
         phone: phonenumber.value,
         address: address.value,
         password: password.value
      });

      // Save the updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      alert("Tài khoản đã đăng kí thành công!");
      window.location.reload(check);
   }
});
closeSignup.addEventListener("click", function () {
   document.querySelector(".signup-form").style.display = "none";
});


var togglepasswordlogin = document.querySelector(".toggle-password-login");
var togglepasswordsignup = document.querySelector(".toggle-password-signup");

togglepasswordlogin.addEventListener ("click", function(){
    if(document.getElementById("pass-field").type === "password"){
        togglepasswordlogin.innerHTML = '<i class="fa fa-eye"></i>';
        document.getElementById("pass-field").type = "text";
    }else{
        togglepasswordlogin.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        document.getElementById("pass-field").type = "password";
    }
});
togglepasswordsignup.addEventListener("click", function(){
    if(document.getElementById("password-field").type === "password"){
        togglepasswordsignup.innerHTML = '<i class="fa fa-eye"></i>';
        document.getElementById("password-field").type = "text";
        document.getElementById("confirm-password-field").type = "text";
    }else{
        togglepasswordsignup.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        document.getElementById("password-field").type = "password";
        document.getElementById("confirm-password-field").type = "password";
    }
});
//----Login/Display User------
const login = document.querySelector(".login");
const loginarea = document.getElementById("login-area");
const logout = document.querySelector(".user-logout");
const closeLogin = document.querySelector(".close-login");
const loginsubmit = document.querySelector(".submit-login");



login.addEventListener("click", function () {
   document.querySelector(".login-form").style.display = "flex";
});
loginsubmit.addEventListener("click", function () {
   var checkname = document.getElementById("name-field");
   var checkpass = document.getElementById("pass-field");
   var checklogin = false;
   // Get all users from localStorage
   var users = JSON.parse(localStorage.getItem("users"));

   // Find the user with the matching username and password
   for (var i = 0; i < users.length; i++) {
      if (checkname.value === "admin") {
         if (checkpass.value === "admin") {
            localStorage.setItem("currentloggedin", JSON.stringify(users[i]));
            checklogin = true;
            // Admin currently logged in
            alert("Chào mừng admin trở lại!");
            break;
         }
      } else {
         if (checkname.value === users[i].username) {
            if (checkpass.value === users[i].password) {
               localStorage.setItem("currentloggedin", JSON.stringify(users[i]));
               checklogin = true;
               // Store the username of the currently logged-in user
               alert("Tài khoản đã đăng nhập thành công!");
            }
         }
      }
   }
   if (checklogin) {
      window.location.reload(user); //Reset the page to load and display username
   } else {
      document.querySelector(".incorrect-login").innerHTML = "Mật khẩu hoặc tên người dùng không đúng!";
      checkname.value = "";
      checkpass.value = "";
   }
});
// Get and display the username of the logged in user
window.onload = function () {
   var loggedInUser = JSON.parse(localStorage.getItem("currentloggedin"));

   // Display the username of the logged in user
   if (loggedInUser) {
      user.style.display = "flex";
      loginarea.style.display = "none";
      signuparea.style.display = "none";
      if (loggedInUser.username === "admin") {
         if (loggedInUser.password === "admin") {
            document.getElementById("username-display").innerHTML = '<i class="fa-solid fa-user"></i>ADMIN';
            document.getElementById("admin-setting").style.display = "flex";
         }
      } else {
         document.getElementById("username-display").innerHTML = '<i class="fa-solid fa-user"></i>' + loggedInUser.username;

      }
   }
   //Logout by reset page after click
   logout.addEventListener("click", function () {
      localStorage.removeItem("currentloggedin");
      user.style.display = "none";
      loginarea.style.display = "flex";
      signuparea.style.display = "flex";
      document.getElementById("admin-setting").style.display = "none";
      document.getElementById("username-display").textContent = "";
      window.location.reload(true);
   });
};
closeLogin.addEventListener("click", function () {
   document.querySelector(".login-form").style.display = "none";
});


//------Admin---------

if (localStorage.getItem("users") === null) {
   var userArray = [];
   var users = { username: 'admin', password: 'admin', address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0566490523' };
   userArray.push(users);
   localStorage.setItem('users', JSON.stringify(userArray));
}
function adminweb(){
    window.location.href="admin.html";
}
//------Logout--------

const showinfo = document.querySelector(".user-form");
var countUser = 0;
user.addEventListener("click", function () {
   countUser++;
   if (countUser % 2 !== 0) {
      showinfo.style.display = "flex";
   } else {
      showinfo.style.display = "none";
      countUser = 0;
   }
});

//----Signup-now
const signupNow = document.querySelector(".signup-now");
signupNow.addEventListener("click", function () {
   document.querySelector(".login-form").style.display = "none";
   document.querySelector(".signup-form").style.display = "flex";
});
// ---------shopping-cart---------

var cart = document.getElementById("cartDisplay");

var cartBtn = document.getElementById("cartBtn");

var closeCart = document.getElementsByClassName("close-cart")[0];

cartBtn.onclick = function () {
   cart.style.display = "block";
};

closeCart.onclick = function () {
   cart.style.display = "none";
};


//-------------------------------Search----------------------------------
// 2 search buttons
function search() {
    var searchInput = document.getElementById('search-input');
   if (!searchInput) {
      displayPage(1, product);
      pagination(product);
      detailBtn();
   } else {
      var searchValue = searchInput.value.toLowerCase();
      var filteredProducts = product.filter(function (product) {
         return product.name.toLowerCase().includes(searchValue) && product.status === 1;
      });
      // filterBrand.length = 0;
      // filterPrice.length = 0;
      // filterType.length = 0;
      // selectedFilter.length = 0;
      // filterTotal = product;
      // countSonyClick = 0;
      // countAutechClick = 0;
      // countSkullcandyClick = 0;
      // countSoundpeatsClick = 0;
      // countAppleClick = 0;
      // countJblClick = 0;
      // countFiilClick = 0;
      // countSennheiserClick = 0;
      // countPlantronicsClick = 0;
      // countBeatsClick = 0;
      // countBangOlufsenClick = 0;
      // countBeyerdynamicClick = 0;
      // countMarshallClick = 0;
      // countPhilipsClick = 0;
      // countKossClick = 0;
      // countDefuncClick = 0;
      // countHavitClick = 0;
      // countHuaweiClick = 0;
      // countMonsterClick = 0;
      // countSabbatClick = 0;
      // countTribitAudioClick = 0;
      // countEarbudsClick = 0;
      // countInearClick = 0;
      // countOnearClick = 0;
      // countOverearsClick = 0;
      // countUnder500k = 0;
      // countFrom500kTo1m = 0;
      // countFrom1mTo3m = 0;
      // countFrom3mTo5m = 0;
      // countFrom5mTo10m = 0;
      // countFrom10mTo15m = 0;
      // countOver15m = 0;
      // filterCheckbox.forEach(function (button) {
      //    button.classList.remove('clicked');
      // });
      // brandFilterClose();
      // priceFilterClose();
      // typeFilterClose();
      // insertNumberOfResult();
      // var productList = document.querySelector('.product-list');
      // productList.innerHTML = '';
      // filteredProducts.forEach(function (product) {
      //    productList.innerHTML += `
      //         <div class="product-item">
      //              <div class="wrap-earphone-content-top">
      //                  <img src="${product.img}" alt="${product.name}">
      //              </div>
      //              <div class="detail-btn" id="${product.productId}">
      //              <p>Chi tiết</p>
      //               </div>
      //              <div class="wrap-earphone-content-bottom">
      //                  <h3>${product.name}</h3>
      //                  <p>Giá: ${product.price} VND</p>
      //              </div>
      //         </div>
      //      `;
      // });
      displayPage(1, filteredProducts);
      pagination(filteredProducts);
      detailBtn();
      searchInput.value = '';
   }
}


//-------------------------------Slide----------------------------------
let index = 0;
const imgNumber = document.querySelectorAll(".slider-contain img");


// const rightChevron = document.querySelector('.fa-chevron-right')

// rightChevron.addEventListener("click", function () {
//    index++
//    if (index > imgNumber.length - 1) {
//       index = 0;
//    }
//    document.querySelector(".slider-contain").style.right = index * 100 + "%"
// })


// const leftChevron = document.querySelector('.fa-chevron-left');
// leftChevron.addEventListener("click", function () {
//    index--
//    if (index < 0) {
//       index = imgNumber.length - 1
//    }
//    document.querySelector(".slider-contain").style.right = index * 100 + "%"
// })
// Cho slide tự chuyển động
const intervalTime = 3000;
function nextSlide() {
   index++;
   if (index > imgNumber.length - 1) {
      index = 0;
   }
   document.querySelector(".slider-contain").style.right = index * 100 + "%";
}
// Tự động chuyển đổi hình ảnh sau mỗi khoảng thời gian
const autoSlideInterval = setInterval(nextSlide, intervalTime);



//-----------------------------------------------------------------------------Bộ lọc----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------Bộ lọc----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------Bộ lọc----------------------------------------------------------------------------------
var filterTotal = [];

var numberOfResults = document.querySelectorAll(".filter-seemore");
function insertNumberOfResult() {
   numberOfResults.forEach(function (element) {
      element.innerHTML = `
         <div class="filter-seemore-btn">
            Xem ${filterTotal.length} kết quả
         </div>
      `;
   });
}


const clickAll = document.body;

const chevronBottomBrandFilter = document.querySelector(".filter-item-brand");
chevronBottomBrandFilter.addEventListener("click", function () {
   typeFilterClose();
   priceFilterClose();
   document.querySelector(".brand-chervon-down").style.display = "none";
   document.querySelector(".brand-chervon-up").style.display = "flex";
   document.querySelector(".filter-item-brand-show").style.display = "flex";
});

const chevronBottomTypeFilter = document.querySelector(".filter-item-type");
chevronBottomTypeFilter.addEventListener("click", function () {
   brandFilterClose();
   priceFilterClose();
   document.querySelector(".type-chervon-down").style.display = "none";
   document.querySelector(".type-chervon-up").style.display = "flex";
   document.querySelector(".filter-item-type-show").style.display = "flex";
});

const chevronBottomPriceFilter = document.querySelector(".filter-item-price");
chevronBottomPriceFilter.addEventListener("click", function () {
   brandFilterClose();
   typeFilterClose();
   document.querySelector(".price-chervon-down").style.display = "none";
   document.querySelector(".price-chervon-up").style.display = "flex";
   document.querySelector(".filter-item-price-show").style.display = "flex";
});


function brandFilterClose() {
   document.querySelector(".brand-chervon-down").style.display = "flex";
   document.querySelector(".brand-chervon-up").style.display = "none";
   document.querySelector(".filter-item-brand-show").style.display = "none";
}

function priceFilterClose() {
   document.querySelector(".price-chervon-down").style.display = "flex";
   document.querySelector(".price-chervon-up").style.display = "none";
   document.querySelector(".filter-item-price-show").style.display = "none";
}

function typeFilterClose() {
   document.querySelector(".type-chervon-down").style.display = "flex";
   document.querySelector(".type-chervon-up").style.display = "none";
   document.querySelector(".filter-item-type-show").style.display = "none";
}
//Trường hợp mảng rỗng

function noResultDisplay() {
   var productList = document.querySelector('.product-list');
   productList.innerHTML = '';
   productList.innerHTML = `
   <div class="no-result">
      <div class="no-result-content">
         <h3> Không có kết quả </h3>
      </div>
   </div>
   ` ;

}


//-----------------------------------------------------Lọc sản phẩm theo hãng-------------------------------
var filterBrand = [];

function addProductsByBrand(brandName) {
   for (var i = 0; i < product.length; i++) {
      if (product[i].brand === brandName && product[i].status === 1) {
         filterBrand.push(product[i])
      }
   }
}

function subProductsByBrand(brandName) {
   filterBrand = filterBrand.filter(function (item) {
      return item.brand !== brandName;
   });
}

var sonyClick = document.getElementById('brandSony');
var countSonyClick = 0
sonyClick.addEventListener('click', function () {
   countSonyClick++
   if (countSonyClick % 2 != 0) {
      addProductsByBrand('Sony')
   } else {
      subProductsByBrand('Sony')
   }
   filterResult()
   insertNumberOfResult()
});

var autechClick = document.getElementById('brandAudioTechnica');
var countAutechClick = 0
autechClick.addEventListener('click', function () {
   countAutechClick++
   if (countAutechClick % 2 != 0) {
      addProductsByBrand('Audio-technica')
   } else {
      subProductsByBrand('Audio-technica')
   }
   filterResult()
   insertNumberOfResult()
});

var skullcandyClick = document.getElementById('brandSkullcandy');
var countSkullcandyClick = 0
skullcandyClick.addEventListener('click', function () {
   countSkullcandyClick++
   if (countSkullcandyClick % 2 != 0) {
      addProductsByBrand('Skullcandy')
   } else {
      subProductsByBrand('Skullcandy')
   }
   filterResult()
   insertNumberOfResult()
});

var soundpeatsClick = document.getElementById('brandSoundPEATS');
var countSoundpeatsClick = 0
soundpeatsClick.addEventListener('click', function () {
   countSoundpeatsClick++
   if (countSoundpeatsClick % 2 != 0) {
      addProductsByBrand('SoundPEATS')
   } else {
      subProductsByBrand('SoundPEATS')
   }
   filterResult()
   insertNumberOfResult()
});

var appleClick = document.getElementById('brandApple');
var countAppleClick = 0
appleClick.addEventListener('click', function () {
   countAppleClick++
   if (countAppleClick % 2 != 0) {
      addProductsByBrand('Apple')
   } else {
      subProductsByBrand('Apple')
   }
   filterResult()
   insertNumberOfResult()
});

var jblClick = document.getElementById('brandJBL');
var countJblClick = 0;
jblClick.addEventListener('click', function () {
   countJblClick++;
   if (countJblClick % 2 != 0) {
      addProductsByBrand('JBL');
   } else {
      subProductsByBrand('JBL');
   }
   filterResult();
   insertNumberOfResult();
});

var fiilClick = document.getElementById('brandFIIL');
var countFiilClick = 0;
fiilClick.addEventListener('click', function () {
   countFiilClick++;
   if (countFiilClick % 2 != 0) {
      addProductsByBrand('FIIL');
   } else {
      subProductsByBrand('FIIL');
   }
   filterResult();
   insertNumberOfResult();
});

var sennheiserClick = document.getElementById('brandSennheiser');
var countSennheiserClick = 0;
sennheiserClick.addEventListener('click', function () {
   countSennheiserClick++;
   if (countSennheiserClick % 2 != 0) {
      addProductsByBrand('Sennheiser');
   } else {
      subProductsByBrand('Sennheiser');
   }
   filterResult();
   insertNumberOfResult();
});

var plantronicsClick = document.getElementById('brandPlantronics');
var countPlantronicsClick = 0;
plantronicsClick.addEventListener('click', function () {
   countPlantronicsClick++;
   if (countPlantronicsClick % 2 != 0) {
      addProductsByBrand('Plantronics');
   } else {
      subProductsByBrand('Plantronics');
   }
   filterResult();
   insertNumberOfResult();
});

var beatsClick = document.getElementById('brandBeats');
var countBeatsClick = 0;
beatsClick.addEventListener('click', function () {
   countBeatsClick++;
   if (countBeatsClick % 2 != 0) {
      addProductsByBrand('Beats');
   } else {
      subProductsByBrand('Beats');
   }
   filterResult();
   insertNumberOfResult();
});

var bangOlufsenClick = document.getElementById('brandBangOlufsen');
var countBangOlufsenClick = 0;
bangOlufsenClick.addEventListener('click', function () {
   countBangOlufsenClick++;
   if (countBangOlufsenClick % 2 != 0) {
      addProductsByBrand('Bang & Olufsen');
   } else {
      subProductsByBrand('Bang & Olufsen');
   }
   filterResult();
   insertNumberOfResult();
});

var beyerdynamicClick = document.getElementById('brandBeyerdynamic');
var countBeyerdynamicClick = 0;
beyerdynamicClick.addEventListener('click', function () {
   countBeyerdynamicClick++;
   if (countBeyerdynamicClick % 2 != 0) {
      addProductsByBrand('Beyerdynamic');
   } else {
      subProductsByBrand('Beyerdynamic');
   }
   filterResult();
   insertNumberOfResult();
});

var marshallClick = document.getElementById('brandMarshall');
var countMarshallClick = 0;
marshallClick.addEventListener('click', function () {
   countMarshallClick++;
   if (countMarshallClick % 2 != 0) {
      addProductsByBrand('Marshall');
   } else {
      subProductsByBrand('Marshall');
   }
   filterResult();
   insertNumberOfResult();
});

var philipsClick = document.getElementById('brandPhilips');
var countPhilipsClick = 0;
philipsClick.addEventListener('click', function () {
   countPhilipsClick++;
   if (countPhilipsClick % 2 != 0) {
      addProductsByBrand('Philips');
   } else {
      subProductsByBrand('Philips');
   }
   filterResult();
   insertNumberOfResult();
});

var philipsClick = document.getElementById('brandPioneer');
var countPhilipsClick = 0;
philipsClick.addEventListener('click', function () {
   countPhilipsClick++;
   if (countPhilipsClick % 2 != 0) {
      addProductsByBrand('Pioneer');
   } else {
      subProductsByBrand('Pioneer');
   }
   filterResult();
   insertNumberOfResult();
});

var philipsClick = document.getElementById('brandAstellKern');
var countPhilipsClick = 0;
philipsClick.addEventListener('click', function () {
   countPhilipsClick++;
   if (countPhilipsClick % 2 != 0) {
      addProductsByBrand('Astell & Kern');
   } else {
      subProductsByBrand('Astell & Kern');
   }
   filterResult();
   insertNumberOfResult();
});

var philipsClick = document.getElementById('brandKoss');
var countPhilipsClick = 0;
philipsClick.addEventListener('click', function () {
   countPhilipsClick++;
   if (countPhilipsClick % 2 != 0) {
      addProductsByBrand('Koss');
   } else {
      subProductsByBrand('Koss');
   }
   filterResult();
   insertNumberOfResult();
});

var defuncClick = document.getElementById('brandDefunc');
var countDefuncClick = 0;
defuncClick.addEventListener('click', function () {
   countDefuncClick++;
   if (countDefuncClick % 2 != 0) {
      addProductsByBrand('Defunc');
   } else {
      subProductsByBrand('Defunc');
   }
   filterResult();
   insertNumberOfResult();
});

var havitClick = document.getElementById('brandHavit');
var countHavitClick = 0;
havitClick.addEventListener('click', function () {
   countHavitClick++;
   if (countHavitClick % 2 != 0) {
      addProductsByBrand('Havit');
   } else {
      subProductsByBrand('Havit');
   }
   filterResult();
   insertNumberOfResult();
});

var huaweiClick = document.getElementById('brandHuawei');
var countHuaweiClick = 0;
huaweiClick.addEventListener('click', function () {
   countHuaweiClick++;
   if (countHuaweiClick % 2 != 0) {
      addProductsByBrand('Huawei');
   } else {
      subProductsByBrand('Huawei');
   }
   filterResult();
   insertNumberOfResult();
});

var monsterClick = document.getElementById('brandMonster');
var countMonsterClick = 0;
monsterClick.addEventListener('click', function () {
   countMonsterClick++;
   if (countMonsterClick % 2 != 0) {
      addProductsByBrand('Monster');
   } else {
      subProductsByBrand('Monster');
   }
   filterResult();
   insertNumberOfResult();
});

var sabbatClick = document.getElementById('brandSabbat');
var countSabbatClick = 0;
sabbatClick.addEventListener('click', function () {
   countSabbatClick++;
   if (countSabbatClick % 2 != 0) {
      addProductsByBrand('Sabbat');
   } else {
      subProductsByBrand('Sabbat');
   }
   filterResult();
   insertNumberOfResult();
});

var tribitAudioClick = document.getElementById('brandTribitAudio');
var countTribitAudioClick = 0;
tribitAudioClick.addEventListener('click', function () {
   countTribitAudioClick++;
   if (countTribitAudioClick % 2 != 0) {
      addProductsByBrand('TribitAudio');
   } else {
      subProductsByBrand('TribitAudio');
   }
   filterResult();
   insertNumberOfResult();
});



//----------------------------------------------------------Lọc sản phẩm theo kiểu tai nghe--------------------------------------------
var filterType = []
function addProductsByType(typeName) {
   for (var i = 0; i < product.length; i++) {
      if (product[i].type === typeName && product[i].status === 1) {
         filterType.push(product[i])
      }
   }
}
function subProductsByType(typeName) {
   filterType = filterType.filter(function (item) {
      return item.type !== typeName;
   });
}



var earbudsClick = document.getElementById('earbudsType');
var countEarbudsClick = 0
earbudsClick.addEventListener('click', function () {
   countEarbudsClick++
   if (countEarbudsClick % 2 != 0) {
      addProductsByType('earbud')
   } else {
      subProductsByType('earbud')
   }
   filterResult()
   insertNumberOfResult()
});

var inearClick = document.getElementById('inearType');
var countInearClick = 0
inearClick.addEventListener('click', function () {
   countInearClick++
   if (countInearClick % 2 != 0) {
      addProductsByType('In ear')
   } else {
      subProductsByType('In ear')
   }
   filterResult()
   insertNumberOfResult()
});

var onearClick = document.getElementById('onearType');
var countOnearClick = 0
onearClick.addEventListener('click', function () {
   countOnearClick++
   if (countOnearClick % 2 != 0) {
      addProductsByType('On ear')
   } else {
      subProductsByType('On ear')
   }
   filterResult()
   insertNumberOfResult()
});

var overearsClick = document.getElementById('overearsType');
var countOverearsClick = 0
overearsClick.addEventListener('click', function () {
   countOverearsClick++
   if (countOverearsClick % 2 != 0) {
      addProductsByType('over-ear')
   } else {
      subProductsByType('over-ear')
   }
   filterResult()
   insertNumberOfResult()
});


//------------------------------------------------Lọc sản phẩm theo giá-----------------------------------------------------------

var filterPrice = []
function addProductsByPrice(min, max) {
   for (var i = 0; i < product.length; i++) {
      if (product[i].price >= min && product[i].price <= max && product[i].status === 1) {
         filterPrice.push(product[i])
      }
   }
}
function subProductsByPrice(min, max) {
   filterPrice = filterPrice.filter(function (item) {
      return item.price < min || item.price > max
   });
}

var under500k = document.getElementById('under500k')
var countUnder500k = 0
under500k.addEventListener("click", function () {
   countUnder500k++
   if (countUnder500k % 2 != 0) {
      addProductsByPrice(0, 500000)
   } else {
      subProductsByPrice(0, 500000)
   }
   filterResult()
   insertNumberOfResult()
})


var from500kTo1m = document.getElementById('500k-1m')
var countFrom500kTo1m = 0
from500kTo1m.addEventListener("click", function () {
   countFrom500kTo1m++
   if (countFrom500kTo1m % 2 != 0) {
      addProductsByPrice(500000, 1000000)
   } else {
      subProductsByPrice(500000, 1000000)
   }
   filterResult()
   insertNumberOfResult()
})

var from1mTo3m = document.getElementById('1m-3m')
var countFrom1mTo3m = 0
from1mTo3m.addEventListener("click", function () {
   countFrom1mTo3m++
   if (countFrom1mTo3m % 2 != 0) {
      addProductsByPrice(1000000, 3000000)
   } else {
      subProductsByPrice(1000000, 3000000)
   }
   filterResult()
   insertNumberOfResult()
})

var from3mTo5m = document.getElementById('3m-5m')
var countFrom3mTo5m = 0
from3mTo5m.addEventListener("click", function () {
   countFrom3mTo5m++
   if (countFrom3mTo5m % 2 != 0) {
      addProductsByPrice(3000000, 5000000)
   } else {
      subProductsByPrice(3000000, 5000000)
   }
   filterResult()
   insertNumberOfResult()
})

var from5mTo10m = document.getElementById('5m-10m')
var countFrom5mTo10m = 0
from5mTo10m.addEventListener("click", function () {
   countFrom5mTo10m++
   if (countFrom5mTo10m % 2 != 0) {
      addProductsByPrice(5000000, 10000000)
   } else {
      subProductsByPrice(5000000, 10000000)
   }
   filterResult()
   insertNumberOfResult()
})

var from10mTo15m = document.getElementById('10m-15m')
var countFrom10mTo15m = 0
from10mTo15m.addEventListener("click", function () {
   countFrom10mTo15m++
   if (countFrom10mTo15m % 2 != 0) {
      addProductsByPrice(10000000, 15000000)
   } else {
      subProductsByPrice(10000000, 15000000)
   }
   filterResult()
   insertNumberOfResult()
})

var over15m = document.getElementById('over15m')
var countOver15m = 0
over15m.addEventListener("click", function () {
   countOver15m++
   if (countOver15m % 2 != 0) {
      for (var i = 0; i < product.length; i++) {
         if (product[i].price >= 15000000) {
            filterPrice.push(product[i])
         }
      }
   } else {
      filterPrice = filterPrice.filter(function (item) {
         return item.price <= 15000000
      });
   }
   filterResult()
   insertNumberOfResult()
})



//------------------đổi giao diện checkbox khi click---------------------------
// Mảng các filter đã chọn
var selectedFilter = [];

// tất cả các checkbox (hãng, giá, loại)
var filterCheckbox = document.querySelectorAll('.filter-checkbox');

// Lặp qua từng nút và thêm sự kiện click
filterCheckbox.forEach(function (button) {
   button.addEventListener('click', function () {
      // Kiểm tra checkbox đã được chọn vào mảng selectedFilter hay chưa
      var isSelected = selectedFilter.includes(button);

      if (isSelected) {
         button.classList.remove('clicked');  //(Chỉ hủy lớp css)
         selectedFilter = selectedFilter.filter(function (selectedFilter) {
            return selectedFilter !== button;

         });
      }
      // Chưa được chọn trước đó 
      else {
         button.classList.add('clicked');
         selectedFilter.push(button);
      }

   });
});



//-------------Hàm gộp filter-----------------
function findTwoCommonElements(arr1, arr2) {
   var result = []
   for (const element of arr1) {
      if (arr2.includes(element) && !result.includes(element)) {
         result.push(element)
      }
   }
   return result
}
function findTreeCommonElements(arr1, arr2, arr3) {
   var result = []
   for (const element of arr1) {

      if (arr2.includes(element) && arr3.includes(element) && !result.includes(element)) {
         result.push(element)
      }
   }
   return result
}
function filterResult() {
   if (filterBrand.length === 0 && filterPrice.length === 0 && filterType.length !== 0) {
      filterTotal = filterType;
   } else if (filterType.length === 0 && filterPrice.length === 0 && filterBrand.length !== 0) {
      filterTotal = filterBrand;
   } else if (filterType.length === 0 && filterPrice.length !== 0 && filterBrand.length === 0) {
      filterTotal = filterPrice
   } else if (filterBrand.length !== 0 && filterPrice.length !== 0 && filterType.length === 0) {
      filterTotal = findTwoCommonElements(filterBrand, filterPrice)
   } else if (filterBrand.length !== 0 && filterPrice.length === 0 && filterType.length !== 0) {
      filterTotal = findTwoCommonElements(filterBrand, filterType)
   } else if (filterBrand.length === 0 && filterPrice.length !== 0 && filterType.length !== 0) {
      filterTotal = findTwoCommonElements(filterPrice, filterType)
   } else if (filterBrand.length !== 0 && filterPrice.length !== 0 && filterType.length !== 0) {
      filterTotal = findTreeCommonElements(filterBrand, filterPrice, filterType)
   } else if (filterBrand.length === 0 && filterPrice.length === 0 && filterType.length === 0) {
      filterTotal = product
   }

   console.log("Mảng đã lọc theo hãng là: ")
   console.log(filterBrand)

   console.log("Mảng đã lọc theo giá là: ")
   console.log(filterPrice)


   console.log("Mảng đã lọc theo loại là: ")
   console.log(filterType)

   console.log("Mảng kết quả: ")
   console.log(filterTotal)


}


// ----------------------Hàm xem kết quả-----------------------

function showResult() {
   // filterResult()
   brandFilterClose();
   priceFilterClose();
   typeFilterClose();

   document.querySelector(".hightolow").style.border = "none";
   document.querySelector(".lowtohigh").style.border = "none";

   displayPage(1, filterTotal);
   pagination(filterTotal);
   detailBtn();


   lowToHigh.addEventListener("click", function () {
      filterTotal.sort(function (a, b) {
         return a.price - b.price;
      });
      document.querySelector(".lowtohigh").style.border = "blue solid 1px";
      document.querySelector(".hightolow").style.border = "none";
      displayPage(1, filterTotal);
      pagination(filterTotal);
      detailBtn();
   });


   highToLow.addEventListener("click", function () {
      filterTotal.sort(function (a, b) {
         return b.price - a.price;
      });
      document.querySelector(".hightolow").style.border = "blue solid 1px";
      document.querySelector(".lowtohigh").style.border = "none";
      displayPage(1, filterTotal);
      pagination(filterTotal);
      detailBtn();
   });

}





//---------------------------------------------Sắp xếp sản phẩm-------------------------------------
const highToLow = document.querySelector(".hightolow");
const lowToHigh = document.querySelector(".lowtohigh");

lowToHigh.addEventListener("click", function () {
   product.sort(function (a, b) {
      return a.price - b.price;
   });
   document.querySelector(".lowtohigh").style.border = "blue solid 1px";
   document.querySelector(".hightolow").style.border = "none";
   displayPage(1, product);
   detailBtn();
});


highToLow.addEventListener("click", function () {
   product.sort(function (a, b) {
      return b.price - a.price;
   });
   document.querySelector(".hightolow").style.border = "blue solid 1px";
   document.querySelector(".lowtohigh").style.border = "none";
   displayPage(1, product);
   detailBtn();
});


// -------------------------------------------------------------------Hiển thị sản phẩm-------------------------------------------------------------------------
// -------------------------------------------------------------------Hiển thị sản phẩm-------------------------------------------------------------------------
// -------------------------------------------------------------------Hiển thị sản phẩm-------------------------------------------------------------------------


// Số sản phẩm trên mỗi trang
const itemsPerPage = 15;

function displayPage(pageNumber, array) {
   if (array.length === 0) {
      noResultDisplay()
   } else {
      array = array.filter(obj => {
         for (const key in obj) {
            if (obj[key] === 0 ) {
               return false
            }
         }
         return true
      })
      var productList = document.querySelector('.product-list');
      productList.innerHTML = '';


      var startIndex = (pageNumber - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
      var count = 0;
      var formattedPrice;

      for (var i = startIndex; i < endIndex && i < array.length; i++) {
         count++;
         formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(array[i].price);
         var productItem = document.createElement('div');
         productItem.classList.add('product-item');
         productItem.innerHTML = `
              <div class="wrap-earphone-content-top">
                  <img src="${array[i].img}" alt="${array[i].name}">
              </div>
              <div class="detail-btn" id="${array[i].productId}">
              <p>Chi tiết</p>
               </div>
              <div class="wrap-earphone-content-bottom">
                  <h3>${array[i].name}</h3>
                  <p>Giá: ` + formattedPrice + ` </p>
              </div>
             
          `;
         productList.appendChild(productItem);

      }

      // Tính số lượng sản phẩm giả cần thêm
      var itemsPerRow = Math.floor(productList.clientWidth / document.querySelector('.product-item').clientWidth);
      if (count % itemsPerRow !== 0) {
         var missingItems = itemsPerRow - (count % itemsPerRow);

         // Thêm sản phẩm giả vào danh sách sản phẩm
         for (var i = 0; i < missingItems; i++) {
            var productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.classList.add('empty');
            productList.appendChild(productItem);
         }
      }
   }


}
// Hiển thị trang đầu tiên khi trang web được tải
displayPage(1, product);
pagination(product);
detailBtn();





function pagination(array) {
   var totalPages = Math.ceil(array.length / itemsPerPage);
   var pagination = document.querySelector('.pagination');
   if(array.length > 15){  
      pagination.innerHTML = '';
      for (var i = 1; i <= totalPages; i++) {
         var pageButton = document.createElement('button');
         pageButton.textContent = i;
         pageButton.addEventListener('click', function () {
            var pageNumber = parseInt(this.textContent);
            displayPage(pageNumber, array);
            detailBtn();
         });
         pagination.appendChild(pageButton);
      }
   }else{
      pagination.innerHTML = '';
   }
  
}

//show detail
function showDetail() {
   document.querySelector(".detail-product").style.display = "flex";
}
function closeDetail() {
   document.querySelector(".detail-product").style.display = "none";
}




//---------------------------------------------------------- Chi tiết sản phẩm-------------------------------------------------------
function returnImg(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i].img
      }
   }
}

function returnName(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i].name
      }
   }
}
function returnPrice(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i].price
      }
   }
}
function returnType(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i].type
      }
   }
}
var productInCartKey = JSON.parse(localStorage.getItem('arrProductInCartKey'));

if (!productInCartKey) {
   localStorage.setItem('arrProductInCartKey', JSON.stringify([]));
   productInCartKey = JSON.parse(localStorage.getItem('arrProductInCartKey'));
}
var listProductSold = JSON.parse(localStorage.getItem("listProductSold"))
if (!listProductSold) {
   localStorage.setItem('listProductSold', JSON.stringify([]))
   listProductSold = JSON.parse(localStorage.getItem("listProductSold"))
}

function returnProductSold(id){
   for(var i = 0; i < listProductSold.length; i++){
      if(listProductSold[i].id === id){
         return listProductSold[i].quantity 
      }
   }
   return 0
}

function detailBtn() {

   var detailButton = document.querySelectorAll(".detail-btn");
   detailButton.forEach(function (button) {
      button.addEventListener("click", showDetail);
      button.addEventListener("click", function () {

         var currentProduct;
         var formattedPrice;
         for (var i = 0; i < product.length; i++) {
            currentProduct = (product.find(product => product.productId = button.id));
            if (product[i].productId == currentProduct.productId) {
               var productSold = returnProductSold(product[i].productId)
               formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product[i].price);
               var detailProduct = document.querySelector('.detail-product');
               detailProduct.innerHTML = '';
               var detailProductContent = document.createElement('div');
               detailProductContent.classList.add('detail-product-content');
               detailProductContent.innerHTML = `
                  <div class="detail-product-content-left">
                     <img src="${product[i].img}" alt="">
                  </div>
                     <div class="detail-product-content-right">
                     <h2>${product[i].name}</h2>
                     <p>Hãng: ${product[i].brand}</p>
                     <p>Loại tai nghe: ${product[i].type}</p>
                     <p>Mã sản phẩm: ${product[i].productId}</p>
                     <p>Số lượng đã bán: ${productSold}</p>
                     <p>Giá: <span class="detail-price"> ` + formattedPrice + `</span></p>
                     <div class="addtocart" id="atc${product[i].productId}">Thêm vào giỏ hàng</div>
                     <div class="close-detail">
                        <i class="fa-solid fa-circle-xmark"></i>
                     </div>
                  </div>
                
             `;
               detailProduct.appendChild(detailProductContent);

               const clickCloseDetail = document.querySelector(".close-detail");
               clickCloseDetail.addEventListener("click", closeDetail);

               var addToCartBtn = document.querySelector(".addtocart");

               var countQuantity = 0
               addToCartBtn.addEventListener("click", function () {
                  alert("Đã thêm vào giỏ hàng thành công")
                  countQuantity++
                  var idProductInCart = parseInt(addToCartBtn.id.slice(3));
                  var found = false;
                  for (var i = 0; i < productInCartKey.length; i++) {
                     if (productInCartKey[i].id === idProductInCart) {
                        productInCartKey[i].quantity++
                        found = true
                        break
                     }
                  }
                  if (!found) {
                     var newObject = { id: idProductInCart, quantity: 1, name: returnName(idProductInCart), price: returnPrice(idProductInCart), img: returnImg(idProductInCart), type: returnType(idProductInCart) };
                     productInCartKey.push(newObject);
                  }
                  localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey));
                  addToCart(productInCartKey)
                  listCheckBox = document.querySelectorAll('.listCheckBox');
               });
               payBtn = document.querySelector('.pay-button')
            }
         }
      });
   });

}


//-------------------------------------------------add to cart-------------------------------
var listCheckBox = document.querySelectorAll('.listCheckBox')

function addToCart(productInCart) {
   var selectedPrdList = document.querySelector(".selected-products-list");
   selectedPrdList.innerHTML = ''
   // product[0].productId = parseInt(product[0].productId)
   if (productInCart.length === 0) {
      return 1
   }
   for (var i = 0; i < productInCart.length; i++) {
      for (var j = 0; j < product.length; j++) {
         if (productInCart[i].id === product[j].productId) {
            formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product[j].price);
            var itemInCart = document.createElement('div');
            itemInCart.classList.add('selected-prd-bar-container');
            itemInCart.innerHTML = ''
            itemInCart.innerHTML = `
            <div class="selected-product-bar">
            <div class="delete-product" onclick="deleteProductInCart(${product[j].productId})">
               <i class="fa-solid fa-trash-can"></i>
            </div>
            <div class="selected-product-thumbnail"> 
               <img src="${product[j].img}" alt="${product[j].name}">
            </div>
   
            <div class="selected-product-info-container">
               <div class="selected-product-info">
                  <div class="prd-name-area">
                     <div class="prd-name"> Tai nghe ${product[j].name} </div>
                  </div>
   
                  <div class="prd-price-quantity-container">
                     <div class="prd-price-quantity">
   
                        <div class="prd-quantity-container">
                           <div class="prd-quantity-grid">
                              <div class="prd-quantity-bar-container">
                                 <div class="prd-quantity-bar">
                                    <button class="decrease"  id="${product[j].productId}DEC" onclick="decreaseProductIncart(${product[j].productId})" > <i class="fa-solid fa-minus"></i></button>
                                    <div class="selected-product-num">  
                                       <input class="inputQIC" type="text" id="${product[j].productId}QIC" value="${productInCartKey[i].quantity}" onblur = "saveDataByInputValue(${product[j].productId})" >
                                    </div>
                                    <button class="increase" id="${product[j].productId}INC" onclick="increaseProductIncart(${product[j].productId})"> <i class="fa-solid fa-plus"></i>
                                    </button>
                                 </div>
                              </div>
                              <div class="inventory-container">
                                 <div class="inventory-grid">
                                    <div class="inventory-quantity-text"> kho </div>
                                    <div class="inventory-quantity"> ${product[j].quantity} </div>
                                 </div>
   
                              </div>
                           </div>
                        </div>
                        <div class="prd-price-container">
                           <div class="prd-price">  ` + formattedPrice + ` </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
   
            <div class="choose-product-area">
               <div class="choose-product-btn"> 
                  <input class="listCheckBox" type="checkbox" name="" id="${product[j].productId}checkBox">
               </div>
            </div>
         </div>
            ` ;
            selectedPrdList.appendChild(itemInCart);
         }
      }
   }
   listCheckBox = document.querySelectorAll('.listCheckBox')
}

addToCart(productInCartKey)

function saveDataByInputValue(id){
   var input ;
   input = document.getElementById(id + "QIC") ;
   for(var i=0; i<productInCartKey.length; i++){
      if(productInCartKey[i].id === id){
         if(!Number.isInteger(Number(input.value))) {
            alert("Vui lòng nhập số nguyên dương") ;
         }
         else {
            if(parseInt(input.value) === 0){
               deleteProductInCart(id)
            }else{
               productInCartKey[i].quantity = parseInt(input.value);
            }
         }
      }

   }
   localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey));
   addToCart(productInCartKey) ;
}

// Xử lý sự kiện tăng giảm giá trị cho từng sản phẩm
function decreaseProductIncart(id) {
   for (var i = 0; i < productInCartKey.length; i++) {
      if (productInCartKey[i].id === id) {
         if (productInCartKey[i].quantity > 0) {
            productInCartKey[i].quantity--
            if(productInCartKey[i].quantity === 0){
               productInCartKey[i].quantity = 1
               deleteProductInCart(id)
            }
         }
        
      }
   }
   localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey));
   addToCart(productInCartKey)
}
function increaseProductIncart(id) {
   for (var i = 0; i < productInCartKey.length; i++) {
      if (productInCartKey[i].id === id) {
         productInCartKey[i].quantity++
      }
   }
   localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey));
   addToCart(productInCartKey)
}
// Hàm xóa sản phẩm trong giỏ hàng
function deleteProductInCart(id) {
   var choice = confirm("Bạn có chắn chắn muốn xóa sản phẩm này?")
   if (choice == true) {
      for (var i = 0; i < productInCartKey.length; i++) {
         if (productInCartKey[i].id === id) {
            productInCartKey.splice(i, 1)
            console.log(productInCartKey)
         }
      }
   }else{
      // addToCart(productInCartKey)
   }
   localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey))
   addToCart(productInCartKey)
}


// --------------------------------------------------Thanh toán-------------------------------------------------------

const orderTrackingBtn = document.querySelector(".order-tracking-button");
orderTrackingBtn.addEventListener("click", function () {
   document.querySelector(".order-tracking-display").style.display = "flex";
});

const orderTrackingCloseBtn = document.querySelector(".close-order-tracking-button") ;
orderTrackingCloseBtn.addEventListener("click", function(){
   document.querySelector(".order-tracking-display").style.display = "none";
})





var waittingListKey = JSON.parse(localStorage.getItem("waittingList"))
if(!waittingListKey){
   localStorage.setItem('waittingList', JSON.stringify([]))
   waittingListKey = JSON.parse(localStorage.getItem("waittingList"))
}


var payBtn = document.querySelector('.pay-button')

var listOrder = [{idOrder: 1000000, dateTime: "none"}] 

var listOrderKey = JSON.parse(localStorage.getItem("listOrder"))
if(!listOrderKey){
   localStorage.setItem('listOrder', JSON.stringify(listOrder))
   listOrderKey = JSON.parse(localStorage.getItem("listOrder"))
}


function createIdOrder(){
   return listOrderKey[listOrderKey.length - 1].idOrder + 1
}


payBtn.addEventListener("click", function () {
   if(!localStorage.getItem("currentloggedin")){
         alert("Vui lòng đăng nhập!");
         cart.style.display="none";
         document.querySelector(".login-form").style.display="flex";
   }else{
      var choice = confirm("Thanh toán những sản phẩm này?")
      if (choice) {
         var clickedNumbers = false 
         var currentTime = new Date();
         var formattedTime = currentTime.toLocaleString();
         listCheckBox.forEach(function (checkBox) {
            if (checkBox.checked) {
               clickedNumbers = true;
               var idCheckBox = checkBox.id.replace('checkBox', '')
               moveToWaittingList(idCheckBox)
            }
            console.log(checkBox.checked)
         })
         listCheckBox = document.querySelectorAll('.listCheckBox')
         if(clickedNumbers){
            addToCart(productInCartKey)
            listCheckBox = document.querySelectorAll('.listCheckBox')
      
            waittingListKey.push({idOrder: createIdOrder(),arr:tempWaittingList, dateTime: formattedTime, status: 0})
            localStorage.setItem('waittingList', JSON.stringify(waittingListKey))
      
            listOrderKey.push({idOrder: waittingListKey[waittingListKey.length - 1].idOrder, dateTime: waittingListKey[waittingListKey.length - 1].dateTime})
            localStorage.setItem('listOrder', JSON.stringify(listOrderKey))
            tempWaittingList = []
            renderOrderList()
            // location.reload(true)
         }else{
            alert("Bạn chưa chọn sản phẩm để thanh toán.\nVui lòng chọn sản phẩm để thanh toán!")

         }
      }
      listCheckBox = document.querySelectorAll('.listCheckBox')
   }
})

var tempWaittingList = []
function moveToWaittingList(id) { 
   for (var i = 0; i < productInCartKey.length; i++) {
      if (productInCartKey[i].id.toString() === id) {
         tempWaittingList.push(productInCartKey[i])
         productInCartKey.splice(i, 1)
         localStorage.setItem('arrProductInCartKey', JSON.stringify(productInCartKey))
      }
   }
}



//-------------------------------------Lịch sử đơn hàng---------------------------------------------

const orderHistoryBtn = document.querySelector(".order-history-button");
orderHistoryBtn.addEventListener("click", function () {
   document.querySelector(".order-history-display").style.display = "flex";
});

const orderHistoryCloseBtn = document.querySelector(".close-order-history-button") ;
orderHistoryCloseBtn.addEventListener("click", function(){
   document.querySelector(".order-history-display").style.display = "none";
})

function OrderHistoryList(){
   var waitingOrderQuantity = document.getElementById("total-order-history")
   var numOder = 0;
   for(var i = 0; i< waittingListKey.length; i++){
      if(waittingListKey[i].status === 1){
         numOder++
      }
   }
   waitingOrderQuantity.innerText = "(" + numOder+ ")"
   const orderHistoryListBody = document.getElementById('order-history-list-body')
   orderHistoryListBody.innerHTML = ''
   if(waittingListKey){
     
      for(var i = 0; i < waittingListKey.length; i++){
         if(waittingListKey[i].status === 1){
            var payTotal = 0
            for(var j = 0; j < waittingListKey[i].arr.length; j++){
               payTotal += waittingListKey[i].arr[j].price*waittingListKey[i].arr[j].quantity
            }
            formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(payTotal)
            var status = ""
            if(waittingListKey[i].status === 0){
               status = "<td class='oder-status'> <i class='fa-solid fa-hourglass-start'  style='font-size: 12px;'></i> Chờ xử lí </td>"
            }else if(waittingListKey[i].status === 1){
               status = "<td class='oder-status'> <i class='fa-solid fa-check' style='font-size: 16px; color: green;'></i> Đã giao hàng </td>"
            }else{
               status = "<td class='oder-status'> <i class='fa-solid fa-xmark' style='font-size: 16px; color: red;'></i> Đơn hàng đã bị hủy. Quý khách sẽ được hoàn tiền trong 2 ngày. </td>"
            }
            
            var rowOrderList = document.createElement('tr')
            rowOrderList.classList.add('order-list-table-content')
            rowOrderList.innerHTML = ''
            rowOrderList.innerHTML = `
            <td>${waittingListKey[i].idOrder}</td>
            <td>
               <div class="products-list-per-order-area" id = "products-list-per-order-area-${waittingListKey[i].idOrder}">
               </div>
            </td>
            <td class="total-payment-per-1-oder">${formattedPrice}</td>
            <td>${waittingListKey[i].dateTime}</td>
            ${status}
            `
            orderHistoryListBody.appendChild(rowOrderList)
   
            const productListContainer = document.getElementById("products-list-per-order-area-"+ waittingListKey[i].idOrder)
            for(var j = 0; j < waittingListKey[i].arr.length; j++){
               var productListContainerChild = document.createElement('div')
               var formattedPriceCurrent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(waittingListKey[i].arr[j].price)
               productListContainerChild.innerHTML = ''
               productListContainerChild.innerHTML = `
               <div class="products-list-per-order" >
               <div class="product-per-order-container">
                  <div class="product-per-order-frame">
                     <div class="product-per-order-img">
                        <img src="${waittingListKey[i].arr[j].img}"
                           alt="">
                     </div>
                     <div class="product-per-order name">${waittingListKey[i].arr[j].name}</div>
                     <div class="product-per-order price">${formattedPriceCurrent}</div>
                     <div class="product-per-order quantity"> x${waittingListKey[i].arr[j].quantity}</div>
                  </div>
               </div>
               </div>
               `
               productListContainer.appendChild(productListContainerChild)
            }
         }
      }  
   }

}
OrderHistoryList() ;


// -----------------------------------------Theo dõi đơn hàng----------------------------------------------------
function renderOrderList(){
   var waitingOrderQuantity = document.getElementById("total-order-quantity")
   var numOder = 0;
   for(var i = 0; i< waittingListKey.length; i++){
      if(waittingListKey[i].status !== 1){
         numOder++
      }
   }
   waitingOrderQuantity.innerText = "(" + numOder+ ")"
   const orderListBody = document.getElementById('order-list-body')
   orderListBody.innerHTML = ''
   if(waittingListKey){
     
      for(var i = 0; i < waittingListKey.length; i++){
         if(waittingListKey[i].status !== 1){
            var payTotal = 0
            for(var j = 0; j < waittingListKey[i].arr.length; j++){
               payTotal += waittingListKey[i].arr[j].price*waittingListKey[i].arr[j].quantity
            }
            formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(payTotal)
            var status = ""
            if(waittingListKey[i].status === 0){
               status = "<td class='oder-status'> <i class='fa-solid fa-hourglass-start'  style='font-size: 12px;'></i> Chờ xử lí </td>"
            }else if(waittingListKey[i].status === 1){
               status = "<td class='oder-status'> <i class='fa-solid fa-check' style='font-size: 16px; color: green;'></i> Đã giao hàng </td>"
            }else{
               status = "<td class='oder-status'> <i class='fa-solid fa-xmark' style='font-size: 16px; color: red;'></i> Đơn hàng đã bị hủy. Quý khách sẽ được hoàn tiền trong 2 ngày. </td>"
            }
            
            var rowOrderList = document.createElement('tr')
            rowOrderList.classList.add('order-list-table-content')
            rowOrderList.innerHTML = ''
            rowOrderList.innerHTML = `
            <td>${waittingListKey[i].idOrder}</td>
            <td>
               <div class="products-list-per-order-area" id = "products-list-per-order-area-${waittingListKey[i].idOrder}">
               </div>
            </td>
            <td class="total-payment-per-1-oder">${formattedPrice}</td>
            <td>${waittingListKey[i].dateTime}</td>
            ${status}
            `
            orderListBody.appendChild(rowOrderList)
   
            const productListContainer = document.getElementById("products-list-per-order-area-"+ waittingListKey[i].idOrder)
            for(var j = 0; j < waittingListKey[i].arr.length; j++){
               var productListContainerChild = document.createElement('div')
               var formattedPriceCurrent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(waittingListKey[i].arr[j].price)
               productListContainerChild.innerHTML = ''
               productListContainerChild.innerHTML = `
               <div class="products-list-per-order" >
               <div class="product-per-order-container">
                  <div class="product-per-order-frame">
                     <div class="product-per-order-img">
                        <img src="${waittingListKey[i].arr[j].img}"
                           alt="">
                     </div>
                     <div class="product-per-order name">${waittingListKey[i].arr[j].name}</div>
                     <div class="product-per-order price">${formattedPriceCurrent}</div>
                     <div class="product-per-order quantity"> x${waittingListKey[i].arr[j].quantity}</div>
                  </div>
               </div>
               </div>
               `
               productListContainer.appendChild(productListContainerChild)
            }
         }
      }  
   }

}
renderOrderList()

//-------------------------------- Sắp xếp mảng theo thời gian--------------------------

function convertToDate(dateString){ // dateString = "21:53:11 4/12/2023"
   var newDateTime = dateString.split(' ')
   var hms = newDateTime[0].split(':') 
   var dmy = newDateTime[1].split('/')
   return {seconds: parseInt(hms[2]), minutes: parseInt(hms[1]), hours: parseInt(hms[0]), day: parseInt(dmy[0]), month: parseInt(dmy[1]), year: parseInt(dmy[2])}
}

function compareDateTime(dt1, dt2){
   if(dt1.year > dt2.year) return true
   else if(dt1.year < dt2.year) return false
   else {
      if(dt1.month > dt2.month) return true
      else if(dt1.month < dt2.month) return false
      else {
         if(dt1.day > dt2.day) return true
         else if(dt1.day < dt2.day) return false
         else {
            if(dt1.hours > dt2.hours) return true
            else if(dt1.hours < dt2.hours) return false
            else {
               if(dt1.minutes > dt2.minutes) return true
               else if(dt1.minutes < dt2.minutes) return false
               else {
                  if(dt1.seconds > dt2.seconds) return true
                  else if(dt1.seconds < dt2.seconds) return false
                  else return true
               }
            }
         }
      }
   }
}
function sortByDateTime(arr){
   arr.sort(function (a, b) {
      const dateTime1 = convertToDate(a.dateTime);
      const dateTime2 = convertToDate(b.dateTime);
      return compareDateTime(dateTime1, dateTime2);
   });
}

