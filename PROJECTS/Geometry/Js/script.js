function calculateTriangleArea() {
  // get the trangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBase.value;
  const tBase = parseFloat(triangleBaseValue);
  //   get the triangle height value
  const trangleHeight = document.getElementById("triangle-height");
  const trangleHeightValue = trangleHeight.value;
  const tHeight = parseFloat(trangleHeightValue);

  //   calculate triangle area
  const area = 0.5 * tBase * tHeight;
  // display
  tDisplay = document.getElementById("tDisplay");
  tDisplay.innerText = `Triangle : ${area}`;
}
function calculateReactangle() {
  // get the width
  const reactangleW = document.getElementById("reactW");
  const reactangleWValue = reactangleW.value;
  const reactWidth = parseFloat(reactangleWValue);
  // get the length
  const reactL = document.getElementById("reactL");
  const reactLValue = reactL.value;
  const reactLength = parseFloat(reactLValue);

  //calculate Reactangle
  const reactangle = reactWidth * reactLength;

  // display
  tDisplay = document.getElementById("tDisplay");
  tDisplay.innerText = `Reactangle : ${reactangle}`;
}
