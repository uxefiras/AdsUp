import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
function Nav() {
  return (
    <div>
      <NavBar>
        <div className="sections">
          <h4>Collections</h4>
          <h4>Most Popular</h4>
        </div>
        <div className="sections">
          <h2>REBUNI</h2>
        </div>
        <div className="sections">
          <h4>My Account</h4>
          <h4>My Cart</h4>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
          </div>
        </div>
      </NavBar>
    </div>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0rem;
  min-width: 90vw;
  min-height: 10vh;
  border-bottom: 0.1rem solid #dddddd;
  .sections {
    display: flex;
    align-items: center;
    h4 {
      cursor: pointer;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: regular;
      font-size: small;
      padding: 0 2rem;
    }
    .search {
      cursor: pointer;
      padding: 1rem;
      background-color: #000000;
    }
  }
`;

export default Nav;
