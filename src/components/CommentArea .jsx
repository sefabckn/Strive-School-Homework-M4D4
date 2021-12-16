import Form from 'react-bootstrap/Form'
import { Component } from 'react'
import { Container, Row, Button } from 'react-bootstrap'

class CommentArea extends Component{
        state={
            comment:'',
            rate:''
        }
        render(){
            return(
                <> <Container>
                        <Row>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Add Comment</Form.Label>
                                        <Form.Control 
                                        as="textarea" 
                                        rows={3}
                                        value={this.state.comment}
                                        onChange={()=>{this.setState({
                                            comment:{value}
                                        })}}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Rate</Form.Label>
                                        <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant='success' type='submit'>Send Comment</Button>
                            </Form>
                        </Row>
                    </Container>
                </>
            )
        }
}
export default CommentArea