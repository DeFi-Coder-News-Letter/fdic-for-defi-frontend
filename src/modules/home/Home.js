import React from 'react';
import {Redirect} from 'react-router-dom';
import Button from '../shared/Button';

import GlobalContext from '../../GlobalContext';

class Home extends React.Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

    this.state = {
      start: false
    };

    this.handleGetStarted = this.handleGetStarted.bind(this);
  }

  async handleGetStarted() {
    console.log('handleGetStarted');
    this.context.setupGlobalContext();
    this.setState({start: true});
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.start && <Redirect to='/manual'/>
        }
        <div className='row'>
          <div className='col-sm-12 center'>
            <div className='logo' style={logoFont}>defisurance</div>
          </div>
        </div>
        <div style={defaultFontStyle}>Insure your decentralized deposits</div>
        <div className='row'>
        <div className='col-sm-12 center'>

          <Button title='Get started' onClick={this.handleGetStarted} style={{cursor: 'pointer'}} invertColors={true} />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-sm-12 center'>
            <img style={logoStyle} src='/logos/maker.svg' alt='maker-icon' />
            <img style={logoStyle} src='/logos/compound.svg' alt='compound-icon' />
            <img style={logoStyle} src='/logos/dYdX.svg' alt='dYdX-con'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 center'>
            <img style={logoStyle} src='/logos/0x.svg' alt='0x-icon' />
            <img style={logoStyle} src='/logos/augur.svg' alt='augur-icon' />
            <img style={logoStyle} src='/logos/cheesewizard.svg' alt='cheesewizard-icon' />
          </div>
        </div>

      </div>
    );
  }
}

const defaultFontStyle = {
  color: '#ffffff',
  fontSize: '40px',
  textAlign: 'center',
  fontWeight: '700'
};

const logoStyle = {
  padding: '25px'
}

const logoFont = {
  fontSize: '60px',
}

export default Home;
