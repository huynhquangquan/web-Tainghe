var product = JSON.parse(localStorage.getItem("listProduct"));
var leftMenuItem = document.getElementsByClassName('left-menu-item');
for (var i = 0; i < leftMenuItem.length; i++) {
   leftMenuItem[i].addEventListener('click', function () {
      for (var j = 0; j < leftMenuItem.length; j++) {
         leftMenuItem[j].classList.remove('selected');
      }
      this.classList.add('selected');
   });
}


// ---------------------------------------------------------------------
const viewProduct = document.querySelector("#admin-view-product");
viewProduct.addEventListener("click", function () {
   document.querySelector(".admin-view-product-contain").style.display = "flex";
   document.querySelector(".admin-order-mana-contain").style.display = "none";
   document.querySelector(".view-customer-contain").style.display = "none";
   document.querySelector(".view-sold-order-contain").style.display = "none";
   document.querySelector(".sold-order-filter-container").style.display = "none";

});

const orderMana = document.querySelector("#admin-order-mana");
orderMana.addEventListener("click", function () {
   document.querySelector(".admin-order-mana-contain").style.display = "flex";
   document.querySelector(".admin-view-product-contain").style.display = "none";
   document.querySelector(".view-customer-contain").style.display = "none";
   document.querySelector(".view-sold-order-contain").style.display = "none";
   document.querySelector(".sold-order-filter-container").style.display = "none";


});

const viewCustomer = document.querySelector("#admin-view-customer");
viewCustomer.addEventListener("click", function () {
   document.querySelector(".view-customer-contain").style.display = "flex";
   document.querySelector(".admin-view-product-contain").style.display = "none";
   document.querySelector(".admin-order-mana-contain").style.display = "none";
   document.querySelector(".view-sold-order-contain").style.display = "none";
   document.querySelector(".sold-order-filter-container").style.display = "none";

});


const viewSoldOrder = document.querySelector("#sold-order");
viewSoldOrder.addEventListener("click", function () {
   document.querySelector(".view-sold-order-contain").style.display = "flex";
   document.querySelector(".view-customer-contain").style.display = "none";
   document.querySelector(".admin-view-product-contain").style.display = "none";
   document.querySelector(".admin-order-mana-contain").style.display = "none";
   document.querySelector(".sold-order-filter-container").style.display = "flex";
});

// ------------------------------------------------------------------------

const editProductBtn = document.querySelector(".edit-product");
editProductBtn.addEventListener("click", function () {
   document.querySelector(".edit-product-display").style.display = "flex";
})

const cancelEditBtn = document.querySelector(".cancel-edit-button");
cancelEditBtn.addEventListener("click", function () {
   document.querySelector(".edit-product-display").style.display = "none";
})


const productThumbnail = document.querySelector("#product-thumbnail");
const prdImage = document.querySelector(".prd-image");
const closeProductImg = document.querySelector(".close-prd-img");

productThumbnail.addEventListener("click", function () {
   document.querySelector(".show-prd-image").style.display = "block";
   prdImage.src = productThumbnail.getAttribute('src');
   console.log(prdImage);
});

closeProductImg.addEventListener("click", function () {
   document.querySelector(".show-prd-image").style.display = "none";
});

// ------------------------------------------------------------------------
//show ảnh sản phẩm ------------------------------------
function showProductImage(id) {
   for (var i = 0; i < product.length; i++) {
      if (product[i].productId === id) {
         var showPrdImgDisplay = document.querySelector('.show-prd-img-display');
         showPrdImgDisplay.style.display = "flex";
         showPrdImgDisplay.innerHTML = '';
         var showPrdImg = document.createElement('div');
         showPrdImg.classList.add('show-prd-img-container');
         showPrdImg.innerHTML = '';
         showPrdImg.innerHTML = `
         <div class="show-prd-image">
            <span class="close-prd-img" onclick = "closeProductImage()"> &times; </span>
            <img class="prd-image" src="${product[i].img}" alt="${product[i].name}">
         </div>
         `
         showPrdImgDisplay.appendChild(showPrdImg);
      }
   }
}
function closeProductImage() {
   document.querySelector('.show-prd-img-display').style.display = "none";
}



// -----------------------------------------------Xem sản phẩm-----------------------------------------------------------------------
// -----------------------------------------------Xem sản phẩm-----------------------------------------------------------------------
// -----------------------------------------------Xem sản phẩm-----------------------------------------------------------------------



function adminViewProduct(arr) {

   var adminProductList = document.querySelector('.product-list-table');
   var tbody = adminProductList.querySelector('tbody');
   tbody.innerHTML = '';
   var checkDeletedList = true
   var checkZeroQuantityList = true
   for(var i = 0; i< arr.length; i++){
      if(arr[i].status !== 0){
         checkDeletedList = false
      }
   }
   for(var i = 0; i< arr.length; i++){
      if(arr[i].quantity !== 0){
         checkZeroQuantityList = false
      }
   }
   if(!checkDeletedList && !checkZeroQuantityList){
      for (var i = 0; i < arr.length; i++) {
         if (arr[i].status === 1 && arr[i].productId !== 0 && checkDeletedList === false) {
            var adminPrdListItem = document.createElement('tr');
            adminPrdListItem.classList.add('product-content');
            adminPrdListItem.innerHTML = `
            <td> ${arr[i].productId} </td>
            <td> <img id="product-thumbnail"
                  src="${arr[i].img}" alt="" onclick = "showProductImage(${arr[i].productId})">
            </td>
            <td> ${arr[i].brand} </td>
            <td> ${arr[i].name} </td>
            <td> ${arr[i].type}</td>
            <td> ${formatPrice(arr[i].price)}</td>
            <td> ${arr[i].quantity}</td>
            <td>
               <div class="product-update-button">
                  <button class="edit-product" id="edit${arr[i].productId}" onclick = "editProduct(${arr[i].productId})"> sửa </button>
                  <button class="delete-product id="delete${arr[i].productId}" onclick = "deleteProduct(${arr[i].productId})"> xoá</button>
               </div>
            </td>
            `;
            tbody.appendChild(adminPrdListItem);
         }
      }
   }
   else if (checkDeletedList && !checkZeroQuantityList){
      for (var i = 0; i < arr.length; i++) {
         if (arr[i].status === 0 && arr[i].productId !== 0) {
            var adminPrdListItem = document.createElement('tr');
            adminPrdListItem.classList.add('product-content');
            adminPrdListItem.innerHTML = `
            <td> ${arr[i].productId} </td>
            <td> <img id="product-thumbnail"
                  src="${arr[i].img}" alt="" onclick = "showProductImage(${arr[i].productId})">
            </td>
            <td> ${arr[i].brand} </td>
            <td> ${arr[i].name} </td>
            <td> ${arr[i].type}</td>
            <td> ${formatPrice(arr[i].price)}</td>
            <td> ${arr[i].quantity}</td>
            <td>
               <div class="product-update-button">
                  <button class="edit-product" id="restore${arr[i].productId}" onclick = "restoreProduct(${arr[i].productId})"> Khôi phục </button>
               </div>
            </td>
            `;
            tbody.appendChild(adminPrdListItem);
         }
      }
   }
   else if(!checkDeletedList && checkZeroQuantityList){
      for (var i = 0; i < arr.length; i++) {
         if (arr[i].status === 1 && arr[i].productId !== 0 && checkDeletedList === false) {
            var adminPrdListItem = document.createElement('tr');
            adminPrdListItem.classList.add('product-content');
            adminPrdListItem.innerHTML = `
            <td> ${arr[i].productId} </td>
            <td> <img id="product-thumbnail"
                  src="${arr[i].img}" alt="" onclick = "showProductImage(${arr[i].productId})">
            </td>
            <td> ${arr[i].brand} </td>
            <td> ${arr[i].name} </td>
            <td> ${arr[i].type}</td>
            <td> ${formatPrice(arr[i].price)}</td>
            <td> ${arr[i].quantity}</td>
            <td>
               <div class="product-update-button">
                  <button class="edit-product" id="edit${arr[i].productId}" onclick = "editProduct(${arr[i].productId})"> sửa </button>
                  <button class="delete-product id="delete${arr[i].productId}" onclick = "deleteProduct(${arr[i].productId})"> xoá</button>
               </div>
            </td>
            `;
            tbody.appendChild(adminPrdListItem);
         }
      }
   }
   

}
adminViewProduct(product);

