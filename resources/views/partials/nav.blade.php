
<nav className="navbar navbar-light bg-light fixed-top">
	<div className="container">
		<h2>
			<a className="navbar-brand" href="#">Flavaste</a>
		</h2>
		@if (Auth::check())
		<li><a className="dropdown-item" href="{{route('user.profile')}}">User
				Profile</a></li>
		<div className="dropdown-divider"></div>
		<li><a href="{{route('user.logout')}}">Logout</a></li> @else <a
			className="btn btn-primary" href="{{route('user.signup')}}">SignUp</a> <a
			className="btn btn-primary" href="{{route('user.login')}}">SignIn</a>
		@endif

	</div>
</nav>