<!DOCTYPE html>
<html>
<head>
    <title>SELECT dropdown list with "selected" attribute</title>
    
    <style>
    	* {font: 18px Calibri;}
    </style>
</head>

<body>
	<p>
    	SELECT dropdown list (below) is showing a default value.
    </p>
    
    <select id="sel" name="birds">
      <option value="">-- Select --</option>
      <option value="001">Hairy Woodpecker</option>
      <option value="002" selected>Brewer's Sparrow</option>
      <option value="003">White-tailed Hawk</option>
  </select>
</body>
</html>