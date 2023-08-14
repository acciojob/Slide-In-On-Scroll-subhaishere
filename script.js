// Your JS code here.
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

	const slideInElements = document.querySelectorAll('.slide-in');

	function handleScroll() {   
	    
	      slideInElements.forEach(element => {
	        // Calculate the position to trigger the slide-in effect
	        const slideInAt = (window.scrollY + window.innerHeight) - (element.height / 2);
	        const imageBottom = element.offsetTop + element.height;
	        const isHalfShown = slideInAt > element.offsetTop;
	        const isNotScrolledPast = window.scrollY < imageBottom;
	    
	        // Add or remove the 'active' class based on scroll position
	        if (isHalfShown && isNotScrolledPast) {
	          element.classList.add('active');
	        } else {
	          element.classList.remove('active');
	        }
	      });
	    }
	
	window.addEventListener('scroll', debounce(handleScroll));

	