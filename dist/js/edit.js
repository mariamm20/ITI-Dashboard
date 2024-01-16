var saveBtn = document.getElementById("save-btn");
var studentId = document.getElementById("studentId");
var studentName = document.getElementById("studentName");
var studentTrack = document.getElementById("studentTrack");
var studentBranch = document.getElementById("studentBranch");
var errorAddBox = document.getElementById("error-add-box");

// Fetch existing student data from localStorage
var arrayOfStudent = JSON.parse(localStorage.getItem("studentsData")) || [];

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var studentIdEntered = Number(studentId.value);
    var studentNameEntered = studentName.value.trim();
    var studentTrackEntered = studentTrack.value.trim();
    var studentBranchEntered = studentBranch.value.trim();
    var flag = false;

    // Check if the student already exists using a for loop
    for (var i = 0; i < arrayOfStudent.length; i++) {
        if (arrayOfStudent[i].Id === studentIdEntered) {
            if(studentNameEntered.length > 0){
                arrayOfStudent[i].Name = studentNameEntered;
                localStorage.setItem("studentsData", JSON.stringify(arrayOfStudent));
            }
            if(studentTrackEntered.length >0){
                arrayOfStudent[i].Track = studentTrackEntered;
                localStorage.setItem("studentsData", JSON.stringify(arrayOfStudent));
            }
            if(studentBranchEntered.length>0){
                arrayOfStudent[i].Branch = studentBranchEntered;
                localStorage.setItem("studentsData", JSON.stringify(arrayOfStudent));
            }
            // Display success message
            Swal.fire({
                title: "Success!",
                text: "Student information updated successfully.",
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