// Trả về mảng có số lượng trong kho bằng 0
function returnZeroQuantityProduct(){
   var zeroQuantityProductList = []
   for(var i = 0; i < product.length; i++){
      if(product[i].quantity === 0){
         zeroQuantityProductList.push(product[i])
      }
   }
   return zeroQuantityProductList
}

// Trả về mảng đã xóa (có status = 0)
function returnProductDeleted(){
   var productDeletedList = []
   for(var i = 0; i < product.length; i++){
      if(product[i].status === 0){
         productDeletedList.push(product[i])
      }
   }
   return productDeletedList
}


// xóa sản phẩm ------------------------------
function deleteProduct(id) {
   var choice = confirm("Bạn có chắc chắn muốn xóa sản phẩm này ?")
   if (choice) {
      for (var i = 0; i < product.length; i++) {
         if (product[i].productId === id) {
            product[i].status = 0
         }
      }
      localStorage.setItem("listProduct", JSON.stringify(product))
      adminViewProduct(product)
   }
}
function restoreProduct(id) {
   var choice = confirm("Bạn có chắc chắn muốn khôi phục sản phẩm này ?")
   if (choice) {
      for (var i = 0; i < product.length; i++) {
         if (product[i].productId === id) {
            product[i].status = 1
         }
      }
      localStorage.setItem("listProduct", JSON.stringify(product))
      adminViewProduct(returnProductDeleted())
   }
}

// sửa sản phẩm -----------------------------------------------
function editProduct(id) {
   for (var i = 1; i < product.length; i++) {
      if (product[i].productId === id) {
         var editProductDisplay = document.querySelector('.edit-product-display');
         editProductDisplay.style.display = "flex";
         editProductDisplay.innerHTML = '';
         var editProductForm = document.createElement('div');
         editProductForm.classList.add('edit-product-container');
         editProductForm.innerHTML = '';
         editProductForm.innerHTML = `
         <div class="edit-product-form">
         <div class="edit-product-form-header">
            <h2> ${product[i].name} </h2>
         </div>
         <table class="edit-product-form-table">
            <tr>
               <td> Mã sản phẩm </td>
               <td> 
                  <div class="editing-prd-id-container"> 
                     <div class="editing-prd-id"> ${product[i].productId} </div>
                  </div>
               </td>
            </tr>
            <tr>
               <td> Tên tai nghe </td>
               <td> 
                  <input type="text" value="${product[i].name}" id="editname${product[i].productId}"> 
                  <span class="empty-name"> Vui lòng không để trống tên sản phẩm </span>
               </td>

            </tr>
            <tr>
               <td style="height: 53.5px;"> Hình ảnh </td>
               <td class="img-choose-file">
                  <img class="edit-product-image"
                     src="${product[i].img}">
                  <input type="file" id="edit-current-product-img" accept="img/Shop tai nghe/*" onchange="" >
               </td>
            </tr>
            <tr>
               <td> Kiểu tai nghe </td>
               <td>
                  <select id="edittype${product[i].productId}">
                     <option value="${product[i].type}"> ${product[i].type}  </option>
                     <option value="On ear"> On-ear </option>
                     <option value="In ear"> In-ear </option>
                     <option value="over-ear"> Over-ear </option>
                     <option value="earbud"> Earbud </option>
                  </select>
               </td>
            </tr>
            <tr>
               <td> Tên hãng </td>
               <td>
                  <select id="editbrand${product[i].productId}">
                     <option value="${product[i].brand}"> ${product[i].brand} </option>
                     <option value="Sony"> Sony </option>
                     <option value="Skullcandy"> Skullcandy </option>
                     <option value="Sennheiser"> Sennheiser </option>
                     <option value="Plantronics"> Plantronics </option>
                     <option value="Pioneer"> Pioneer </option>
                     <option value="Philips"> Philips </option>
                     <option value="NuForce"> NuForce </option>
                     <option value="Marshall"> Marshall </option>
                     <option value="Koss"> Koss </option>
                     <option value="JBL"> JBL </option>
                     <option value="FIIL Audio"> FIIL </option>
                     <option value="Audio-technica"> Audio-technica </option>
                     <option value="SoundMAGIC"> Sound MAGIC </option>
                     <option value="Beyerdynamic"> Beyerdynamic </option>
                     <option value="Beats"> Beats </option>
                     <option value="Bang & Olufsen"> Bang & Olufsen </option>
                     <option value="Astell & Kern"> Astell & Kern </option>
                     <option value="SoundPEATS"> SoundPEATS </option>
                     <option value="Sabbat"> Sabbat </option>
                     <option value="Monster"> Monster </option>
                     <option value="Huawei"> Huawei </option>
                     <option value="Havit"> Havit </option>
                     <option value="Defunc"> Defunc </option>
                  </select>
               </td>
            </tr>
            <tr>
               <td>Giá</td>
               <td> 
                  <input type="text" value="${product[i].price}" id="editprice${product[i].productId}" > 
                  <p class="empty-price"> Vui lòng không để trống giá thành sản phẩm  </p> 
                  <p class="price-invalid"> Vui lòng nhập số nguyên dương </p>
               </td>
            </tr>
            <tr>
               <td> Số lượng trong kho </td>
               <td> 
                  <input type="text" value="${product[i].quantity}"  id = "editquantity${product[i].productId}"> 
                  <span class="empty-quantity"> Vui lòng không để trống số lượng sản phẩm </span> 
                  <span class="quantity-invalid"> Vui lòng nhập số nguyên dương </span> 
               </td>
            </tr>
         </table>
         <div class="edit-product-button">
            <div class="accept-edit">
               <button class="accept-edit-button" onclick = "checkFailEdit(${product[i].productId})" > Thay đổi </button>
            </div>
            <div class="cancel-edit">
               <button class="cancel-edit-button" onclick = "cancelEditProduct()"> Huỷ </button>
            </div>
         </div>
      </div>
         
         `
         editProductDisplay.appendChild(editProductForm);
      }
   }
}

