    const tweetInput = document.getElementById("tweetInput");
    const postButton = document.getElementById("postButton");
    const tweetDisplay = document.getElementById("tweetDisplay");
    const deleteConfirmModal = document.querySelector(".delete-confirm");

    // Function to create a tweet card
    
        function createTweetCard(tweetText) {
            const tweetCard = document.createElement("div");
            tweetCard.classList.add("tweet-card");
    
            // Create and append tweet content
            const tweetContent = document.createElement("p");
            tweetContent.textContent = tweetText;
            tweetCard.appendChild(tweetContent);
    
            // Create and append like and comment icons
            const likeIcon = document.createElement("img");
            likeIcon.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
            likeIcon.alt = "like";
            tweetCard.appendChild(likeIcon);

            likeIcon.addEventListener("click", function() {
                if(likeIcon.src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"){
                    likeIcon.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
                }
            });

    
            const commentIcon = document.createElement("img");
            commentIcon.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"; // Placeholder for comment icon
            commentIcon.alt = "comment";
            tweetCard.appendChild(commentIcon);
            
            commentIcon.addEventListener("click", function() {
                const commentText = prompt("Please enter your comment:");
                if (commentText !== null && commentText.trim() !== "") {
                    displayTweet(commentText); // Display the comment as a new tweet
                }
            });
    
            // Create and append delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            tweetCard.appendChild(deleteButton);
    
            // Add event listener to delete button
            deleteButton.addEventListener("click", function() {
                // Show delete confirmation modal
                showDeleteConfirmation(tweetCard);
            });
    
            return tweetCard;
        }
    

    // Function to display tweet cards
    function displayTweet(tweetText) {
        const tweetCard = createTweetCard(tweetText);
        tweetDisplay.appendChild(tweetCard);
    }

    // Function to show delete confirmation modal
    function showDeleteConfirmation(tweetCard) {
        deleteConfirmModal.style.display = "block";

        const confirmDeleteButton = document.getElementById("confirmDelete");
        const cancelDeleteButton = document.getElementById("cancelDelete");

        // Event listener for confirm delete button
        confirmDeleteButton.addEventListener("click", function() {
            tweetCard.remove();
            deleteConfirmModal.style.display = "none";
        });

        // Event listener for cancel delete button
        cancelDeleteButton.addEventListener("click", function() {
            deleteConfirmModal.style.display = "none";
        });
    }

    // Event listener for post button
    postButton.addEventListener("click", function() {
        const tweetText = tweetInput.value.trim();
        if (tweetText !== "") {
            displayTweet(tweetText);
            tweetInput.value = ""; // Clear input field
        } else {
            alert("Please enter some text before posting.");
        }
    });
    window.addEventListener("load", function() {
        const savedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        savedTweets.forEach(tweet => displayTweet(tweet));
    });
