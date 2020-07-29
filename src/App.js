import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import Order from "./Components/order";
import Team from "./Components/team";
import Blogs from "./Components/blogs";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Sitemap from "./Components/sitemap";
import Blog1 from "./Components/blog1";
import Blog2 from "./Components/blog2";
import Blog3 from "./Components/blog3";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/sitemap" component={Sitemap} />
          <Route
            exact
            path="/use-logicarts-for-your-business-2"
            component={Blog1}
          />
          <Route
            exact
            path="/why-lead-generation-is-key-for-business-growth"
            exact
            component={Blog2}
          />
          <Route
            exact
            path="/use-logicarts-for-your-business"
            exact
            component={Blog3}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
