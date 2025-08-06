
//   const input = document.getElementById('uploadInput');
//   const design = document.getElementById('design');

//   input.addEventListener('change', sfunction () {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = function () {
//         design.src = reader.result;
//         design.style.display = 'block'; // Make sure it's visible
//       };

//       reader.readAsDataURL(file);
//     }
//   });

//     function on() {
//   document.getElementById("overlay").style.display = "block";
// }

//     function off() {
//   document.getElementById("overlay").style.display = "none";
//}

const uploadInput = document.getElementById("upload");
const designImg = document.getElementById("design");

uploadInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = function () {
        designImg.src = reader.result;
    };
    reader.readAsDataURL(file);
    }
});