/**
 * Description
 * @param {object} stringImages
 * @param {object} stringThumbs
 * @param {number} count
 * @returns {number}
 */
function createElement(stringImages, stringThumbs, arrayImg, count) {
    let elemImg = "";
    let elemThu = "";
    arrayImg.forEach((element, count) => {
        // cicle forEach  for image e subImage
        elemImg += `
        <!-- immagine ${count + 1} -->
        <div class="my-carousel-item" carousel-item="${count + 1}">
          <img
            class="img-fluid"
            src="${element.image}"
            alt="${element.title}"
          />
          <div class="item-description px-3">
            <h2>${element.title}</h2>
            <p>${element.text}</p>
            </p>
          </div>
        </div>
        <!-- /immagine ${count + 1} -->
        `;
        elemThu += `
        <!-- immagini interne ${count + 1} -->
      
        <img
        class="img-fluid my-thumbnail" data-value="${count}"
        src="${element.image}"
        alt="Thumbnail of Marvel's Spiderman Miles Morale picture"
      />
      <!-- /immagini interne ${count + 1} -->
        `;
    });
    stringImages.innerHTML += elemImg;
    stringThumbs.innerHTML += elemThu;
}

/**
 * Description: show the next image
 * @param {objext} stringImages
 * @param {object} stringThumbs
 * @param {number} count
 * @returns {number}
 */
function next(stringImages, stringThumbs, count) {
    stringImages[count].classList.remove("active");
    stringThumbs[count].classList.remove("active");
    if (count < stringImages.length - 1) {
        count++;
    } else {
        count = 0;
    }
    stringImages[count].classList.add("active");
    stringThumbs[count].classList.add("active");
    return count;
}

/**
 * Description: shows the previous image
 * @param {object} stringImages
 * @param {object} stringThumbs
 * @param {number} count
 * @returns {number}
 */
function previous(stringImages, stringThumbs, count) {
    stringImages[count].classList.remove("active");
    stringThumbs[count].classList.remove("active");
    if (count > 0) {
        count--;
    } else {
        count = stringImages.length - 1;
    }
    stringImages[count].classList.add("active");
    stringThumbs[count].classList.add("active");
    return count;
}

/**
 * Description: change class active to image and thumbs with click of thumbnails image
 * @param {number} newNumber
 * @param {numeber} number
 * @returns {number}
 */
function moveOnClick(newNumber, number) {
    slides[number].classList.remove("active");
    thumbs[number].classList.remove("active");
    thumbs[newNumber].classList.add("active");
    slides[newNumber].classList.add("active");
    number = newNumber;
    return number;
}