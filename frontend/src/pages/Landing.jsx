import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Share Moments, Stay Connected.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          A simple and engaging platform to share your thoughts, pictures, and experiences with the
          world.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild variant="solid" className="px-6 py-3 text-lg">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="px-6 py-3 text-lg">
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      </div>

      {/* App Mockup Image */}
      <div className="mt-12 w-full max-w-4xl px-4">
        <img
          src="https://source.unsplash.com/featured/?technology,social"
          alt="App Preview"
          className="w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
