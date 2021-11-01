import React, { useState } from 'react';
import './Header.css';
import { FiSearch } from 'react-icons/fi';
import Logo from "./logo/DermaWorld.png"
// import Sidebar from "./menu/menu"

const Header = () => {
	const [ isShowing, setIsShowing ] = useState(false);
	const [ isShowing2, setIsShowing2 ] = useState(false);

	function preventDefault(e) {
		e.preventDefault();
		setIsShowing(true);
	}
	return (
		<header>
        {/* <Sidebar/> */}
            <img src={Logo} alt="header logo" className="header__logo"/>
			<div className="search">
				<input id="search_icon" placeholder="SEARCH" />
				<label for="search_icon">
					<FiSearch className="search_icon" />
				</label>
			</div>
            <nav className="header__menu">
				<ul>
					<li
						onMouseEnter={() => setIsShowing(true)}
						onMouseLeave={() => setIsShowing(false)}
						onClick={preventDefault}
					>
						<a href="./">Bedingungen</a>
						{isShowing && (
							<ul className="submenu">
								<li
									onMouseEnter={() => setIsShowing2(true)}
									onMouseLeave={() => setIsShowing2(false)}
									onClick={preventDefault}
								>
									<a href="./">Adtralza</a>
									{isShowing2 && (
										<ul className="submenu_submenu">
											<li>
												<a href="./">Overview</a>
											</li>
											<li>
												<a href="./">Mode of Action</a>
											</li>
											<li>
												<a href="./">Efficacy</a>
											</li>
											<li>
												<a href="./">Quality of Life</a>
											</li>
                                            <li>
												<a href="./">Safety</a>
											</li>
                                            <li>
												<a href="./">Dosing</a>
											</li>
                                            <li>
												<a href="./">News</a>
											</li>
                                            <li>
												<a href="./">Technical Information</a>
											</li>
										</ul>
									)}
								</li>
								<li>
									<a href="./">Diavonex</a>
								</li>
								<li>
									<a href="./">Diavobet</a>
								</li>
                                <li>
									<a href="./">Enstilar</a>
								</li>
                                <li>
									<a href="./">Fucidin</a>
								</li>
                                <li>
									<a href="./">Kyntheum</a>
								</li>
                                <li>
									<a href="./">Protopic</a>
								</li>
                                <li>
									<a href="./">Skinoren</a>
								</li>
                                <li>
									<a href="./">Tralokinumab</a>
								</li>
                                <li>
									<a href="./">Xamiol</a>
								</li>
							</ul>
						)}
					</li>
					<li>
						<a href="./">Behandlungen</a>
					</li>
					<li>
						<a href="./">
							About
						</a>
					</li>
					<li>
						<a href="./">Veranstaltungen</a>
					</li>
					<li>
						<a href="./">Werkzeuge</a>
					</li>
					<li>
						<a href="./">Forschung und Erkenntnisse</a>
					</li>
				</ul>
			</nav>

			
		</header>
	);
};

export default Header;
