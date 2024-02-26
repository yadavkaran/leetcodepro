
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OS from '../Assets/os.png';
import DS from '../Assets/ds.png';
import PL from '../Assets/pl.png';
import SD from '../Assets/sd.jpeg';
import DB from '../Assets/db.png';
import COA from '../Assets/coa.jpeg';

function TeacherHome() {
  const carouselHeight = '700px';
  
  return (
    <>
    <div className="container">
  <div className="row mt-4 mb-4">
    <div className="col">
      <h3>Welcome Teacher</h3>
    </div>
  </div>
  <div className="row mb-4" style={{ marginBottom: '1cm' }}>
    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginRight: '0.5cm' }}>
        <Card.Img variant="top" src={PL} />
        <Card.Body>
          <Card.Title>Prog. Lang.</Card.Title>
          <Button variant="primary">
            <a href="/SubTopics" style={{ color: 'white', textDecoration: 'none' }}>View</a>
          </Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginRight: '0.3cm', marginLeft: '0.5cm' }}>
        <Card.Img variant="top" src={DS} />
        <Card.Body>
          <Card.Title>Data Struct.</Card.Title>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginLeft: '0.3cm' }}>
        <Card.Img variant="top" src={DB} />
        <Card.Body>
          <Card.Title>Database</Card.Title>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>
</div>

<div className="row" style={{ marginBottom: '1cm' }}>
    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginRight: '0.5cm' }}>
        <Card.Img variant="top" src={SD} />
        <Card.Body>
          <Card.Title>System Des.</Card.Title>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginRight: '0.3cm', marginLeft: '0.5cm' }}>
        <Card.Img variant="top" src={COA} />
        <Card.Body>
          <Card.Title>Comp. Arch.</Card.Title>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '16rem', margin: 'auto', marginLeft: '0.3cm' }}>
        <Card.Img variant="top" src={OS} />
        <Card.Body>
          <Card.Title>OS</Card.Title>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>
</div>

</div>
      </>
  );
}

export default TeacherHome;
