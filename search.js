function animateSearchBar(isActive) {
  const searchContainer = document.querySelector('.search');
  if (isActive) {
    searchContainer.classList.add('active');
  } else {
    searchContainer.classList.remove('active');
  }
}
