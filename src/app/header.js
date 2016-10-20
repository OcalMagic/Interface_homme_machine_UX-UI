import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#334A78'
  },
  title: {
    flex: 1,
    fontSize: '3rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  },
  bars: {
    marginLeft: '3rem'
  },
  buyer: {
    color: 'orange'
  },
  image: {
    border: '2px solid #366A8F',
    borderRadius: '50%',
    width: '7rem',
    height: '7rem',
    margin: '1rem'
  },
  widget: {
    margin: '1rem'
  },
  stewart: {
    color: '#366A8F'
  },
  text: {
    margin: '1rem',
    paddingRight: '3rem'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header} className="row">
        <a style={styles.bars} role="button" data-toggle="collapse" href="#collapse" aria-expanded="true" aria-controls="collapse"><i className="fa fa-bars fa-2x"></i></a>
        <p style={styles.title}>
          Meta<span style={styles.buyer}>buyer</span>
        </p>
        <div className="col-lg-offset-4 col-lg-2 col-sm-offset-5 col-sm-3 col-xs-offset-3 col-xs-2">
          <a href="#" style={styles.widget}><i className="fa fa-envelope-o fa-2x"></i></a>
          <a href="#" style={styles.widget}><i className="fa fa-bell-o fa-2x"></i></a>
          <a href="#" style={styles.widget}><i className="fa fa-cog fa-2x"></i></a>
        </div>
        <img style={styles.image} src="image/man.jpg"/>
        <p style={styles.text}>Welcome<br/><span style={styles.stewart}>Stewart Jones</span></p>
      </header>
    );
  }
}