function cancelEditProduct() {
   var editProductDisplay = document.querySelector('.edit-product-display');
   editProductDisplay.style.display = "none";
}


function checkFailEdit(id) {
   for (var i = 0; i < product.length; i++) {
      if (product[i].productId === id) {
         var newName = document.getElementById("editname" + product[i].productId).value;
         var newPrice = document.getElementById("editprice" + product[i].productId).value;
         var newType = document.getElementById("edittype" + product[i].productId).value;
         var newBrand = document.getElementById("editbrand" + product[i].productId).value;
         var newQuantity = document.getElementById("editquantity" + product[i].productId).value;

         var emptyName = document.getElementsByClassName("empty-name")[0];
         var emptyPrice = document.getElementsByClassName("empty-price")[0];
         var priceInvalid = document.getElementsByClassName("price-invalid")[0];
         var emptyQuantity = document.getElementsByClassName("empty-quantity")[0];
         var quantityInvalid = document.getElementsByClassName("quantity-invalid")[0];



         var checkName = true;
         var checkPrice = true;
         var checkQuantity = true;


         if (newPrice === "") {
            document.getElementById("editprice" + product[i].productId).focus();
            emptyPrice.style.display = "flex";
            checkPrice = false;
         } else {
            emptyPrice.style.display = "none";
         }

         if ((newPrice !== "") && (newPrice <= 0 || !Number.isInteger(Number(newPrice)))) {
            document.getElementById("editprice" + product[i].productId).focus();
            priceInvalid.style.display = "flex";
            checkPrice = false;
         } else {
            priceInvalid.style.display = "none";
         }

         if (newName === "") {
            document.getElementById("editname" + product[i].productId).focus();
            emptyName.style.display = "flex";
            checkName = false;
         } else {
            emptyName.style.display = "none";
            checkName = true;
         }
         if (newQuantity === "") {
            document.getElementById("editquantity" + product[i].productId).focus();
            emptyQuantity.style.display = "flex";
            checkQuantity = false;
         } else {
            emptyQuantity.style.display = "none";
         }

         if ((newQuantity !== "") && (newQuantity < 0 || !Number.isInteger(Number(newQuantity)))) {
            document.getElementById("editquantity" + product[i].productId).focus();
            quantityInvalid.style.display = "flex";
            checkQuantity = false;
         } else {
            // quantityInvalid.style.display = "none";
         }
         const input = document.getElementById('edit-current-product-img')
         const file = input.files[0]
         var j = i
         if (checkName == true && checkPrice == true && checkQuantity == true) {
            newPrice = parseInt(newPrice)
            newQuantity = parseInt(newQuantity)
            if (file) {
               const reader = new FileReader();
               reader.onload = function (e) {
                  const imageDataUrl = e.target.result;
                  product[j].img = imageDataUrl
                  product[j].name = newName
                  product[j].price = newPrice
                  product[j].brand = newBrand
                  product[j].type = newType
                  product[j].quantity = newQuantity
                  localStorage.setItem("listProduct", JSON.stringify(product))
                  adminViewProduct(product);
                  var editProductDisplay = document.querySelector('.edit-product-display')
                  editProductDisplay.style.display = "none"
               }
               reader.readAsDataURL(file);
            }else{
               product[i].name = newName;
               product[i].price = newPrice
               product[i].brand = newBrand
               product[i].type = newType
               product[i].quantity = newQuantity
               localStorage.setItem("listProduct", JSON.stringify(product))
               adminViewProduct(product)
               var editProductDisplay = document.querySelector('.edit-product-display')
               editProductDisplay.style.display = "none"
            }
          
         }
      }
   }
}

// -----------------------------------------------Thêm sản phẩm-------------------------------------

//--------Xử lý hình ảnh-------


function createNewId() {
   var Id = 0;
   for (var i = 0; i < product.length; i++)
      if (product[i].productId > Id)
         Id = product[i].productId;
   return Id + 1;
}


function cancelAddProduct() {
   var addProductDisplay = document.querySelector('.add-product-display');
   addProductDisplay.style.display = "none";
}

