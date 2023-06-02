import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
<h1>Sales</h1>
<p>The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing.</p>
<div className="ctas">
    <div className="banner-cta">Read More</div>
    <div className="banner-cta v2">Shop Now</div>
</div>
            </div>
            <img className="banner-img" src={BannerImg} alt="BannerImage" />
        </div>
    </div>;
};

export default Banner;
