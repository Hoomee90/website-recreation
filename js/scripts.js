window.addEventListener("load",  function() {
  const h1 = document.querySelector("h1");
  const pElement = document.createElement("p");
  const imgElement = document.createElement("img");

  h1.innerText = "Webpage Recreation Practice";
  pElement.append("The HTML of this webpage was created with JavaScript.");
  h1.after(pElement);

  imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute("style", "width:50%");
  pElement.after(imgElement);
});