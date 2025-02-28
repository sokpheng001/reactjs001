import { Button, MegaMenu, Navbar } from "flowbite-react";

export default function NavbarWithUserAccountComponent({ name, profile }) {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Blog Posts
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              recusandae.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={profile}
              width={50}
              alt="not found"
              height={50}
              className="rounded-full"
            />
            <p>{name ?? "koko"}</p>
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
              type="button"
            >
              <span className="text-sm font-medium"> View Website </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
            onClick={handleLogout}
              className="inline-block rounded-sm bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
