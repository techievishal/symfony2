<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
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


<?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>



	<!-- Masthead -->
	<header class="masthead text-white text-center">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-xl-9 mx-auto">
					<h3 class="mb-5">Your Favourite food, delivered by us!</h3>
				</div>
				<div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
					<form>
						<div class="form-row">
							<div class="col-12 col-md-9 mb-2 mb-md-0">
								<input type="text" class="form-control form-control"
									placeholder=" Enter Delivery Address..."> <!-- <i class="material-icons">place</i> -->
							</div>
							<div class="col-12 col-md-3">
								<button type="submit" class="btn btn-block btn-primary">Find
									Restaurants</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</header>
	<?php echo $__env->make('partials.homepageblocks', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
	 <?php echo $__env->yieldContent('content'); ?>
	 
	 <div id="root">Test</div>

	<?php echo $__env->make('partials.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


</body>
</html>
<?php /**PATH C:\xampp\htdocs\flavaste\resources\views/layouts/master.blade.php ENDPATH**/ ?>