function checkFailAdd() {
   var newName = document.getElementById("new-product-name").value;
   var newPrice = document.getElementById("new-product-price").value;
   var newType = document.getElementById("new-product-type").value;
   var newBrand = document.getElementById("new-product-brand").value;
   var newQuantity = document.getElementById("new-product-quantity").value;

   var emptyName = document.getElementsByClassName("empty-name")[0];
   var emptyPrice = document.getElementsByClassName("empty-price")[0];
   var priceInvalid = document.getElementsByClassName("price-invalid")[0];
   var emptyQuantity = document.getElementsByClassName("empty-quantity")[0];
   var quantityInvalid = document.getElementsByClassName("quantity-invalid")[0];



   var checkName = true;
   var checkPrice = true;
   var checkQuantity = true;


   if (newPrice === "") {
      document.getElementById("new-product-price").focus();
      emptyPrice.style.display = "flex";
      checkPrice = false;
   } else {
      emptyPrice.style.display = "none";
   }

   if ((newPrice !== "") && (newPrice <= 0 || !Number.isInteger(Number(newPrice)))) {
      document.getElementById("new-product-price").focus();
      priceInvalid.style.display = "flex";
      checkPrice = false;
   } else {
      priceInvalid.style.display = "none";
   }

   if (newName === "") {
      document.getElementById("new-product-name").focus();
      emptyName.style.display = "flex";
      checkName = false;
   } else {
      emptyName.style.display = "none";
      checkName = true;
   }

   if (newQuantity === "") {
      document.getElementById("new-product-quantity").focus();
      emptyQuantity.style.display = "flex";
      checkQuantity = false;
   } else {
      emptyQuantity.style.display = "none";
   }

   if ((newQuantity !== "") && (newQuantity < 0 || !Number.isInteger(Number(newQuantity)))) {
      document.getElementById("new-product-quantity").focus();
      quantityInvalid.style.display = "flex";
      checkQuantity = false;
   } else {
      quantityInvalid.style.display = "none";
   }
   const input = document.getElementById('new-product-img')
   console.log(input)
   const file = input.files[0]
   console.log(file)

   if (checkName == true && checkPrice == true && checkQuantity == true) {
      newPrice = parseInt(newPrice)
      newQuantity = parseInt(newQuantity)
      var newId = createNewId()
      if (file) {
         const reader = new FileReader();
         reader.onload = function (e) {
            const imageDataUrl = e.target.result;
            var newProduct = { productId: newId, brand: newBrand, img: imageDataUrl, name: newName, price: newPrice, type: newType, quantity: newQuantity, status: 1 }
            product.splice(1, 0, newProduct)
            localStorage.setItem("listProduct", JSON.stringify(product))
            adminViewProduct(product)
            var addProductDisplay = document.querySelector('.add-product-display')
            addProductDisplay.style.display = "none"

         };
         reader.readAsDataURL(file);
      } else {
         alert('Vui lòng chọn file ảnh');
      }
   }

}

function addProduct() {
   var addProductDisplay = document.querySelector('.add-product-display');
   addProductDisplay.style.display = "flex";
   addProductDisplay.innerHTML = '';
   var addProductForm = document.createElement('div');
   addProductForm.classList.add('add-product-container');
   addProductForm.innerHTML = '';
   addProductForm.innerHTML = `
         <div class="add-product-form">
            <div class="add-product-form-header">
               <h2> Thêm sản phẩm mới </h2>
            </div>
            <table class="add-product-form-table">
               <tr>
                  <td> Mã sản phẩm </td>
                  <td>
                     <div class="add-prd-id-container">
                        <div class="add-prd-id"> ${createNewId()} </div>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td> Tên tai nghe </td>
                  <td> 
                     <input type="text" value=""  id = "new-product-name"> 
                        <span class="empty-name"> Vui lòng không để trống tên sản phẩm </span> 
                  </td>
               </tr>
               <tr>
                  <td style="height: 53.5px;"> Hình ảnh </td>
                  <td class="add-prd-img-choose-file">
                     <img class="add-product-image" src="img/audiotech.jpg">
                     <input type="file" accept="image/*" id = "new-product-img" >
                  </td>
               </tr>
               <tr>
                  <td> Kiểu tai nghe </td>
                  <td>
                     <select  id = "new-product-type">
                        <option value="On ear"> On-ear </option>
                        <option value="In ear"> In-ear </option>
                        <option value="over-ear"> Over-ear </option>
                        <option value="earbud"> Earbud </option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td> Tên hãng </td>
                  <td>
                     <select id = "new-product-brand">
                        <option value="Sony"> Sony </option>
                        <option value="Skullcandy"> Skullcandy </option>
                        <option value="Sennheiser"> Sennheiser </option>
                        <option value="Plantronics"> Plantronics </option>
                        <option value="Pioneer"> Pioneer </option>
                        <option value="Philips"> Philips </option>
                        <option value="NuForce"> NuForce </option>
                        <option value="Marshall"> Marshall </option>
                        <option value="Koss"> Koss </option>
                        <option value="JBL"> JBL </option>
                        <option value="FIIL Audio"> FIIL </option>
                        <option value="Audio-technica"> Audio-technica </option>
                        <option value="SoundMAGIC"> Sound MAGIC </option>
                        <option value="Beyerdynamic"> Beyerdynamic </option>
                        <option value="Beats"> Beats </option>
                        <option value="Bang & Olufsen"> Bang & Olufsen </option>
                        <option value="Astell & Kern"> Astell & Kern </option>
                        <option value="SoundPEATS"> SoundPEATS </option>
                        <option value="Sabbat"> Sabbat </option>
                        <option value="Monster"> Monster </option>
                        <option value="Huawei"> Huawei </option>
                        <option value="Havit"> Havit </option>
                        <option value="Defunc"> Defunc </option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td>Giá</td>
                  <td>
                     <input type="text" value=""  id = "new-product-price">
                     <p class="empty-price"> Vui lòng không để trống giá thành sản phẩm  </p>
                     <p class="price-invalid"> Vui lòng nhập số nguyên dương </p> 

                  </td>
               </tr>
               <tr>
                  <td> Số lượng trong kho </td>
                  <td> 
                     <input type="text" value=""  id = "new-product-quantity"> 
                        <span class="empty-quantity"> Vui lòng không để trống số lượng sản phẩm </span> 
                        <span class="quantity-invalid"> Vui lòng nhập số nguyên dương </span> 
                  </td>
               </tr>
            </table>
            <div class="add-product-button">
               <div class="accept-add">
                  <button class="accept-add-button" onclick = "checkFailAdd()"> Thêm sản phẩm </button>
               </div>
               <div class="cancel-add">
                  <button class="cancel-edit-button" onclick = "cancelAddProduct()"> Huỷ </button>
               </div>
            </div>
         </div>
         `
   addProductDisplay.appendChild(addProductForm);
}

//----- Tìm kiếm sản phẩm -----------------------------------------------------
function searchProduct() {
   var searchInput = document.getElementById('search-product-input').value.toLowerCase();
   var filteredProducts = product.filter(function (item) {
      return (
         String(item.productId).includes(searchInput) ||
         item.name.toLowerCase().includes(searchInput) ||
         item.brand.toLowerCase().includes(searchInput) ||
         item.type.toLowerCase().includes(searchInput)
      );
   });

   // adminViewProduct(filteredProducts);
   if (filteredProducts.length === 0) {
      var adminProductList = document.querySelector('.product-list-table');
      var tbody = adminProductList.querySelector('tbody');
      tbody.innerHTML = '<tr><td colspan="7" style="height: 60px;"> Không tìm thấy sản phẩm </td></tr>';
   } else {
      adminViewProduct(filteredProducts);
   }
}


//-----------------------------------------------Quản lý đơn hàng - admin-------------------------------------------
//-----------------------------------------------Quản lý đơn hàng - admin-------------------------------------------
//-----------------------------------------------Quản lý đơn hàng - admin-------------------------------------------


