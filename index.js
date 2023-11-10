let btn = document.getElementById("myBtn");
let nameInput;

// tạo sự kiện
btn.addEventListener("click", function() {
    // lấy giá trị từ ô input có id = name và gán lại cho biến nameInput
    nameInput = document.getElementById("name").value;

    alert(nameInput);
});