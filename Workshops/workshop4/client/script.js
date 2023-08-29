document.addEventListener("DOMContentLoaded", () => {
  const teacherTable = document.querySelector(".teacher-table tbody");
  const courseTable = document.querySelector(".course-table tbody");

  // Fetch teachers data
  fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query {
            teachers {
              _id
              first_name
              last_name
              cedula
              age
            }
          }
        `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const teachers = data.data.teachers;
      teachers.forEach((teacher) => {
        const row = createTableRow(teacher);
        teacherTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching teachers:", error));

  // Fetch courses data
  fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query {
            courses {
              _id
              name
              credits
            }
          }
        `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const courses = data.data.courses;
      courses.forEach((course) => {
        const row = createTableRow(course);
        courseTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching courses:", error));

  function createTableRow(data) {
    const row = document.createElement("tr");

    if (data.first_name) {
      row.innerHTML = `
          <td>${data.first_name} ${data.last_name}</td>
          <td>${data.cedula}</td>
          <td>${data.age}</td>
        `;
    } else {
      row.innerHTML = `
          <td>${data.name}</td>
          <td>${data.credits}</td>
        `;
    }

    return row;
  }
});
