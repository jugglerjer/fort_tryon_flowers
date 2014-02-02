$(document).ready(function(){

	// Create an array of all the image rows on the page
	var $ROWS = $('.row');

	// Determine whether or not a given row is visible on the page
	function isRowVisible($row) {

		// Get the top and bottom positions of the window
		var windowTop = window.scrollY;
		var windowBottom = windowTop + $(window).height();

		// Get the position of the image
		var rowTop = $row.offset().top;
		var rowBottom = rowTop + $row.height();

		// Return whether or not the image is within the dimensions of the visible window
		return rowTop >= windowTop - $row.height() && rowBottom <= windowBottom + $row.height();
	}

	// Loads the flowers in only those rows that are visible
	function loadVisibleRows() {
		$ROWS.each(function (index, row) {
			var $row = $(row);
			if (isRowVisible($row)) {
				$row.find('img.flower').each(function (index, img) {
					loadFlowerImage($(img));
				});		
			}
		});
	}

	// Loads the image for the passed in flower
	function loadFlowerImage($img) {
		if ($img.attr('src') == '') {
			$img.attr('src', $img.data('src'));
			$img.load(function () {
				$(this).addClass('visible');
			})
		}
	}

	// When the user scrolls
	// check whether each row is visible on the screen
	// and load its image if it is
	$(window).bind('scrollstop', function () {
		loadVisibleRows();
	});

	// Load the visible flowers when the page is ready
	loadVisibleRows();

})