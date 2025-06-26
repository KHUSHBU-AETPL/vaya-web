import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUsDetailed = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-orange mb-6">Focus and values</h1>
            </div>
          </div>
        </div>

        {/* Focus and Values Content */}
        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">Inclusive and affordable</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is that everyone feels welcome in our community, regardless of level,
            gender, budget or even no matter who is his/her favorite football team or player :)
            We want football to be accessible for everyone and therefore we work with
            reasonable prices, so that no one has to compromise on his/her favorite sport.
          </p>
        </div>

        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">Great venues and devoted organisers</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We want to see as many happy faces as possible and that is why we strive for
            the best venues and a great organisation. All organisers are selected and
            trained by us to deliver the very best experience.
          </p>
        </div>

        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">Development of Women's and Mixed Football</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Vaya has a female founder, and therefore we know it's hard for women to find
            a place to play. We want to change that and give women a prominent position.
            We also recognise that it can be hard to find social games without expectations
            of a certain level or competitiveness. That is why we want to focus on women's
            and mixed football, to create a space where everyone can find their game and
            community.
          </p>
        </div>

        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">Social aspects</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Football you play with a team, not alone. That is the spirit we want to emphasize,
            on and off the pitch. We think the social aspect is as valuable as the match itself,
            thus we encourage gatherings before or after the match.
            What we love most is seeing new friendships and a close community that enjoys
            sharing moments together.
          </p>
        </div>

        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">No global app, but local quality</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Vaya, we have no investors that ask for high profits or fast scaling. We are in
            control of our our vision and mission and therefore we can offer a premium and
            constant quality of games and staff.
          </p>
        </div>

        <div className="bg-primary-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-orange mb-4">Rewarding loyalty</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We love our players and the participation and contribution of every single player,
            and therefore we created a loyalty program. Every user can reach a special
            status and and earn game credits, so that we can show our appreciation and give
            something back.
          </p>
        </div>

        {/* Back to About Button */}
        <div className="text-center mt-8">
          <Link
            to="/about"
            className="inline-block bg-primary-orange text-primary-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all hover:bg-opacity-90 hover:shadow-lg"
          >
            Back to About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetailed;
