import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Scroll, { Link, Element, DirectLink, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import Paragraph from '../assets/images/wireframe/paragraph.png';
import './app.css';

export default class MenuExample extends Component {
  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    
        Events.scrollEvent.register('begin', function() {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function() {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>  
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu pointing secondary fixed='top'>
      <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
      </Link>    
      <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>      
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
      </Link>  
      <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >    
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Link>    
      </Menu>

        
          <Element name="test1" className="element" >
            Test1
          </Element>
        
      
          <Element name="test2" className="element" >
           Test2
          </Element>
        
      
          <Element name="test3" className="element" >
            Test3
          </Element>
        
      </div>
    )
  }
}