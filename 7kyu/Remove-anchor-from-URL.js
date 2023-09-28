// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution
function removeUrlAnchor(url) {
  const anchorIndex = url.indexOf('#');

  if (anchorIndex !== -1) {
    return url.slice(0, anchorIndex);
  }
  
  return url;
}
