function openSearch() { 
    document.getElementById("myOverlay").style.display = "block"; 
  } 
  
  // Close the full screen search box 
  function closeSearch() { 
    document.getElementById("myOverlay").style.display = "none"; 
  }
  
  const getUserSelectedText = () => {
    return window.getSelection().toString();
  }
  
  const searchInput = () => {
    document.getElementById("search-button")
    console.log("Search input function");
  }