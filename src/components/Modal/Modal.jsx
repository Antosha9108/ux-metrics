import React from "react"
import "./Modal.css"
import { Link } from "react-router-dom"
import { COHORT_DATE_RANGE_OCTOBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_NOVEMBER } from '../Calendar/CalendarData'
import { COHORT_DATE_RANGE_DECEMBER } from '../Calendar/CalendarData'

export default function Modal() {
    return (

        <div className="modal">
            <img src="./images/11.png" alt="Outcome-Driven UX Metrics" className="modal-image" />
            <span>Next Cohorts:</span>
            {/* <ul>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
                <li><div className="modal-spans"><span>Oct 28 - Nov 21 </span> <br /><span>See Schedule</span></div> <button>Join Cohort</button></li>
            </ul> */}

            <div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        <p><b>{COHORT_DATE_RANGE_OCTOBER[0].start} - {COHORT_DATE_RANGE_OCTOBER[0].end}</b></p>
                        <Link to="/octoberschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/october" className="modal-button-link">Join Cohort</Link></button>
                    {/* <button className="btn-shadow">  <a className="modal-button-link" href="https://centercentre.spiffy.co/checkout/ux-metrics-oct#pop">Join Cohort</a></button> */}
                </div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p> <b>{COHORT_DATE_RANGE_NOVEMBER[0].start} - {COHORT_DATE_RANGE_NOVEMBER[0].end}</b></p>
                        <Link to="/novemberschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/november" className="modal-button-link">Join Cohort</Link></button>
                </div>
                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                    <p><b>{COHORT_DATE_RANGE_DECEMBER[0].start} - {COHORT_DATE_RANGE_DECEMBER[0].end}</b></p>
                        <Link to="/decemberschedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">  <Link to="/december" className="modal-button-link">Join Cohort</Link></button>
                </div>


            </div>
            <span>8 or more team members?</span>
            <br />
            <Link to="/teams">Explore private team courses</Link>
        </div>

    )
}