var waittingListKey = JSON.parse(localStorage.getItem("waittingList"))
const orderListBody = document.getElementById('order-list-body')


//------------------Đơn hàng chưa xử lý---------------------------------------

// kiểm soát input day

 document.addEventListener('DOMContentLoaded', function () {
   var startDateInput = document.getElementById('start-waiting-order-day-select');
   var endDateInput = document.getElementById('end-waiting-order-day-select');
 
   startDateInput.addEventListener('blur', function () {
     if (endDateInput.value !== '' && startDateInput.value > endDateInput.value) {
       alert('Ngày bắt đầu không thể lớn hơn ngày kết thúc.');
       startDateInput.value = ''; // Có thể xóa giá trị hoặc xử lý theo yêu cầu của bạn
     }
   });
 
   endDateInput.addEventListener('blur', function () {
     if (startDateInput.value !== '' && endDateInput.value < startDateInput.value) {
       alert('Ngày kết thúc không thể nhỏ hơn ngày bắt đầu.');
       endDateInput.value = ''; // Có thể xóa giá trị hoặc xử lý theo yêu cầu của bạn
     }
   });
 });
 

// Tìm kiếm đơn hàng chưa duyệt theo ngày
function findWaitingOrdersDay(){
   var startDateInput = document.getElementById('start-waiting-order-day-select').value
   var endDateInput = document.getElementById('end-waiting-order-day-select').value
   const startDateObject = new Date(startDateInput);
   const endDateObject = new Date(endDateInput);
   
   waittingListKey = JSON.parse(localStorage.getItem("waittingList"))
   var tempList = []
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 0) {
            var orderDate = convertToDate(waittingListKey[i].dateTime)
            var currentDate = new Date(`${orderDate.year}-${orderDate.month}-${orderDate.day}`)
            if(currentDate >= startDateObject && currentDate <= endDateObject){
               tempList.push(waittingListKey[i])
            }
         }
      }
   }
   waittingListKey = tempList
   manageRenderOrderList()
   waittingListKey = JSON.parse(localStorage.getItem("waittingList"))    
}



var waitingOrderQuantity = document.getElementById("waiting-order-quantity")

