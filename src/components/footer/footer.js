import './footer.css';

const Footer = (props) => {
  console.log('Footer rendered');
  return (
    <div className="footer w-100">
      <div className='d-flex justify-content-between flex-row'>
        <h1>
          Location
        </h1>
        <h1>
          Quote
        </h1>
        <h1>
          Todo
        </h1>
      </div>
    </div>
  );
};

export default Footer;