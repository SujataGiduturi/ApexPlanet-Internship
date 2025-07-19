// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email format.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
