var saveBtn = document.getElementById("save-btn");
var studentName = document.getElementById("studentName");
var studentTrack = document.getElementById("studentTrack");
var studentBranch = document.getElementById("studentBranch");
var errorAddBox = document.getElementById("error-add-box");

// Fetch existing student data from localStorage
var arrayOfStudent = JSON.parse(localStorage.getItem("studentsData")) || [];

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var studentNameEntered = studentName.value.trim();
    var studentTrackEntered = studentTrack.value.trim();
    var studentBranchEntered = studentBranch.value.trim();

    if (studentNameEntered.length > 0 && studentTrackEntered.length > 0 && studentBranchEntered.length > 0) {
        // Create a new student object
        var dataContainer = {
            Id: Math.floor(Math.random() * 1000) + 1,
            Name: studentNameEntered,
            Track: studentTrackEntered,
            Branch: studentBranchEntered
        };

        // Add the new student to the array
        arrayOfStudent.push(dataContainer);

        // Update localStorage with the updated array
        localStorage.setItem("studentsData", JSON.stringify(arrayOfStudent));

        // Display success message
        Swal.fire({
            title: "Success!",
            text: "Student added successfully.",
            icon: "success"
        });

        // Clear input fields
        studentName.value = "";
        studentTrack.value = "";
        studentBranch.value = "";

        // Hide the error message box
        errorAddBox.classList.remove("block");
        errorAddBox.classList.add("hidden");
    } else {
        // Display error message
        errorAddBox.classList.remove("hidden");
        errorAddBox.classList.add("flex","flex-start","items-center","w-full");
    }
});
const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline

    .from(".title-div", { y: "-300", ease: "none" })
