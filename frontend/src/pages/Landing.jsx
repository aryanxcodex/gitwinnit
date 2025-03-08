import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Share Moments,
            </span>
            <br />
            <span className="text-slate-800">Stay Connected</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            A beautiful platform to share your experiences and connect with like-minded people
            around the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-200"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
            >
              Existing Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* App Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200/50 bg-white">
              {/* <img
                src="https://source.unsplash.com/featured/?technology,social"
                alt="App Preview"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              /> */}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Sharing</h3>
            <p className="text-slate-600">
              Quickly post your experiences with rich text formatting
            </p>
          </div>

          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Real Discussions</h3>
            <p className="text-slate-600">Engage in meaningful conversations through comments</p>
          </div>

          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Platform</h3>
            <p className="text-slate-600">Your data is protected with enterprise-grade security</p>
          </div>
        </div>
      </div>
    </div>
  );
}
