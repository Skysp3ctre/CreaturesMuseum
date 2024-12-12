document.addEventListener("DOMContentLoaded", function () {
  // Now we know the DOM is fully loaded, and we can safely bind events
  const modalTriggers = document.querySelectorAll("h2");
  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const creature = trigger
        .getAttribute("onclick")
        .split("(")[1]
        .split(")")[0]
        .replace("'", "")
        .replace("'", "");
      openModal(creature);
    });
  });

  // Function to open modal
  function openModal(creature) {
    const modal = document.getElementById(`${creature}Modal`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  // Function to close modal
  function closeModal(creature) {
    const modal = document.getElementById(`${creature}Modal`);
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Close modal if clicked outside
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  // Close modal when the close button is clicked
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });
});

function swipeImage(btn, direction) {
  const container = btn.closest(".item1");
  const slider = container.querySelector(".image-slider");
  const images = slider.querySelectorAll("img");
  const imageWidth = container.offsetWidth;

  // Get current transform value
  const currentTransform = slider.style.transform
    ? parseInt(
        slider.style.transform.replace("translateX(", "").replace("px)", "")
      )
    : 0;

  // Calculate new position
  let newPosition = currentTransform - direction * imageWidth;

  // Ensure we don't go out of bounds
  newPosition = Math.max(
    Math.min(newPosition, 0),
    -imageWidth * (images.length - 1)
  );

  // Apply new transform
  slider.style.transform = `translateX(${newPosition}px)`;
}

function openModal(type) {
  // Placeholder for modal functionality
  alert(`More info about ${type}`);
}

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
