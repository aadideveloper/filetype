document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file-input");
    const identifyButton = document.getElementById("identify-button");
    const fileDetails = document.getElementById("file-details");
  
    identifyButton.addEventListener("click", () => {
      const file = fileInput.files[0];
      if (!file) {
        fileDetails.textContent = "Please upload a file.";
        return;
      }
  
      // Get file details
      const fileName = file.name;
      const fileType = file.type || "Unknown";
      const fileSize = (file.size / 1024).toFixed(2) + " KB";
      const fileExtension = fileName.split(".").pop();
  
      // Display file details
      fileDetails.innerHTML = `
        <strong>File Name:</strong> ${fileName} <br>
        <strong>File Type:</strong> ${fileType} <br>
        <strong>File Size:</strong> ${fileSize} <br>
        <strong>File Extension:</strong> .${fileExtension}
      `;
    });
  });