<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Flavaste</title>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Styles -->
<link rel="stylesheet" href="css/app.css">
<link href="css/landing-page.min.css" rel="stylesheet">
</head>
<body>


@include('partials.header')



	<!-- Masthead -->
	<header className="masthead text-white text-center">
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-xl-9 mx-auto">
					<h3 className="mb-5">Your Favourite food, delivered by us!</h3>
				</div>
				<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
					<form>
						<div className="form-row">
							<div className="col-12 col-md-9 mb-2 mb-md-0">
								<input type="text" className="form-control form-control"
									placeholder=" Enter Delivery Address..."> <!-- <i className="material-icons">place</i> -->
							</div>
							<div className="col-12 col-md-3">
								<button type="submit" className="btn btn-block btn-primary">Find
									Restaurants</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</header>
	@include('partials.homepageblocks')
	 @yield('content')
	 
	 <div id="root">Test</div>

	@include('partials.footer')


</body>
</html>
