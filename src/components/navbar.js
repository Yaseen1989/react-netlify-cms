import React from "react"
import { ProductsDropdown, DevelopersDropdown, CompanyDropdown } from "../DropDowns";
import DropDownsContainer from "../DropDownsContainer";

import "../styles.scss";

const navigation = [
  {
    title: "About",
    dropdown: ProductsDropdown
  },
  {
    title: "Services",
    dropdown: DevelopersDropdown
  },
  { title: "User Information", dropdown: CompanyDropdown }
];

class Navbar extends React.Component {
  state = {
    activeIndices: []
  };

  onMouseEnter = event => {
    const currentIndex = Number(event.currentTarget.dataset.index);
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === currentIndex) return;
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(currentIndex)
    }));
  };

  onMouseLeave = () => {
    this.setState({
      activeIndices: []
    });
  };

  render() {
    let CurrentDropdown;
    let PreviousDropdown;

    const previousIndex = this.state.activeIndices[this.state.activeIndices.length - 2];
    const currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

    if (typeof currentIndex === "number") {
      CurrentDropdown = navigation[currentIndex].dropdown;
    }

    if (typeof previousIndex === "number") {
      PreviousDropdown = navigation[previousIndex].dropdown;
    }

    return (
      <div className="app-container">
        <nav className="navbar-el" onMouseLeave={this.onMouseLeave}>
          <ul className="navbar-list">
            {navigation.map((n, index) => {
              return (
                <div
                  className="navbar-item-el"
                  onMouseEnter={this.onMouseEnter}
                  onFocus={this.onMouseEnter}
                  data-index={index}
                  key={index}
                >
                  <button className="navbar-item-title">{n.title}</button>
                  <div className="dropdown-slot">
                    {currentIndex === index && (
                      <div>
                        <DropDownsContainer preventDistortion="[data-prevent-distortion]">
                          <div
                            className="caret"
                            data-prevent-distortion
                            data-transform-origin="left bottom"
                          />
                          <div className="dropdown-background">
                            {PreviousDropdown && <PreviousDropdown prev />}
                            <CurrentDropdown current />
                          </div>
                        </DropDownsContainer>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}


export default Navbar