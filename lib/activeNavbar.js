/*
 * activeNavbar - a jquery plugin which assign a class="active" to a navbar 
 * if the URL match with the href from that navbar
 * 
 * @author Vladu Sorin
 * 
 * @version 1.0
 *
 */

var activeNavbar =
{

	init: function( className )
	{
		if( typeof className == 'undefined' )
		{
			className = "active";
		}
		
		var currentUrl = activeNavbar.trim( document.URL );

		$(".activeNavbar li").each( function(index, li) 
		{
			var liObj = $(li);
			var aObj = liObj.find('a');

			var elementUrl = activeNavbar.trim( aObj.attr("href") );

			
			if( typeof( aObj.attr("href") ) != "undefined" && elementUrl == currentUrl )
			{
				liObj.addClass( className );
			}
			
			
		});
	},

	trim: function( string )
	{
		var n = string.indexOf("#");
		if( n > 0)
		{
			string = string.substring(0, n);
		}
		
		if( string[ string.length-1 ] == '/' )
		{
			string = string.substring(0, string.length-1);
		}

		return string;
	}
	

}
