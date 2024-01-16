(function () {
    const timeline = gsap.timeline({ defaults: { duration: .5 } });
    timeline

        .from(".title-div", { y: "-300", ease: "none" })

    var tableBody = document.getElementById("table-body");
    var arrayOfStudents = JSON.parse(localStorage.getItem("studentsData"));
    console.log(arrayOfStudents)
    if (arrayOfStudents && arrayOfStudents.length > 0) {
        for (var i = 0; i < arrayOfStudents.length; i++) {
            var tr = document.createElement("tr");
            tr.innerHTML = ` <tr>
        <td
            class="table-cell text-white  md:table-cell border-b border-r border-l border-opacity-50 py-2 px-4">
            ${arrayOfStudents[i].Id}</td>
        <td class="table-cell student-name text-white py-2 px-4 border-b border-r border-l border-opacity-50">${arrayOfStudents[i].Name}
        </td>
        <td
            class="table-cell  text-white md:table-cell border-b border-r border-l border-opacity-50 py-2 px-4">
            ${arrayOfStudents[i].Track}</td>
        <td
            class="table-cell text-white  md:table-cell border-b border-r border-l border-opacity-50 py-2 px-4">
            ${arrayOfStudents[i].Branch}</td>
    </tr>`
            tableBody.append(tr);
        }
    } else {
        var tr = document.createElement("tr");
        tr.innerHTML = `
        <td colspan="4"
            class="table-cell  text-white  md:table-cell border-b border-r border-l border-opacity-50 py-2 px-4">
            No Students Yet !!!</td>`;
        tableBody.append(tr);
    }

})()
function myFunction() {
    var txtValue = "";
    var input = document.getElementById('search');
    var filter = input.value.toUpperCase();
    var table = document.getElementById("table-body");
    var tr = table.getElementsByTagName('tr');

    // Loop through all table rows and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByClassName("student-name")[0]; // Assuming "student-name" is the class of the column to be searched
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

