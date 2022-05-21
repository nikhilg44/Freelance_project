import {Button,Row,Col,Form} from 'react-bootstrap';
import {useState} from 'react';

function Mains() {
      const [data, setData] = useState({
        question: "how you do'in?",
        isReveal:"true"
      });
    function onSkip(e) {

    }
    function onReveal(e) {
    console.log("revealed")
    setData({...data,isReveal : false})
    }
    function onSubmit(e) {

    }

  return (
    <div>

  <Form>
    <Form.Group className="m-6 mb-3" controlId="exampleForm.ControlInput1">
    <Row>
    <Col></Col>
    <Col xs={5}>
        <div  style={{display:'inline-flex',justifyContent:'center',flexWrap:"wrap",gap:"40px"}}>
        <h4>Question</h4>
        <input type={data.isReveal ? "password" : "text"} value={data.question} readOnly></input>
        <Button onClick={(e)=>onSkip(e)}>Skip</Button>
        <Button onClick={(e)=>onReveal(e)}>Reveal</Button>
        </div>
    </Col>
    <Col></Col>
    </Row>

    </Form.Group>
    <Row>
    <Col></Col>
    <Col xs={3}>
    <Form.Group  className="mb-3"   controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Variants"  rows={2} />
    </Form.Group>
    </Col>
    <Col></Col>
    </Row>
    <Row>
    <Col></Col>
    <Col xs={3}>
    <Form.Group className="mb-3"    controlId="exampleForm.ControlTextarea2">
        <Form.Control as="textarea" placeholder="Suggestion" rows={3} />
    </Form.Group>
    </Col>
    <Col></Col>
    </Row>
    <Row>
    <Col></Col>
    <Col xs={1}>
    <Button className="ml-5" type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
    </Col>
    <Col></Col>
    </Row>
</Form>
        
    </div>
  );
}

export default Mains;