import React from 'react';
import { Element } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Parallax from './Parallax';

const Timeline = () => (
  <Element name="timeline" className="element">
    <Parallax title="MY JOURNEY" type="timeline" />
    <Container>
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="main-timeline9">
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span>
                    <i className="fas fa-birthday-cake" />
                  </span>
                </div>
                <div className="content">
                  <span className="year">1993</span>
                  <h4 className="title">Born</h4>
                  <p className="description">
                    I introduced myself to the world, early morning of August 9,
                    1993 at Vadodara district located in Gujarat, India.
                  </p>
                  <div className="icon">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span>
                    <i className="fas fa-school" />
                  </span>
                </div>
                <div className="content">
                  <span className="year">1998 - 2010</span>
                  <h4 className="title">School</h4>
                  <p className="description">
                    Started school when I was 5 years old and completed my high
                    school in 2010.
                  </p>
                  <div className="icon">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span>
                    <i className="fas fa-university" />
                  </span>
                </div>
                <div className="content">
                  <span className="year">2010 - 2014</span>
                  <h4 className="title">Bachelor of Computer Science</h4>
                  <p className="description">
                    I have completed my undergraduate from K.J. Institute of
                    Engineering and Technology, Savli which is accredited by
                    AICTE (All India Council for Technical Education) and it is
                    affiliated to Gujarat Technological University with{' '}
                    <strong>3.5 GPA</strong>.
                  </p>
                  <div className="icon">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span>
                    <i className="fas fa-university" />
                  </span>
                </div>
                <div className="content">
                  <span className="year">2014 - 2016</span>
                  <h4 className="title">Masters of Computer Science</h4>
                  <p className="description">
                    I have completed my graduate from California State
                    University, Fullerton with <strong>3.5 GPA</strong>.
                  </p>
                  <div className="icon">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <div className="circle">
                  <span>
                    <i className="fas fa-rings-wedding" />
                  </span>
                </div>
                <div className="content">
                  <span className="year">2019</span>
                  <h4 className="title">Married To Kajal Rathod</h4>
                  <p className="description">
                    We were classmates and friends when pursing Bachelor's. From
                    being friends we became best friends and fall in love with
                    her. I proposed her on November 14, 2012 and she said{' '}
                    <strong>YES</strong>. It is been amazing 8 years!!!
                  </p>
                  <div className="icon">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* https://bootsnipp.com/snippets/Q0ppE */}
    </Container>
  </Element>
);

export default Timeline;
