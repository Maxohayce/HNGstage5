import { Link } from "react-router-dom";
import Work from "../../components/works/constants";
import features from "../../components/feature/constants";
import { Works, Feature } from "../../components";
import "./home.css";

const Home = () => {
    return (
        <div className="landing">
            <div className="landingContainer">
                <div className="landingLeft">
                    <h1>Show Them <br /> Don't Just Tell</h1>
                    <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button>Install HelpMeOut  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g id="vuesax/linear/arrow-right">
                            <g id="arrow-right">
                                <path id="Vector" d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path id="Vector_2" d="M2.91699 10.5H16.942" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                    </svg></button>
                </div>
                <div className="landingRight">
                    {/* <img src="https://s3-alpha-sig.figma.com/img/562e/c72a/e4ac079a908500c838022450785aa01c?Expires=1696809600&Signature=TgiNbtKOEwQYSN45YapZ7Sf6EzENTIsGnMzXI-6cMSweQlrDrxWhWkU3NDHezr~vKtaHWYZWRSmH5ovzD~GpO5BycSTPKP7aORdIqVfONG1E8oAAUEvJ~VuWYJClN9ku1-hzzAstmAGr4FFCDYVFDG8-qHtY5dJ~gStwK43pQ4~H5gxRyyuMWHqhvnlpxx78x71boJiEq2gWNT3WqNmFPbEIZg6KZCjzDmbcgDKCZDd7mlap8ObI1BogfVJcpSmTJBJxaWX8AS5n7gbWDLHDYUIbwf7eIS5mu9ArRoCNfqr7IEUG7~yWyOjddWMWEBMijRDwCyY3wj33ZoyhGZW0ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="landingOne" /> */}
                    {/* <img src="https://s3-alpha-sig.figma.com/img/dd5d/e95a/b638b3c4b53b2fc1fa85d28e0ec45a67?Expires=1696809600&Signature=lgVXc4Ev2mfBY~2Z-tXti-R6dRpakSyekWNseKkEflu9S3esNqqJ-XmcZpQ6e3iF8M3Or0~dQD6ry1YIjICPLw3O03ofy4QkCyNF48EsgqoTSj9OXBNEQtzvQTuA23acU6eue4wmdHgcVGToenE29k0sUGYmAUgt7RSvNsW4adKcO15Aa2hydgBrN0SBfSbkcmxxXj5KOKnAWJr72-bH828ndj2XxHeEwWn6cKeRgygDIxCTjxaogjylqMG72gxesSavrTFRRX78dNFjEYgv4-PEs~srhaOLH-DkYcrS0wQLxtEz8nqdNRwrqO02jmnmL-A7ICqBoLmIyJIFhHSmrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="landingTwo" /> */}
                    <img src="https://s3-alpha-sig.figma.com/img/3a6b/c9ba/1209950a9568ee0d685f7f47e4dc6eae?Expires=1696809600&Signature=IRj6HPivLml4yF567jSjeAW3~DC1GeW~eR4SZwn2yLvtgu0AQsjlgmKxtp4YPkyOACDZFkbtWKo-mNoX~6bfridJ2a5akf0wwE5LBk4QllG8PW5p0vLU5EdmadTrTAhYwmXxkKzBjqLxwQxb9n7jv5KNimziBcLbrJPnCSSUsjvXZcvYb6ewpaH5WI5J6tIx6LurOKzQ2rxsVZbbBCUtUmrgThmgo3i8OjKPRIsGxg6~M9l2q1SxOXJBbQdnbPBnIqDIADKNlbSsnbfw7Boi7ozrM2cJ4AtXFkdOQyDVdFaQO-kTge4m6Rfs6sXdCakP-XCp38-CqfaTZJu1xFPBMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="landingThree" />
                </div>
            </div>
            <span className="pageDivider"></span>
            <div className="features">
                <div className="featuresHead">
                    <h3>Features</h3>
                    <p>Key Highlights of Our Extension</p>
                </div>
                <div className="featuresContainer">
                    <div className="featuresLeft">
                        {features.map((item, i) => (
                            <Feature key={item[i]} title={item.title} content={item.content} img={item.img} />
                        ))}
                    </div>
                    <Link className="featureVid" to="/savedVideo">
                        <img src="https://s3-alpha-sig.figma.com/img/32ff/a639/2aa9495e1afd2c0bf642066aa3b33887?Expires=1696809600&Signature=FqZ0O8pF5KcZQ1DwlxHprPgGHS5iOprMyA-ny~cCaTb23up5o4KH41JeAaVc7spRExYARTWGo9wAVwU1K5ZoElyMCd2SsL8eejtLDrVowCF96i5aNUchah2TarJSJnXZsCPBJ2sHeJX3ruMbsTiDbndN~KWLyCPELKioReYh5eZpB614rbs49JeQCmTpR~I0m8abt770ZHZIG6t1h~X7b90MbVzkw6z8IcRwmc57x~cuOKAKto6lHivoG6iq2-wcQPRmcA6fO5fd0awhF5ew1Q4HqLVStJzyjMO6V~gtQbVGmqbcl2lH2Q2RfeMe962jjFDgRgv8QD7PQECW6nLFKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </Link>
                </div>
            </div>
            <span className="pageDivider"></span>
            <div className="howItWorks">
                <h3>How it works</h3>
                <div className="howItContainer">
                    {Work.map((item, i) => (
                        <Works key={item[i]} title={item.title} content={item.content} steps={item.steps} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;