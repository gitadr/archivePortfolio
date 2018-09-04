	
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    
    <!-- Image click through -->
    	<script type="text/javascript">
  			$(document).ready(function() {
    			$("a.imagelink").click(function() {
    			$("#imagepreview").html($("<img>").attr("src", this.href));
    			event.preventDefault()
				});
 			});
		</script>
	
		<script type="text/javascript">
		$(document).ready(function() {
	
			$('.preview-details li').click(function() {
    		// remove existing current selection
    		$('.preview-details li.current').removeClass('current');

    		// Apply style to selected item
    		$(this).addClass('current');
			});
		});
		</script>
	
	<!-- Google analytics -->
	<script>
  		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-46089139-1', 'auto');
  		ga('send', 'pageview');
	</script>
	
  	</body>
  	
</html>