import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="footer font-small mt-auto cyan darken-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="#"> Lead Manager</a>
            </div>  
        </footer>
    )
  }
}

export default Footer