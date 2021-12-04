 // eslint-disable-next-line
import logo from './assets/images/Logo-3.png'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

function App() {
  return (
    <div className="App">
      <Navbar bg="myRed"  sticky='top' expand="lg">
        <Navbar.Brand>
          <img src={logo} width="fix" height="fix"/>{''}
        </Navbar.Brand>

        <Navbar.Toggle style={{ fill: 'black' }}/>
        
        <Navbar.Collapse>
          <Nav >
          <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" size={50} style={{ fill: 'black',marginLeft:80 }}/>
              <span class="input-group-text border-0" id="search-addon">
                <Icon.Search size={40} style={{ fill: 'black' }}/>
            </span>
          </div>
            <Nav.Link href='blog'><Icon.CartCheck size={40} style={{ fill: 'black',marginLeft:80 }}/></Nav.Link>
            <Nav.Link href='blog'><Icon.Person size={40} style={{ fill: 'black',marginLeft:80 }}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar> 
     
      <div className='content'>
          This is a content.
      </div>
    </div>
  );
}

export default App;
