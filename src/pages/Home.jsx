import devImage from '/images/dev-image.png'

function Home() {
  return (
    <div id="hello-page">
       <div className="container-flex">
         <div style={{display: 'flex'}}>
          <div>
            <p className="row-number" style={{paddingTop: '1rem'}}>1</p>
            <p className="row-number">2</p>
            <p className="row-number">3</p>
            <p className="row-number">4</p>
            <p className="row-number">5</p>
            <p className="row-number">6</p>
            <p className="row-number">7</p>
            <p className="row-number">8</p>
            <p className="row-number">9</p>
            <p className="row-number">10</p>
            <p className="row-number">11</p>
            <p className="row-number">12</p>
            <p className="row-number">13</p>
            <p className="row-number" style={{paddingBottom: '0.3rem'}}>14</p>
            <p className="row-number" style={{paddingBottom: '0.6rem'}}>15</p>
            <p className="row-number" style={{paddingBottom: '0.9rem'}}>16</p>
            <p className="row-number" style={{paddingBottom: '0.9rem'}}>17</p>
            <p className="row-number" style={{paddingBottom: '0.6rem'}}>18</p>
            <p className="row-number" style={{paddingBottom: '0.3rem'}}>19</p>
            <p className="row-number">20</p>
            <p className="row-number">21</p>
            <p className="row-number">22</p>
            <p className="row-number">23</p>
            <p className="row-number">24</p>
            <p className="row-number">25</p>
            <p className="row-number">26</p>
            <p className="row-number">27</p>
            <p className="row-number">28</p>
            <p className="row-number">29</p>
            <p className="row-number" style={{paddingBottom: '1rem'}}>30</p>
          </div>
          <div className="coding-editor-lines">
            <div className="horizontal-line" style={{height: '31.5rem', marginTop: '4rem', marginBottom: '4rem'}}></div>
            <div className="horizontal-line" style={{height: '27rem', marginTop: '6.5rem'}}></div>
            <div className="horizontal-line" style={{height: '23rem', marginTop: '9rem'}}></div>
            <div className="horizontal-line" style={{height: '18rem', marginTop: '11rem'}}></div>
            <div className="horizontal-line hide-on-mobile" style={{height: '11rem', marginTop: '14rem'}}></div>
          </div>
         </div>
         <div className="introduction-container">
            <h4 className="introduction">Hello, i am</h4>
            <h1 className="introduction-fullname">Arijan Demaj</h1>
            <h4 className="introduction-title">Software Developer</h4>
         </div>
         {/*
             <div id="image-div">
            <img src={devImage} alt='dev-image'/>
          </div>
         */}
     
       </div>
    </div>
  );
}

export default Home;