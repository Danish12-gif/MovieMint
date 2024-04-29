import prod1 from '../images/prod-1.png';
import prod2 from '../images/prod-2.png';
import prod3 from '../images/prod-3.png';
import prod4 from '../images/prod-4.png';
import prod5 from '../images/prod-5.png';
import prod6 from '../images/prod-6.png';
import prod7 from '../images/prod-7.png';

function ProductionHouses() {
  return( 
  <div className="production py-5 mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-7 brdr-line">
                <h2 className='pb-2 h2-line'>
                    <span className="main-color">Production</span> Houses
                </h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod1} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">EEC STUDIOS</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod2} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">Sooper Glich</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod3} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">EAST PRODUCTIONS</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod4} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">AbdulRehman</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod5} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">PRODUCER</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod6} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">PurpleBAT Film</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="prod-card h-100">
                    <img src={prod7} alt="production house" className="img-fluid prod-img" width="400" height="360" />
                    <h3 className="fs-4 my-3 ps-3">Waleed</h3>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default ProductionHouses;
