import React from 'react'
import Link from 'gatsby-link'
import {injectGlobal} from 'styled-components'

import AudioPlayer from '../components/AudioPlayer'
import logo from '../img/logo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


injectGlobal`

  .navbar{
    border-bottom: 1px solid #eed0d2;
    font-family: 'Pathway Gothic One', sans-serif;
    text-transform: uppercase;
    transition: all 0.3s ease;

    @media (max-width: 767.98px) {
        background-color: rgba(165, 165, 165, 0.9);
    }

    .container{
      max-height: 50px;
    }




  }

  .nav-scrolled{
    background-color: rgba(165, 165, 165, 0.9);
    transition: all 0.3s ease;

  }

  /*
  .navbar-toggler-icon::before{
    content:'MENU';
    margin-left: -65px;
    margin-top: 5px;
    position: absolute;
    font-size: 1.25rem;
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: 1px;
  }*/

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 1);
    border: none;
  }

  .navbar .navbar-nav .nav-item .nav-link {
      color: rgba(255, 255, 255, 1) !important;
      transition: all 0.3s ease;

    &:hover {
        color: #eed0d2 !important;
        transition: all 0.3s ease;
      }
  }

  .navbar-collapse {
    text-align: center;
  }

  .nav-social.navbar-nav li  {
    @media (max-width: 767.98px) {
      background-color: transparent;
    }
  }

  .nav-social.navbar-nav  {
    @media (max-width: 767.98px) {
      margin: 1rem auto;
      max-width: 250px;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  .nav-music.navbar-nav  {
    @media (max-width: 767.98px) {
      /*margin-bottom: 1rem;*/
    }
  }

  .musical {
    align-content: center;
  }

  .musico {
    @media (max-width: 767.98px){
      position: absolute;
      right: 55px;
      top: 14px;
    }
  }

`;




export default class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 80;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
  this.setState({ isTop });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }
  render() {
    return (
      <div>
        <Navbar color="inverse" dark fixed="top" expand="md" className={this.state.isTop ? '' : 'nav-scrolled'}>
        <div className="container" style={{position: 'relative'}}>
          <NavbarBrand href="/">
          <figure className="nav-logo">
            <img src={logo} alt="Carla" className="img-fluid" style={{ width: '120px', marginTop:'5px' }} />
          </figure>
          </NavbarBrand>

          <Nav navbar className="nav-music musico" style={{order: '3'}}>
            <NavItem>
              <AudioPlayer songs={songs} />
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              {/*<NavItem>
                <NavLink href="/#gigs">Conciertos</NavLink>
              </NavItem>*/}
              <NavItem>
                <Link to="/videos" className="nav-link">Videos</Link>
              </NavItem>
              <NavItem>
                <Link to="/musica" className="nav-link">Música</Link>
              </NavItem>
              <NavItem>
                <Link to="/bio" className="nav-link">Bio</Link>
              </NavItem>
              <NavItem>
                <Link to="/#tienda" className="nav-link">Tienda</Link>
              </NavItem>
              <NavItem>
                <Link to="/#contacto" className="nav-link">Contacto</Link>
              </NavItem>
              <NavItem>
                <Link to="/galeria" className="nav-link">Galería</Link>
              </NavItem>
              <NavItem>
                <Link to="/qa" className="nav-link">Q&A</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="nav-link">Blog</Link>
              </NavItem>
            </Nav>
            <Nav navbar className="nav-social">
              <NavItem>
                <NavLink href="https://www.youtube.com/user/CarlaMorrisonMusic" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://open.spotify.com/artist/0XK6kT7xcZAlcYrNjOgzJe" rel="noopener noreferrer">
                  <i className="fa fa-spotify"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://itunes.apple.com/us/artist/carla-morrison/id292289334" rel="noopener noreferrer">
                  <i className="fa fa-apple"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/CARLAMORRISONOFICIALMX" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/carlitamorrison/" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/CarlaMorrisonMx" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </NavLink>
              </NavItem>
              {/*}<NavItem className="musical my-auto">
                <AudioPlayer songs={songs} />
              </NavItem>*/}
            </Nav>

          </Collapse>

          {/*<Nav className="mr-auto nav-music" navbar>
            <NavItem>
              <NavLink href="/#" id="toggleMusic"><i class="music-icon fa fa-volume-up"></i></NavLink>
            </NavItem>
            <div style={{display: 'none'}}>
              <audio id="audio-player" autoplay>
                <source class="ogg-type" src="../../static/landing/backgroundMusic1.ogg" type="audio/ogg"/>
                <source class="mp3-type" src="../../static/landing/backgroundMusic1.mp3" type="audio/mpeg"/>
              </audio>
            </div>
            <NavItem>
              <NavLink href="#" id="switch-music"><i class="music icon fa fa-angle-double-right"></i></NavLink>
            </NavItem>
          </Nav>*/}
        </div>
        </Navbar>

      </div>
    );
  }
}



const songs = [
  {
    url: 'http://claymore.france.free.fr/momo/summer love.mp3',
    cover:
      'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
    artist: {
      name: 'Justin Timberlake',
      song: 'Summer Love',
    },
  },
  {
    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
    cover:
      'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Daft Punk',
      song: 'Get Lucky',
    },
  },
  {
    url: '../music/backgroundMusic1.mp3',
    artist: {
      name: 'Michael Buble',
      song: 'Feeling Good',
    },
  },

];



/*
componentDidMount() {
  var musicPlayer = document.getElementById('audio-player');

  var soundAudioPlayer = false;
  var musicCollection = [
    {
      'ogg': '../../static/landing/backgroundMusic1.ogg',
      'mp3': '../../static/landing/backgroundMusic1.mp3'
    },
    {
      'ogg': '../../static/landing/backgroundMusic2.ogg',
      'mp3': '../../static/landing/backgroundMusic2.mp3'
    },
    {
      'ogg': '../../static/landing/backgroundMusic3.ogg',
      'mp3': '../../static/landing/backgroundMusic3.mp3'
    }
  ];

  var currentIndex = 0;
  var currentMusic = musicCollection[ currentIndex ];
  function toggleAudioPlayerSound(){
    soundAudioPlayer = !soundAudioPlayer;
    var musicOn = 'fa-volume-up';
    var musicOff = 'fa-volume-off';

    if(soundAudioPlayer){
      $('#toggleMusic .music-icon')
        .removeClass( musicOn )
        .addClass( musicOff );
    }else{
      $('#toggleMusic .music-icon')
        .removeClass( musicOff )
        .addClass( musicOn );
    }

    musicPlayer.muted = soundAudioPlayer;
  }

  function switchMusic(){
    currentIndex++;
    currentMusic = musicCollection[ currentIndex % musicCollection.length ];

    document.getElementsByClassName('ogg-type')[0].src = currentMusic['ogg'];
    document.getElementsByClassName('mp3-type')[0].src = currentMusic['mp3'];

    musicPlayer.load();
    musicPlayer.play();
  }

  $('#toggleMusic').on('click', toggleAudioPlayerSound);
  $('#switch-music').on('click', switchMusic);
};
*/
