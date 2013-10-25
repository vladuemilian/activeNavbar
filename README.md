#activeNavbar

A simple javascript library that's assign a class name for you as easy as possible, without mess with this issue at server-side.

###Example:
```
<script>
	$(document).ready(function()
	{
		/*
		 * 
		 * You also can pass another class name than "active" to this function as parameter, 
		 * for example: activeNavbar.init("my-active-class");
		 *
		 */
		activeNavbar.init(); 
	});
</script>

<ul class="activeNavbar">
	<li><a href="/something">Something</a></li>
	<li><a href="/contact">Contact</a></li>
</ul>
```

You only need to assign a class called activeNavbar to parent element. The library will check if that the current URL match with the URL from href tag.

###Requirements

jQuery 1.7+
