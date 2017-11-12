import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import whiteImage from '../assets/images/wireframe/white-image.png';
import nan from '../assets/images/avatar/large/nan.jpg';
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
          <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  label={{ as: 'a', corner: 'left', icon:'heart'}}
                  src={whiteImage}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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