
// Components
import Header from '../components/Header/Header';
import GreenArticle from '../components/GreenArticle/GreenArticle';
import Testimonials from '../components/Testimonials/Testimonials';
import CourseSchedule from '../components/CourseSchedule/CourseSchedule';
import JaredSpool from '../components/JaredSpool/JaredSpool';
import VideoSeries from '../components/VideoSeries/VideoSeries';
import Footer from '../components/Footer/Footer';
import Modal from "../components/Modal/Modal";
import TestComponent from "../components/TestComponent/TestComponent";
import PurchaseBox from "../components/PurchaseBox/PurchaseBox";
import HorizontalModal from '../components/HorizontalModal/HorizontalModal';


export default function Home() {
    return (
        <div className="App">

            <Header />

            < GreenArticle >
                <p>To get real measurable UX results, we need to focus on our customers’ and users’ real needs.
                </p>
                <p>Everything we do and measure should be outcome-based. No more measuring for measuring sake. </p>
            </GreenArticle >
            <TestComponent >
                <div className="article-content">
                    <h2>Outcome-Driven UX Metrics.</h2>
                    <h2>Measuring your users’ actual experience.</h2>
                    <p><b>Outcome-Driven UX Metrics</b> is our radical approach to measuring and reporting UX metrics with your organization. You’ll directly measure how every new release of your products and services improves your customers’ and users’ lives.
                    </p>
                    <p>When you share Outcome-driven UX Metrics, you’ll…
                    </p>
                    <ul>
                        <li>Increase the strategic contributions your UX team delivers to your organization.
                        </li>
                        <li>Raise the perception of UX’s value in the eyes of your executives and senior stakeholders.
                        </li>
                        <li>Inspire your peers in development and product management to make UX a priority in their work.</li>
                        <li>Guide your organization to deliver more human-centered products and services.</li>
                    </ul>
                    <p> The Outcome-driven UX Metrics framework is not based on the magical thinking you find in conventional UX metrics approaches. Conventional metrics make your work harder because there’s no direct connection to the effort you put in.
                    </p>

                    <p>With conventional metrics, you have to cross your fingers and hope that your hard work will improve your conversion rates, Net Promoter Scores, or revenue and retention metrics. Those metrics make it hard when someone asks how you know your work made things better. With conventional metrics, you never really know.
                    </p>

                    <p>Outcome-driven UX Metrics are different. They measure directly how you and your team have improved your customers’ and users’ lives.
                    </p>
                    <p><i>”What gets measured, gets done.”</i> With Outcome-driven UX Metrics, UX gets done well. Your executives and senior stakeholders immediately see the value improved UX brings your customers and the increased benefits your users receive.
                    </p>
                    <p>Outcome-driven UX Metrics make UX distinctively visible.</p>

                    <h3>Showcase precisely where you’re delivering value.</h3>

                    <p>You’ll start with what we call a <i>UX Outcome.</i> Your UX outcome answers a simple question: <i>How will you improve your users’ and customers’ lives?</i> Ultimately, you’ll build your metrics around this question. </p>

                    <p> Using your UX outcome, you’ll create three categories of metrics:</p>
                    <ul>
                        <li><i>UX Success metrics:</i> Report the precise moment you’ve improved your customers’ and users' lives.</li>
                        <li><i>UX Progress metrics:</i> Achieve key results as your team progresses against your planned milestones.</li>
                        <li><i>Problem-value metrics:</i> Pinpoint and aggregate your organization’s ongoing costs of poor UX to promote UX’s return on investment. </li>
                    </ul>
                    <p>Each of these metrics categories helps you tell the story of your UX journey. The story of where you’re going, where you started, and how far along you are.</p>
                    <p>Outcome-driven UX Metrics are simple in their concepts. Once you acquire the fundamentals, you’re ready to implement your own. </p>
                    <p>And once you implement your own Outcome-Driven UX Metrics, you've unleashed a superpower. You'll spark exceptional outcomes with your UX metrics as a foundation.</p>
                    <p><b>You need Outcome-driven UX metrics to improve how your organization values UX.</b></p>
                </div>
                <Modal />
            </TestComponent>

            <Testimonials>
                <p>The content of this course has deeply impacted my career (and love for experience design). Your framing of UX outcomes and metrics particularly filled a previously daunting gap in my practice. I find myself constantly returning to anecdotes, positions, and points of view that I came across with Jared Spool.</p>
                <p>You’re hands down the biggest influence on my own career.</p>
                <span><b>- UX Researcher and Designer </b></span>
            </Testimonials>
            <CourseSchedule />
            <HorizontalModal />
            <JaredSpool />

            <TestComponent>
                <div className="pricing-content">
                    <h2>Sign up for Outcome-Driven UX Metrics Course</h2>
                    <p>Ready to dive in deep and absorb everything there is to know about Outcome-driven UX Metrics?</p>
                    <ul>
                        <li>Individual price per person <br /> $499</li>
                        <li>Team price per person ($100 off each person)<br /> $399</li>
                        <li>Unemployed UXer per person <br /> $199</li>
                    </ul>
                    <div>
                        <p><b>What’s included:</b></p>
                        <ul>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 1-hour live coaching sessions with Jared Spool.</li>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 50-minute recorded lectures (to watch on your own time or together during a scheduled session for each topic).
                            </li>
                            <li><img src="./images/5-2.png" alt="book" className="pricing-list-image" />Access a library of resources for developing your UX metrics strategy.</li>
                            <li><img src="./images/7.png" alt="person with glasses" className="pricing-list-image" />A private community to get your questions answered by Jared and other members.
                            </li>
                            <li><img src="./images/comp.png" alt="computer" className="pricing-list-image" />6 Weeks of access to all session recordings, Q&As, and notes.</li>
                            <li><img src="./images/10.png" alt="certificate" className="pricing-list-image" />A personalized Certificate of Completion for the Outcome-driven UX Metrics program.</li>
                        </ul>
                    </div>
                </div>
                <Modal />
            </TestComponent>
            <VideoSeries>
                <div>
                    <h3>Can’t attend the course live? <br />
                        Purchase the Recorded Outcome-Driven UX Metrics Video Series.</h3>
                    <p>We know that not everyone has the resources to join us live. That’s ok. You can purchase the UX Metrics to Drive Your Organization's video series.
                    </p>
                    <p>You can watch all nine sessions of the Outcome-driven UX Metrics Course broken up into two parts in our UX Strategy Essentials Library.</p>
                    <span><b>What’s included for $227:</b></span>
                    <ul>
                        <li>The lectures and notes from all eight topics.</li>
                        <li>Catch the lectures on your own schedule.
                        </li>
                    </ul>
                    <span>Access is for 90 days.</span>
                </div>
                <PurchaseBox
                    src="./images/93.png"
                    text="Outcome-Driven UX Metrics Video Series"
                    buttonText="PURCHASE VIDEO SERIES"
                />
            </VideoSeries>

            <Footer />
            {/*<FloatingComponent /> */}
        </div>
    );
}