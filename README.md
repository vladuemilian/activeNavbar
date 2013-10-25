#activeNavbar

A simple javascript library that's assign a class name for you as easy as possible, without mess with this issue at server-side.

###Example:
```
<script>
	$(document).ready(function()
	{
		activeNavbar.init();
	});
</script>

<ul class="activeNavbar">
	<a href="/something">Something</a>
	<a href="/contact">Contact</a>
</ul>
```

You only need to assign a class called activeNavbar to parent element. The library will check if that the current URL match with the URL from href tag.

###Requirements

jQuery 1.7+
