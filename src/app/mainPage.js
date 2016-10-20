import Radium from 'radium';
import React, {Component} from 'react';

const sideMenu = {
  menu: {
    background: 'linear-gradient(#3A638F, #F0AE90)',
    height: '100%',
    font: 'bold 1.5rem Helvetica',
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '28rem'
  },
  rang: {
    'padding': '2rem',
    ':hover': {
      background: '#ACD6FF'
    }
  },
  text: {
    margin: '1rem',
    verticalAlign: 'middle'
  },
  widget: {
    margin: '1rem',
    verticalAlign: 'middle'
  },
  lien: {
    backgroundColor: 'green'
  }
};

const header = {
  header: {
    alignItems: 'right',
    paddingTop: '5rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    paddingBottom: '1rem',
    height: '9.1rem',
    backgroundColor: '#323471',
    color: 'white'
  },
  title: {
    'padding': '2rem',
    'font': 'bold 1.6rem Helvetica',
    ':hover': {
      background: 'white'
    }
  },
  rang: {
  }
};

const top = {
  rang: {
    marginTop: '4rem'
  },
  button: {
    marginTop: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  arrow: {
    marginLeft: '1rem'
  },
  search: {
    marginTop: '2rem',
    paddingRight: '3rem',
    paddingLeft: '3rem'
  },
  greyBar: {
    height: '0.2rem',
    width: '95%',
    margin: '3rem',
    backgroundColor: 'lightgrey'
  },
  image: {
    marginTop: '-4rem',
    padding: '2rem',
    height: '17rem',
    width: '42rem'
  }
};

const styles = {
  rang: {
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '1rem',
    paddingTop: '1rem'
  },
  rangTable: {
    paddingLeft: '4rem',
    paddingRight: '3rem'
  },
  title: {
    verticalAlign: 'middle',
    color: 'black',
    font: '3rem Helvetica'
  },
  wrapButt: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem'
  },
  button: {
    paddingRight: '2rem',
    paddingLeft: '2rem',
    backgroundColor: 'lightgrey',
    color: 'white',
    verticalAlign: 'middle'
  },
  buttonDelete: {
    paddingRight: '2rem',
    paddingLeft: '2rem',
    verticalAlign: 'middle'
  },
  table: {
    textAlign: 'center'
  },
  tblCheckbox: {
    textAlign: 'center',
    width: '5%'
  },
  tblPR: {
    textAlign: 'center',
    width: '13%'
  },
  tblTitle: {
    textAlign: 'center',
    width: '26%'
  },
  tblDelivery: {
    textAlign: 'center',
    width: '13%'
  },
  tblAmount: {
    textAlign: 'center',
    width: '13%'
  },
  tblProgress: {
    textAlign: 'center',
    width: '25%'
  },
  tblStar: {
    textAlign: 'center',
    width: '5%'
  },
  bar: {
    marginLeft: '-1.5rem'
  },
  bar1: {
    width: '10%'
  },
  bar2: {
    width: '70%'
  },
  bar3: {
    width: '90%'
  },
  bar4: {
    width: '35%'
  },
  bar5: {
    width: '58%'
  },
  bar6: {
    width: '12%'
  },
  bar7: {
    width: '78%'
  },
  text: {
    color: 'black',
    marginTop: '-1rem',
    verticalAlign: 'middle'
  },
  pagination: {
    marginTop: '-1rem',
    verticalAlign: 'middle'
  }
};

