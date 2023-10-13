document.addEventListener("DOMContentLoaded", function () {
    var buttonsData = [
        { label: "Emergency", link: "images/emergencycall.png" },
        { label: "TV Channel", link: "images/tvchannel.png" },
        { label: "Surrounding", link: "images/seaviewhotelmap.png" },
        { label: "Earth Hour", link: "images/earthhour.png" },
        { label: "Energy Saving", link: "images/energysaving.png" },
        { label: "Room Type", link: "images/hotelroomlist.png" }
    ];

    var buttonsContainer = document.getElementById("buttons-container");

    buttonsData.forEach(function (buttonInfo) {
        var button = document.createElement("a");
        button.className = "button";
        button.innerText = buttonInfo.label;
        button.href = buttonInfo.link;
        button.target = "_blank"; // Open link in a new tab
        buttonsContainer.appendChild(button);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Other code for handling buttons...

    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
