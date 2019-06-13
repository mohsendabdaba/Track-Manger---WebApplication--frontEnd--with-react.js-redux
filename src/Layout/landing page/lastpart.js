import React from 'react'
import {CardDeck,Card} from 'react-bootstrap'
const Last =()=>{
    return(
        <div className="big-card">
        <CardDeck className="row ">
        <Card className="col-lg-4 col-md-4 col-sm-12 card">
          <Card.Img variant="top" src="http://wpcurve.com/wp-content/uploads/2015/01/Post-it-board1.png?x73518" />
          <Card.Body>
            <Card.Title>Organization</Card.Title>
            <Card.Text>
            Go from idea to action in seconds with Track Manager intuitively simple boards, lists, and cards.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <button type="button" class="btn btn-outline-warning btn1">Sign Up - It's Free !</button>
              </small>
          </Card.Footer>
        </Card>
        <Card className="col-lg-4 col-md-4 col-sm-12 ">
          <Card.Img variant="top" src="https://clickup.com/landing/images/views/other/flat-list.png" />
          <Card.Body>
            <Card.Title>Information at a glance</Card.Title>
            <Card.Text>
            Dive into the details by adding comments, attachments, due dates, and more directly to Track Manager cards. Collaborate on projects from beginning to end.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <button type="button" class="btn btn-outline-warning btn1">Sign Up - It's Free !</button>
              </small>
          </Card.Footer>
        </Card>
        <Card className="col-lg-4 col-md-4 col-sm-12">
          <Card.Img variant="top" src="https://pbs.twimg.com/media/DiKjIyjX4AYu4Yt.jpg" />
          <Card.Body>
            <Card.Title>Work with any team</Card.Title>
            <Card.Text>
            Whether it’s for work, a side project or even the next family vacation, Track Manager helps your team stay organized.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <button type="button" class="btn btn-outline-warning btn1">Sign Up - It's Free !</button>
              </small>
          </Card.Footer>
        </Card>
      </CardDeck>
      </div>

    )
}
export default Last;