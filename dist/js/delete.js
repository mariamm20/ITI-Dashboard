var saveBtn = document.getElementById("delete-btn");
var studentId = document.getElementById("studentId");

// Fetch existing student data from localStorage
var arrayOfStudent = JSON.parse(localStorage.getItem("studentsData")) || [];

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var studentIdEntered = Number(studentId.value);

    var flag = false;

    // Check if the student already exists using a for loop
    for (var i = 0; i < arrayOfStudent.length; i++) {
        if (arrayOfStudent[i].Id === studentIdEntered) {
            
                arrayOfStudent.splice(i,1);
                localStorage.setItem("studentsData", JSON.stringify(arrayOfStudent));
                studentId.value = "";
           
            // Display success message
            Swal.fire({
                title: "Success!",
                text: "Student information Deleted successfully.",
                icon: "success"
            });

            flag = true;
            break;
        }
    }

    if (!flag) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Student Id Not Found!",
            footer: '<a href="dashboard.html">Want to view students?</a>'
          });
    }
});
const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline

    .from(".title-div", { y: "-300", ease: "none" })
