<?php
	$listUsername = Array("a6terabytenta","tuanem123");
	if($_GET["username"]){
		foreach ($listUsername as $key => $username) {
			if($username === $_GET["username"]){
				echo "true";
			}
		}
	}
?>