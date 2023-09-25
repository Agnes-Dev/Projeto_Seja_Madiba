const ratingInputs = document.querySelectorAll('.rating input');

  ratingInputs.forEach(input => {
    input.addEventListener('click', (event) => {
      const clickedIndex = Array.from(ratingInputs).indexOf(event.target);
      
      for (let i = 0; i <= clickedIndex; i++) {
        const label = ratingInputs[i].nextElementSibling;
        label.style.color = 'gold';
      }

      for (let i = clickedIndex + 1; i < ratingInputs.length; i++) {
        const label = ratingInputs[i].nextElementSibling;
        label.style.color = 'gray';
      }
    });
  });

  //////////////////////////////////////////////////////////////////////////////////



  /////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', () => {
//     const reviewTextarea = document.querySelector('.review-section textarea');
//     const submitButton = document.querySelector('.review-section button');

//     reviewTextarea.addEventListener('input', () => {
//         if (reviewTextarea.value.trim() !== '') {
//             submitButton.removeAttribute('disabled');
//         } else {
//             submitButton.setAttribute('disabled', 'disabled');
//         }
//     });

//     submitButton.addEventListener('click', () => {
//         const review = reviewTextarea.value.trim();
//         if (review !== '') {
//             alert('Review submitted: ' + review);
//             reviewTextarea.value = ''; // Clear the textarea after submission
//             submitButton.setAttribute('disabled', 'disabled');
//         }
//     });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////

// function adjustPhotoSize() {
//     const newSize = prompt('Enter the new size for the photo (in pixels):');
//     const profileImage = document.getElementById('profile-image');

//     if (newSize) {
//         profileImage.style.width = newSize + 'px';
//         profileImage.style.height = newSize + 'px';
//     }
// }