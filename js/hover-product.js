//di chuột sản phẩm
let productImage = document.getElementById('product-image')

let imageItems = document.querySelectorAll('.details-image-item')
for (let i = 0; i < imageItems.length; i++) {
    imageItems[i].addEventListener("mouseover", function () {
        productImage.style.backgroundImage = imageItems[i].style.backgroundImage;
    })

}