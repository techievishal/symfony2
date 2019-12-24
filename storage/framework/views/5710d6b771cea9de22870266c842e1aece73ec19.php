
<nav class="navbar navbar-light bg-light fixed-top">
	<div class="container">
		<h2>
			<a class="navbar-brand" href="#">Flavaste</a>
		</h2>
		<?php if(Auth::check()): ?>
		<li><a class="dropdown-item" href="<?php echo e(route('user.profile')); ?>">User
				Profile</a></li>
		<div class="dropdown-divider"></div>
		<li><a href="<?php echo e(route('user.logout')); ?>">Logout</a></li> <?php else: ?> <a
			class="btn btn-primary" href="<?php echo e(route('user.signup')); ?>">SignUp</a> <a
			class="btn btn-primary" href="<?php echo e(route('user.login')); ?>">SignIn</a>
		<?php endif; ?>

	</div>
</nav><?php /**PATH C:\xampp\htdocs\flavaste\resources\views/partials/nav.blade.php ENDPATH**/ ?>