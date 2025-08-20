import React from 'react';
import SEO from './SEO';

const SocialMediaTest = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <SEO 
        title="Social Media Test - Cardinal Consulting"
        description="Test page to verify social media meta tags and thumbnail.png are working correctly for Cardinal Consulting."
        keywords="social media test, meta tags, thumbnail"
        url="/test"
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Social Media Meta Tags Test
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            ✅ Meta Tags Configured
          </h2>
          <p className="text-blue-800 mb-4">
            This page has been configured with comprehensive social media meta tags that will use your thumbnail.png file.
          </p>
          <ul className="text-blue-800 space-y-2">
            <li>• <strong>Open Graph tags</strong> for Facebook, LinkedIn, and WhatsApp</li>
            <li>• <strong>Twitter Card tags</strong> for Twitter sharing</li>
            <li>• <strong>Thumbnail image</strong> set to /thumbnail.png</li>
            <li>• <strong>Proper title and description</strong> for social sharing</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How to Test
            </h3>
            <ol className="text-gray-700 space-y-2">
              <li>1. Copy this page URL</li>
              <li>2. Paste it in a text message</li>
              <li>3. You should see the Cardinal Consulting thumbnail</li>
              <li>4. Test on Facebook, Twitter, LinkedIn, WhatsApp</li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              Expected Results
            </h3>
            <ul className="text-green-800 space-y-2">
              <li>• <strong>Title:</strong> "Social Media Test - Cardinal Consulting"</li>
              <li>• <strong>Description:</strong> Test page description</li>
              <li>• <strong>Image:</strong> Your thumbnail.png file</li>
              <li>• <strong>URL:</strong> Proper canonical URL</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">
            📱 Testing Tools
          </h3>
          <p className="text-yellow-800 mb-4">
            You can also test your meta tags using these online tools:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="https://developers.facebook.com/tools/debug/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Facebook Debugger
            </a>
            <a 
              href="https://cards-dev.twitter.com/validator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Twitter Card Validator
            </a>
            <a 
              href="https://www.linkedin.com/post-inspector/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              LinkedIn Post Inspector
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTest; 