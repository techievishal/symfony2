
    import React from 'react'
    import { Link } from 'react-router-dom'

    const Footer = () => (

    		

<footer className="footer bg-light">
	<div className="container">
		<div className="row">
			<div className="col-md-12 h-100 text-center text-lg-left my-auto">
			
				<ul className="list-unstyled">

					<li><b>Get into Businesss</b>
						<ul className="list-unstyled">
							<li>
		                    <Link className='btn btn-sm' to='/restaurant/create'>
		                    	Become a Restaurant Partner
		                    </Link>
		                    </li>
							<li>
							<Link className='btn btn-sm' to='/dasher/create'>
	                    	Become a Dasher
	                    	</Link>
	                    	</li>
						</ul></li>
				</ul>
				<hr />
				<ul className="list-inline mb-2">
					<li className="list-inline-item"><a href="#">About</a></li>
					<li className="list-inline-item">&sdot;</li>
					<li className="list-inline-item"><a href="#">Contact</a></li>
					<li className="list-inline-item">&sdot;</li>
					<li className="list-inline-item"><a href="#">Terms of Use</a></li>
					<li className="list-inline-item">&sdot;</li>
					<li className="list-inline-item"><a href="#">Privacy Policy</a></li>
				</ul>
				<hr />
				<p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019.
					All Rights Reserved.</p>
			</div>

		</div>
	</div>
</footer>

    )

    export default Footer