@Radium
export class MainPage extends Component {
  render() {
    return (
      <div className="row">
        <aside style={sideMenu.menu} className="col-lg-3 collapse in" id="collapse">
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-pie-chart fa-2x"></i>
              <span style={sideMenu.text}>Purchase Requisition</span>
            </div>
          </a>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-pencil-square-o fa-2x"></i>
              <span style={sideMenu.text}>Purchase Order</span>
            </div>
          </a>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-eur fa-2x"></i>
              <span style={sideMenu.text}>Budget</span>
            </div>
          </a>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-list-alt fa-2x"></i>
              <span style={sideMenu.text}>Catalogue</span>
            </div>
          </a>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-ellipsis-h fa-2x"></i>
              <span style={sideMenu.text}>More</span>
            </div>
          </a>
          <span style={sideMenu.rang}></span>
          <div style={sideMenu.rang}>
            <p>Admin</p>
          </div>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-th fa-2x"></i>
              <span style={sideMenu.text}>Manage Catalogue</span>
            </div>
          </a>
          <a>
            <div style={sideMenu.rang}>
              <i style={sideMenu.widget} className="fa fa-sliders fa-rotate-90 fa-2x"></i>
              <span style={sideMenu.text}>PR/PO Settings</span>
            </div>
          </a>
        </aside>

        <section style={header.header} className="col-lg-9">
          <div className="row" style={header.rang}>
            <span style={header.title}>MANAGE PR</span>
            <span style={header.title}>ADD PR</span>
            <span style={header.title}>BROWSE CATALOGUE</span>
          </div>
        </section>

        <section className="col-lg-9">
          <div className="row" style={top.rang}>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img style={top.image} src="image/bande.png"/>
            </div>
            <div className="dropdown col-lg-1 col-md-1 col-sm-2 col-xs-2">
              <button style={top.button} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu_1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                More
                <span className="caret" style={top.arrow}></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu_1">
                <li><a href="#">A bit more</a></li>
                <li><a href="#">Another bit more</a></li>
                <li><a href="#">Something else but still more</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">An other more</a></li>
              </ul>
            </div>
            <div className="input-group col-lg-5 col-md-5 col-sm-10 col-xs-10" style={top.search}>
              <input placeholder="Search..." type="text" className="form-control"/>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="row" style={top.greyBar}></div>
        </section>

        <section className="col-lg-9">
          <div className="row" style={styles.rang}>
            <p className="col-lg-7 col-md-7 col-sm-12 col-xs-12" style={styles.title}>Displaying Drafts</p>
            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2" style={styles.wrapButt}>
              <button className="btn btn-default" style={styles.button}>Duplicate</button>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2" style={styles.wrapButt}>
              <button className="btn btn-default" style={styles.button}>Submit</button>
            </div>
            <div className="col-lg-offset-1 col-lg-1 col-md-offset-1 col-md-1 col-sm-offset-2 col-sm-2 col-xs-offset-2 col-xs-2">
              <button className="btn btn-danger" style={styles.buttonDelete}>Delete</button>
            </div>
          </div>
          <div className="row" style={styles.rangTable}>

            <table className="table table-striped table-bordered table-responsive col-lg-12" style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tblCheckbox}><input type="checkbox"/></th>
                  <th style={styles.tblPR}>PR #</th>
                  <th style={styles.tblTitle}>Title</th>
                  <th style={styles.tblDelivery}>Delivery</th>
                  <th style={styles.tblAmount}>Amount</th>
                  <th style={styles.tblProgress}>Progress</th>
                  <th style={styles.tblStar}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0001</td>
                  <td>Otto</td>
                  <td>5 Days</td>
                  <td>2000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={styles.bar1}>
                        <span className="sr-only">10% Complete</span>
                      </div>
                    </div>
                    <span>10%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0002</td>
                  <td>Thornton</td>
                  <td>10 Days</td>
                  <td>3000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style={styles.bar2}>
                        <span className="sr-only">66% Complete</span>
                      </div>
                    </div>
                    <span>66%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0003</td>
                  <td>the Bird</td>
                  <td>10 Days</td>
                  <td>1000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={styles.bar3}>
                        <span className="sr-only">90% Complete</span>
                      </div>
                    </div>
                    <span>90%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0004</td>
                  <td>the Bird</td>
                  <td>10 Days</td>
                  <td>1000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={styles.bar4}>
                        <span className="sr-only">35% Complete</span>
                      </div>
                    </div>
                    <span>35%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0005</td>
                  <td>the Bird</td>
                  <td>10 Days</td>
                  <td>1000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100" style={styles.bar5}>
                        <span className="sr-only">58% Complete</span>
                      </div>
                    </div>
                    <span>58%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0006</td>
                  <td>the Bird</td>
                  <td>10 Days</td>
                  <td>1000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={styles.bar6}>
                        <span className="sr-only">12% Complete</span>
                      </div>
                    </div>
                    <span>12%</span>
                  </td>
                  <td>☆</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>PR0007</td>
                  <td>the Bird</td>
                  <td>10 Days</td>
                  <td>1000,00</td>
                  <td>
                    <div className="progress progress-striped active">
                      <div className="progress-bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={styles.bar7}>
                        <span className="sr-only">78% Complete</span>
                      </div>
                    </div>
                    <span>78%</span>
                  </td>
                  <td>☆</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row" style={styles.rangTable}>
            <p className="pull-left" style={styles.text}>Showing <strong>10-8</strong> results of <strong>248</strong></p>
            <ul className="pagination pull-right" style={styles.pagination}>
              <li className="disabled"><a href="#">Prev</a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2 <span className="sr-only">(current)</span></a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">...</a></li>
              <li><a href="#">25</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
