const cndList = {
	jquery: [
		'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>',
	],
	bootstrap: [
		'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>',
		'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>',
		'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">'
	],
	tailwind:[
		'<script src="https://cdn.tailwindcss.com"></script>'
	]
};


async function getCDN(lst) {
	let required = []
	lst.forEach(cdn => {
		try {
			cndList[cdn].forEach(item => {
				if (!required.includes(item)) {
					required.push(item);
				}
			});			
		} catch (error) {
			console.log(`cnd for "${cdn}" not found`);
		}

	});
	required.forEach(cdn => {
		document.getElementsByTagName("head")[0].innerHTML += cdn;
	});
}
