import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import App from "./component/App";
import QR from "./component/QRReader";
import Admin from "./component/Admin";
import AddVanForm from "./component/AddVanForm";
import Main from "./views/main";
import Single from "./views/single";
import CompanyInfo from "./views/companyInfo";
import "../styles/index.scss";
import "../styles/footer.scss";
import QRReader from "./component/QRReader";
import Lost from "./component/Lost";
import AddCompanyForm from "./component/AddCompanyForm";
//import ChartComp1 from "./component/ChartComp1";

export const Layout = () => {
	const basename = process.env.BASENAME || "";
	//create state

	return (
		<>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/addvan" component={AddVanForm} />
						<Route path="/qr" component={QR} />
						<Route path="/app" component={App} />
						<Route path="/admin" component={Admin} />
						<Route path="/single" component={Single} />
						<Route path="/company" component={CompanyInfo} />
						<Route path="/qrreader" component={QRReader} />
						<Route path="/add-company" component={AddCompanyForm} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
