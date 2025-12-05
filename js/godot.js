// Projekt Selector navBar
//--------------------------------------------------//
function navBarSelector(targetId) {
  document.querySelectorAll(".projektContainer").forEach((el) => {
    el.style.display = "none";
  });

  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.style.display = "block";
  }
}
//--------------------------------------------------//

// Complete function to cycle images from imgGallery and reset Button //
//--------------------------------------------------//
{
  let newImg;
  let newestImg;

  function switchPreview(targetId) {
    let vid = document.getElementById("videoProjekt1");
    let img = document.getElementById(`${targetId}`);

    if (vid != null) {
      vid.replaceWith((newImg = new Image()));
      newImg.src = `${img.src}`;

      newImg.style.display = "block";
      newImg.style.marginLeft = "auto";
      newImg.style.marginRight = "auto";
      newImg.style.width = "50%";
      newImg.style.border = "2px solid rgb(102, 115, 138)";
    }

    if (vid == null) {
      newImg.replaceWith((newestImg = newImg));
      newestImg.src = `${img.src}`;

      newestImg.style.display = "block";
      newestImg.style.marginLeft = "auto";
      newestImg.style.marginRight = "auto";
      newestImg.style.width = "50%";
      newestImg.style.border = "2px solid rgb(102, 115, 138)";
    }

    if (newVid != null) {
      newVid.replaceWith((newestImg = new Image()));
      newestImg.src = `${img.src}`;

      newestImg.style.display = "block";
      newestImg.style.marginLeft = "auto";
      newestImg.style.marginRight = "auto";
      newestImg.style.width = "50%";
      newestImg.style.border = "2px solid rgb(102, 115, 138)";

      newVid.id = vid.id;
    }
  }

  let newVid = document.createElement("video");
  const vidSource = "../videos/godotProjekte/projekt1/Timeline 1.mp4";

  function resetVideo() {
    newVid.src = vidSource;

    newImg.replaceWith(newVid);
    newestImg.replaceWith(newVid);

    newVid.controls = "options";

    newVid.style.display = "flex";
    newVid.style.flexWrap = "wrap";
    newVid.style.justifyContent = " baseline";

    newVid.style.minWidth = "400px";
    newVid.style.minHeight = "200px";

    newVid.style.marginLeft = "auto";
    newVid.style.marginRight = "auto";
    newVid.style.width = "50%";

    newVid.style.border = "2px solid rgb(102, 115, 138)";
  }
}
//--------------------------------------------------//

// Scroll with MouseWheel - imgGallery Horizontal
//--------------------------------------------------//
{
  const container = document.getElementById("galleryItem");
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 200;
      e.preventDefault();
    } else {
      container.scrollLeft -= 200;
      e.preventDefault();
    }
  });
}
//--------------------------------------------------//
