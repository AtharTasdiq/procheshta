import React from 'react';
import "./Dashboard.scss";
import BackToTop from "react-back-to-top-button";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import Footer from '../Footer/Footer';



const DashBoard = () => {
    return (
        <div style={{backgroundColor:"#b6edf8"}}>
           <div className="app-container">
  <div className="left-area">
    <button className="btn-close-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-x-circle" viewBox="0 0 24 24">
        <defs />
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </button>
    <div className="app-name">Dashboard</div>
    <a href="#" className="item-link active" id="pageLink">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-grid" viewBox="0 0 24 24">
        <defs />
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    </a>
  
    <button className="btn-logout">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-log-out" viewBox="0 0 24 24">
        <defs />
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
      </svg>
    </button>
  </div>
  <div className="main-area">
    <button className="btn-show-right-area">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <button className="btn-show-left-area">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
   
    <section className="content-section">
      <h1 className="section-header">Admin Panel</h1>
      <div className="access-links">
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <span className="access-text">Images</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-music">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span className="access-text">Music</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-play">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <span className="access-text">Video</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-left">
              <line x1="17" y1="10" x2="3" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="3" y2="14" />
              <line x1="17" y1="18" x2="3" y2="18" />
            </svg>
          </div>
          <span className="access-text">Docs</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="access-text">Apps</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down-circle">
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 12 16 16 12" />
              <line x1="12" y1="8" x2="12" y2="16" />
            </svg>
          </div>
          <span className="access-text">Download</span>
        </div>
      </div>
    </section>

    <section className="content-section d-flex">
    <div className="col-sm-3 col-md-2">
			<div className="progress" data-percentage="80">
				<span className="progress-left">
					<span className="progress-bar"></span>
				</span>
				<span className="progress-right">
					<span className="progress-bar"></span>
				</span>
				<div className="progress-value">
					<div>
						80%<br/>
						<span>completed</span>
					</div>
				</div>
			</div>
		</div>
        <div className="col-sm-3 col-md-2">
			<div className="progress" data-percentage="80">
				<span className="progress-left">
					<span className="progress-bar"></span>
				</span>
				<span className="progress-right">
					<span className="progress-bar"></span>
				</span>
				<div className="progress-value">
					<div>
						80%<br/>
						<span>completed</span>
					</div>
				</div>
			</div>
		</div>

    </section>
    <section className="content-section">
      <div className="section-header-wrapper">
        <h1 className="section-header">Recent Donation</h1>
        <a className="section-header-link">
          View all Donation
        </a>
      </div>
      <div className="files-table">
        <div className="files-table-header">
          <div className="column-header table-cell">Name</div>
          <div className="column-header table-cell">TrxID</div>
          <div className="column-header table-cell size-cell">Amount</div>
          <div className="column-header table-cell">Donation Date</div>
          <div className="column-header table-cell">Certificate</div>
        </div>
        <div className="files-table-row">
          <div className="table-cell name-cell">Andrew Garfield</div>
          <div className="table-cell name-cell">6011431993</div>
          <div className="table-cell">$100</div>
          <div className="table-cell">Dec24, 2021</div>
          <div className="table-cell">
            <button className="btn btn-success">Upload</button>
          </div>
        </div>
        <div className="files-table-row">
          <div className="table-cell name-cell">Tom Holland</div>
          <div className="table-cell name-cell">50624492</div>
          <div className="table-cell size-cell">$50</div>
          <div className="table-cell">Dec 20, 2021</div>
          <div className="table-cell">
            <button className="btn btn-success">Upload</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="right-area">
    <div className="right-area-header-wrapper">
      <p className="right-area-header">Admin Info</p>
    </div>

    <div className="download-item-line">
      <div className="download-area ">
          <img className='w-100' src={"https://avatars.githubusercontent.com/u/73756973?s=400&u=c720cc90c8a7a3979ec97bc6965dbe6844d7842d&v=4"} alt="email"/>
      </div>
    </div>

    <div className="download-item-line">
      <div className="download-area">
        <div>
            <p>Welcome, <span className='fw-bold'>Atahar Ali Khan</span></p>
        </div>
      </div>
    </div>

    <div className="download-item-line">
      <div className="line-header">Email</div>
      <div className="download-area">
          <icon><img className='download-icon mx-3' src={email} alt="email"/></icon>
        <div className="download-item-icon">
            <p>atharkhantasdiq@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="download-item-line">
      <div className="line-header">Phone</div>
      <div className="download-area">
      <icon><img className='download-icon mx-3' src={phone} alt="phone"></img></icon>
        <div className="download-item-icon">
            <p>+8801629140996</p>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
<BackToTop
                    // showOnScrollUp
                    showAt={100}
                    speed={8000}
                    // easing="easeOutSine"
                >
                    <span className="backToTop"><img className="border border-dark border-2 rounded-circle" src="https://cdn.discordapp.com/attachments/560412279078780938/919876120659230740/Untitled_design__1_-removebg-preview.png" alt=""></img></span>
</BackToTop>
        </div>
    );
};

export default DashBoard;