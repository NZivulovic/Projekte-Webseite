
// Projekt Selector navBar

function navBarSelector(targetId) {
  
  document.querySelectorAll('.projektContainer').forEach(el => {
    el.style.display = 'none';
  });
  
  
  const targetElement = document.getElementById(targetId);

  
  if (targetElement) {
    targetElement.style.display = 'block';
  }
}