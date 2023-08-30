window.addEventListener("load",  function() {
  const h1 = document.querySelector("h1");
  const pElement = document.createElement("p");
  const imgElement = document.createElement("img");
  const h1Element = document.createElement("h1");
  const ulElement = document.createElement("ul");
  const liElement1 = document.createElement("li");
  const liElement2 = document.createElement("li")

  h1.innerText = "Webpage Recreation Practice";
  pElement.append("The HTML of this webpage was created with JavaScript.");

  imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute("style", "width:50%");

  h1Element.append("Facts about the Multicolored Tanager");
  
  liElement1.addend("It is endemic to the mountains of Colombia.");
  liElement1.addend("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulElement.append(liElement1, liElement2);

  h1.after(pElement, imgElement, h1Element, ulElement);
});