function manageRenderOrderList() {
   var quantityOrderWaitting = 0
   for (var i = 0; i < waittingListKey.length; i++) {
      if (waittingListKey[i].status === 0) {
         quantityOrderWaitting++
      }
   }
   waitingOrderQuantity.innerHTML = ""
   waitingOrderQuantity.innerHTML = `<h3> (${quantityOrderWaitting}) </h3>`
   orderListBody.innerHTML = ''
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 0) {
            var payTotal = 0
            for (var j = 0; j < waittingListKey[i].arr.length; j++) {
               payTotal += waittingListKey[i].arr[j].price * waittingListKey[i].arr[j].quantity
            }
            // formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(payTotal)
            var status = ""
            if (waittingListKey[i].status === 0) {
               status = "<td class='oder-status'> <i class='fa-solid fa-hourglass-start'  style='font-size: 12px;'></i> Chờ xử lí </td>"
            } else {
               status = "<td class='oder-status'> <i class='fa-solid fa-check' style='font-size: 16px; color: green;'></i> Đã giao hàng </td>"
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
            <td class="total-payment-per-1-oder">${formatPrice(payTotal)}</td>
            <td>${waittingListKey[i].dateTime}</td>
            <td>
            <div class="option-button">
               <button id="approve-off" onclick = "approveOrder(${waittingListKey[i].idOrder})"> <i class="fa-solid fa-check"
                     style="color: green;"></i>duyệt </button>
               <button id="cancel-order-btn" onclick = "cancelOrder(${waittingListKey[i].idOrder})"> <i class="fa-solid fa-xmark"
                     style="color: brown;"></i> huỷ</button>
            </div>
            </td>
            `
            orderListBody.appendChild(rowOrderList)

            const productListContainer = document.getElementById("products-list-per-order-area-" + waittingListKey[i].idOrder)
            for (var j = 0; j < waittingListKey[i].arr.length; j++) {
               var productListContainerChild = document.createElement('div')
               // var formattedPriceCurrent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(waittingListKey[i].arr[j].price)
               productListContainerChild.classList.add("products-list-per-order-area")
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
                     <div class="product-per-order price">${formatPrice(waittingListKey[i].arr[j].price)}</div>
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
manageRenderOrderList()

// trả về số lượng sản phẩm theo id
function returnQuantityById(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i].quantity
      }
   }
   return 0
}

// trả về sản phẩm theo id
function returnProductById(id){
   for(var i = 0; i < product.length; i++){
      if(product[i].productId === id){
         return product[i] ;
      }
   }
}
// giảm số lượng khi mua
function decreaseQuantityProductSold(productInWaitingList) {
   for (var i = 0; i < product.length; i++) {
      if(productInWaitingList.id === product[i].productId){
         product[i].quantity = product[i].quantity - productInWaitingList.quantity
      }
   }
   localStorage.setItem("listProduct", JSON.stringify(product))
}

// Tạo danh sách sản phẩm cần cập nhật số lượng để duyệt
function returnNotEnoughProductToApprove(){
   var listNotEnoughProductToApprove = [] ;
   for(var i=0; i< waittingListKey.length; i++){
      if(waittingListKey[i].status === 0){
         for(var j=0; j<waittingListKey[i].arr.length; j++){
            if(waittingListKey[i].arr[j].quantity >  returnQuantityById(waittingListKey[i].arr[j].id)){
               listNotEnoughProductToApprove.push(returnProductById(waittingListKey[i].arr[j].id)) ;
               console.log(returnProductById(waittingListKey[i].arr[j].id))
            }
         }
      }
   }
   return listNotEnoughProductToApprove ;
}


//duyệt đơn hàng
function approveOrder(id) {
   for (var i = 0; i < waittingListKey.length; i++) {
      if (waittingListKey[i].idOrder === id) {
         var enoughQuantity = true
         for(var j = 0; j < waittingListKey[i].arr.length; j++){
            if(waittingListKey[i].arr[j].quantity > returnQuantityById(waittingListKey[i].arr[j].id)){
               enoughQuantity = false
            }
         }
         if(enoughQuantity){
            for(var j = 0; j < waittingListKey[i].arr.length; j++){
               decreaseQuantityProductSold(waittingListKey[i].arr[j])
            }
            waittingListKey[i].status = 1
         }
         else{
            alert("Số lượng sản phẩm trong kho không đủ để bán.\nVui lòng nhập hàng và cập nhật số lượng để duyệt.")
         }
         
      }
   }
   localStorage.setItem('waittingList', JSON.stringify(waittingListKey))
   manageRenderOrderList()
   manageRenderOrderListDealt()
   addToListProductSold()
   showListProductSold(listProductSold)
}


function cancelOrder(id) {
   for (var i = 0; i < waittingListKey.length; i++) {
      if (waittingListKey[i].idOrder === id) {
         waittingListKey[i].status = -1
      }
   }
   localStorage.setItem('waittingList', JSON.stringify(waittingListKey))
   manageRenderOrderList()
   manageRenderOrderListDealt()

}

// -------------------------------Đơn hàng đã xử lý--------------------------------------
// kiểm soát input day

 document.addEventListener('DOMContentLoaded', function () {
   var startDateInput = document.getElementById('start-processed-day-select');
   var endDateInput = document.getElementById('end-processed-day-select');
 
   startDateInput.addEventListener('blur', function () {
     if (endDateInput.value !== '' && startDateInput.value > endDateInput.value) {
       alert('Ngày bắt đầu không thể lớn hơn ngày kết thúc.');
       startDateInput.value = ''; // Có thể xóa giá trị hoặc xử lý theo yêu cầu của bạn
     }
   });
 
   endDateInput.addEventListener('blur', function () {
     if (startDateInput.value !== '' && endDateInput.value < startDateInput.value) {
       alert('Ngày kết thúc không thể nhỏ hơn ngày bắt đầu.');
       endDateInput.value = ''; // Có thể xóa giá trị hoặc xử lý theo yêu cầu của bạn
     }
   });
 });

// Tìm kiếm đơn hàng đã duyệt theo ngày
function findProcessedOrdersDay(){
   var startDateInput = document.getElementById('start-processed-day-select').value
   var endDateInput = document.getElementById('end-processed-day-select').value
   const startDateObject = new Date(startDateInput);
   const endDateObject = new Date(endDateInput);
   
   waittingListKey = JSON.parse(localStorage.getItem("waittingList"))
   var tempList = []
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status !== 0) {
            var orderDate = convertToDate(waittingListKey[i].dateTime)
            var currentDate = new Date(`${orderDate.year}-${orderDate.month}-${orderDate.day}`)
            if(currentDate >= startDateObject && currentDate <= endDateObject){
               tempList.push(waittingListKey[i])
            }
         }
      }
   }
   waittingListKey = tempList
   manageRenderOrderListDealt()
   waittingListKey = JSON.parse(localStorage.getItem("waittingList"))    
}

var processedOrderQuantity = document.getElementById("processed-order-quantity")
const orderListBodyDealt = document.getElementById('order-list-body-dealt')

function manageRenderOrderListDealt() {
   var processedOrderQuantityNumber = 0
   for (var i = 0; i < waittingListKey.length; i++) {
      if (waittingListKey[i].status !== 0) {
         processedOrderQuantityNumber++
      }
   }
   processedOrderQuantity.innerHTML = ""
   processedOrderQuantity.innerHTML = `<h3> (${processedOrderQuantityNumber}) </h3>`
   orderListBodyDealt.innerHTML = ''
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 1 || waittingListKey[i].status === -1) {
            var payTotal = 0
            for (var j = 0; j < waittingListKey[i].arr.length; j++) {
               payTotal += waittingListKey[i].arr[j].price * waittingListKey[i].arr[j].quantity
            }
            var formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(payTotal)
            var status = ""
            if (waittingListKey[i].status === -1) {
               status = "<td class='oder-status'> <i class='fa-solid fa-hourglass-start'  style='font-size: 12px;'></i> Đã hủy </td>"
            } else {
               status = "<td class='oder-status'> <i class='fa-solid fa-check' style='font-size: 16px; color: green;'></i> Đã giao hàng </td>"
            }

            var rowOrderList = document.createElement('tr')
            rowOrderList.classList.add('order-list-table-content')
            rowOrderList.innerHTML = ''
            rowOrderList.innerHTML = `
            <td>${waittingListKey[i].idOrder}</td>
            <td>
               <div class="products-list-per-order-area" id = "products-list-per-order-area-dealt${waittingListKey[i].idOrder}">
               </div>
            </td>
            <td class="total-payment-per-1-oder">${formattedPrice}</td>
            <td>${waittingListKey[i].dateTime}</td>
            ${status}
            `
            orderListBodyDealt.appendChild(rowOrderList)

            const productListContainerDealt = document.getElementById("products-list-per-order-area-dealt" + waittingListKey[i].idOrder)
            for (var j = 0; j < waittingListKey[i].arr.length; j++) {
               var productListContainerChild = document.createElement('div')
               productListContainerChild.classList.add("products-list-per-order-area")
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
               productListContainerDealt.appendChild(productListContainerChild)
            }
         }
      }
   }
}
manageRenderOrderListDealt()
//--------------------------------------------------------Doanh thu----------------------------------------------------
//--------------------------------------------------------Doanh thu----------------------------------------------------
//--------------------------------------------------------Doanh thu----------------------------------------------------

const soldOrderProductBtn = document.querySelector("#sold-order-product-btn")
soldOrderProductBtn.addEventListener("click", function () {
   document.querySelector("#sold-order-type").style.display = "none";
   document.querySelector("#sold-order-year").style.display = "none";
   document.querySelector("#sold-order-month").style.display = "none";
   document.querySelector("#sold-order-day").style.display = "none";
   resetColor(soldOrderYearBtn);
   resetColor(soldOrderMonthBtn);
   resetColor(soldOrderDayBtn);
})

const soldOrderTypeBtn = document.querySelector("#sold-order-type-btn")
soldOrderTypeBtn.addEventListener("click", function () {
   document.querySelector("#sold-order-type").style.display = "flex";
   document.querySelector("#sold-order-year").style.display = "none";
   document.querySelector("#sold-order-month").style.display = "none";
   document.querySelector("#sold-order-day").style.display = "none";
   resetColor(soldOrderYearBtn);
   resetColor(soldOrderMonthBtn);
   resetColor(soldOrderDayBtn);
})

const soldOrderYearBtn = document.querySelector("#sold-order-year-btn")
soldOrderYearBtn.addEventListener("click", function () {
   document.querySelector("#sold-order-type").style.display = "none";
   document.querySelector("#sold-order-year").style.display = "flex";
   document.querySelector("#sold-order-month").style.display = "none";
   document.querySelector("#sold-order-day").style.display = "none";
   changeColor(soldOrderYearBtn);
   resetColor(soldOrderMonthBtn);
   resetColor(soldOrderDayBtn);
})

const soldOrderMonthBtn = document.querySelector("#sold-order-month-btn")
soldOrderMonthBtn.addEventListener("click", function () {
   document.querySelector("#sold-order-type").style.display = "none";
   document.querySelector("#sold-order-year").style.display = "none";
   document.querySelector("#sold-order-month").style.display = "flex";
   document.querySelector("#sold-order-day").style.display = "none";
   changeColor(soldOrderMonthBtn);
   resetColor(soldOrderYearBtn);
   resetColor(soldOrderDayBtn);
})


const soldOrderDayBtn = document.querySelector("#sold-order-day-btn")
soldOrderDayBtn.addEventListener("click", function () {
   document.querySelector("#sold-order-type").style.display = "none";
   document.querySelector("#sold-order-year").style.display = "none";
   document.querySelector("#sold-order-month").style.display = "none";
   document.querySelector("#sold-order-day").style.display = "flex";
   changeColor(soldOrderDayBtn);
   resetColor(soldOrderYearBtn);
   resetColor(soldOrderMonthBtn);
})

function changeColor(button) {
   button.classList.add("change-color");
}
function resetColor(button) {
   button.classList.remove("change-color");
}
// 

function formatPrice(price) {
   var formattedPriceCurrent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
   return formattedPriceCurrent
}



// Khởi tạo mảng doanh thu theo sản phẩm và lưu vào local
var listProductSold = JSON.parse(localStorage.getItem("listProductSold"))
if (!listProductSold) {
   localStorage.setItem('listProductSold', JSON.stringify([]))
   listProductSold = JSON.parse(localStorage.getItem("listProductSold"))
}

function addToListProductSold() {
   listProductSold = []
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 1) {
            for (var j = 0; j < waittingListKey[i].arr.length; j++) {
               var checkProduct = listProductSold.find(function (sp) {
                  return sp.id === waittingListKey[i].arr[j].id;
               })
               if (checkProduct) {
                  checkProduct.quantity += waittingListKey[i].arr[j].quantity
               } else {
                  listProductSold.push(waittingListKey[i].arr[j])
               }
            }
         }
      }
      localStorage.setItem('listProductSold', JSON.stringify(listProductSold))
   }
}

function showListProductSold(arr) {
   const soldOrderList = document.getElementById('sold-order-body')
   soldOrderList.innerHTML = ""
   var total = 0
   for (var i = 0; i < arr.length; i++) {
      total += arr[i].price * arr[i].quantity
      var newrow = document.createElement("tr")
      newrow.classList.add('sold-order-content')
      newrow.innerHTML = ""
      newrow.innerHTML = `
         <td> ${arr[i].id}</td>
         <td> ${arr[i].name}</td>
         <td> ${formatPrice(arr[i].price)} </td>
         <td> ${arr[i].quantity} </td>
         <td> ${formatPrice(arr[i].quantity * arr[i].price)}</td>
      `
      soldOrderList.appendChild(newrow)
   }
   const totalSoldOrder = document.querySelector(".total-sold-order")
   totalSoldOrder.innerHTML = ""
   totalSoldOrder.innerHTML = `
   <h2>Tổng doanh thu: ${formatPrice(total)}</h2>
   `
}
showListProductSold(listProductSold)

// -------giới hạn thời gian chọn theo ngày -------------------------------------------
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();
var maxDate = currentYear + "-" + ("0" + currentMonth).slice(-2) + "-" + ("0" + currentDay).slice(-2);
document.getElementById("sold-order-day-select").max = maxDate;

//-------set ngày mặc định = ngày hôm nay
window.onload = function () {
   const dateInput = document.getElementById("sold-order-day-select");
   const currentDate = new Date();
   const formattedDate = currentDate.toISOString().split("T")[0];
   dateInput.value = formattedDate;
};

//-------- Sắp xếp mảng theo thời gian---------------

var listYear = JSON.parse(localStorage.getItem("listYear"))
if (!listYear) {
   localStorage.setItem('listYear', JSON.stringify([]))
   listYear = JSON.parse(localStorage.getItem("listYear"))
}

var listMonths = JSON.parse(localStorage.getItem("listMonths"))
if (!listMonths) {
   localStorage.setItem('listMonths', JSON.stringify([]))
   listMonths = JSON.parse(localStorage.getItem("listMonths"))
}

var listDay = JSON.parse(localStorage.getItem("listDay"))
if (!listDay) {
   localStorage.setItem('listDay', JSON.stringify([]))
   listDay = JSON.parse(localStorage.getItem("listDay"))
}

function convertToDate(dateString) { // dateString = "21:53:11 4/12/2023"
   var newDateTime = dateString.split(' ')
   var hms = newDateTime[0].split(':')
   var dmy = newDateTime[1].split('/')
   return { seconds: parseInt(hms[2]), minutes: parseInt(hms[1]), hours: parseInt(hms[0]), day: parseInt(dmy[0]), month: parseInt(dmy[1]), year: parseInt(dmy[2]) }
}

// function createDate() {
//    for (var i = 0; i < waittingListKey.length; i++) {
//       waittingListKey[i].dateTime = "21:53:11 4/12/2023";
//    }
//    for (var i = 0; i < waittingListKey.length/2; i++) {
//       waittingListKey[i].dateTime = "21:53:11 10/12/2022";
//    }
//    waittingListKey[0].dateTime = "21:53:11 25/12/2022" ;
//    waittingListKey[1].dateTime = "21:53:11 15/09/2022" ;
//    waittingListKey[2].dateTime = "21:53:11 12/09/2022" ;
//    // waittingListKey[7].dateTime = "21:53:11 15/09/2023" ;
//    // waittingListKey[5].dateTime = "21:53:11 03/10/2023" ;

//    localStorage.setItem("waittingList", JSON.stringify(waittingListKey));
// }

// createDate();

function compareDateTime(dt1, dt2) {
   if (dt1.year > dt2.year) return true
   else if (dt1.year < dt2.year) return false
   else {
      if (dt1.month > dt2.month) return true
      else if (dt1.month < dt2.month) return false
      else {
         if (dt1.day > dt2.day) return true
         else if (dt1.day < dt2.day) return false
         else {
            if (dt1.hours > dt2.hours) return true
            else if (dt1.hours < dt2.hours) return false
            else {
               if (dt1.minutes > dt2.minutes) return true
               else if (dt1.minutes < dt2.minutes) return false
               else {
                  if (dt1.seconds > dt2.seconds) return true
                  else if (dt1.seconds < dt2.seconds) return false
                  else return true
               }
            }
         }
      }
   }
}
function sortByDateTime(arr) {
   arr.sort(function (a, b) {
      const dateTime1 = convertToDate(a.dateTime);
      const dateTime2 = convertToDate(b.dateTime);
      return compareDateTime(dateTime1, dateTime2);
   });
}

function addToListYear(year) {
   console.log("Adding to Year:", year);
   listYear = []
   localStorage.setItem('listYear', JSON.stringify(listYear))
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 1) {
            var orderDate = convertToDate(waittingListKey[i].dateTime)
            if (orderDate.year === year) {
               for (var j = 0; j < waittingListKey[i].arr.length; j++) {

                  var checkProductYear = listYear.find(function (sp) {
                     return sp.id === waittingListKey[i].arr[j].id;
                  })
                  if (checkProductYear){
                     checkProductYear.quantity += waittingListKey[i].arr[j].quantity
                  } else {
                     listYear.push(waittingListKey[i].arr[j])
                  }
               }
            }
         }
      }
   }
   localStorage.setItem('listYear', JSON.stringify(listYear))
}

function addToListMonths(months, year) {
   listMonths = []
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 1) {
            var orderDate = convertToDate(waittingListKey[i].dateTime)
            if (orderDate.year === year && orderDate.month === months) {
               for (var j = 0; j < waittingListKey[i].arr.length; j++) {
                  var checkProductM = listMonths.find(function (sp) {
                     return sp.id === waittingListKey[i].arr[j].id;
                  })
                  if (checkProductM) {
                     checkProductM.quantity += waittingListKey[i].arr[j].quantity
                  } else {
                     listMonths.push(waittingListKey[i].arr[j])
                  }
               }
            }
         }
      }
      localStorage.setItem('listMonths', JSON.stringify(listMonths))
   }
}

function addToListDay(day, months, year) {
   listDay = []
   localStorage.setItem('listDay', JSON.stringify(listDay))
   if (waittingListKey) {
      for (var i = 0; i < waittingListKey.length; i++) {
         if (waittingListKey[i].status === 1) {
            var orderDate = convertToDate(waittingListKey[i].dateTime)
            if (orderDate.year === year && orderDate.month === months && orderDate.day === day) {
               for (var j = 0; j < waittingListKey[i].arr.length; j++) {
                  var checkProduct = listDay.find(function (sp) {
                     return sp.id === waittingListKey[i].arr[j].id;
                  })
                  if (checkProduct) {
                     checkProduct.quantity += waittingListKey[i].arr[j].quantity
                  } else {
                     listDay.push(waittingListKey[i].arr[j])
                  }
               }
            }
         }
      }
   }
   localStorage.setItem('listDay', JSON.stringify(listDay))
}

const categorySpan = document.getElementById("income-category");

//Trả về mảng doanh thu theo loại
function returnProductByType(type){
   var listProductByType = []
   for(var i = 0; i < listProductSold.length; i++){
      if(listProductSold[i].type === type){
         listProductByType.push(listProductSold[i])
      }
   }
   return listProductByType
}

// hàm hiển thị doanh thu theo loại
function soldOrderTypeShow(event){
   event.preventDefault()
   const typeValue = document.getElementById("sold-order-type-select").value
   categorySpan.textContent = " Loại " + typeValue
   showListProductSold2(returnProductByType(typeValue))
}


function soldOrderYearShow(event) {
   event.preventDefault()
   const yearValue = document.getElementById("sold-order-year-select").value;
   addToListYear(parseInt(yearValue));
   categorySpan.textContent = " NĂM " + yearValue;
   showListProductSold2(listYear);
}

function soldOrderMonthShow(event) {
   event.preventDefault()
   const monthValue = document.getElementById("sold-order-month-select").value;
   const yearValue = document.getElementById("sold-order-month-select-year").value;
   addToListMonths(parseInt(monthValue), parseInt(yearValue));
   console.log(listMonths);
   categorySpan.textContent = " THÁNG " + monthValue + " NĂM " + yearValue;
   showListProductSold2(listMonths);
}

function soldOrderDayShow(event) {
   event.preventDefault()
   const dateValue = document.getElementById("sold-order-day-select").value;
   const dateObject = new Date(dateValue);
   const dayValue = dateObject.getDate();
   const monthValue = dateObject.getMonth() + 1;
   const yearValue = dateObject.getFullYear();
   addToListDay(parseInt(dayValue), parseInt(monthValue), parseInt(yearValue));
   categorySpan.textContent = " NGÀY " + dayValue + " THÁNG " + monthValue + " NĂM " + yearValue;
   showListProductSold2(listDay);
}

function showListProductSold2(arr) {
   const soldOrderList = document.getElementById('sold-order-body')
   soldOrderList.innerHTML = "";   // Chỉ thêm cái dòng này zô thui
   var total = 0
   for (var i = 0; i < arr.length; i++) {
      total += arr[i].price * arr[i].quantity
      var newrow = document.createElement("tr")
      newrow.classList.add('sold-order-content')
      newrow.innerHTML = ""
      newrow.innerHTML = `
         <td> ${arr[i].id}</td>
         <td> ${arr[i].name}</td>
         <td> ${formatPrice(arr[i].price)} </td>
         <td> ${arr[i].quantity} </td>
         <td> ${formatPrice(arr[i].quantity * arr[i].price)}</td>
      `
      soldOrderList.appendChild(newrow)
   }
   const totalSoldOrder = document.querySelector(".total-sold-order")
   totalSoldOrder.innerHTML = ""
   totalSoldOrder.innerHTML = `
   <h2>Tổng doanh thu: ${formatPrice(total)}</h2>
   `
}

// addToListYear(2023)
// addToListMonths(12,2023)
// addToListDay(5,12,2023)




// -----------------------------------------------quản lý thông tin khách hàng--------------------------------
// -----------------------------------------------quản lý thông tin khách hàng--------------------------------
// -----------------------------------------------quản lý thông tin khách hàng--------------------------------


const users = JSON.parse(localStorage.getItem("users"))
const manageCustomerList = document.getElementById('manage-customer')

function manageCustomer() {
   manageCustomerList.innerHTML = ""
   for (var i = 0; i < users.length; i++) {
      if (users[i].username != "admin") {
         var newrow = document.createElement("tr")
         newrow.classList.add('account-content')
         newrow.innerHTML = ""
         newrow.innerHTML = `
         <td> ${users[i].username} </td>
         <td> ${users[i].password}</td>
         <td> ${users[i].address} </td>
         <td>
         ${users[i].phone}
         </td>
         `
         manageCustomerList.appendChild(newrow)
      }

   }

}
manageCustomer()


