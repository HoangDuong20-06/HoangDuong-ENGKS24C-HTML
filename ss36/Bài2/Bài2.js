let likeButtons = document.querySelectorAll(".likeButton");
likeButtons.forEach(button => {
    button.addEventListener("click", function() {
        let countElement = this.previousElementSibling;
        let currentText = countElement.textContent.trim();
        let currentCount = parseInt(currentText.replace("❤️", "").replace("lượt thích", "").trim()) || 0;
        currentCount++;
        countElement.textContent = "❤️" + currentCount + " lượt thích";
    });
});