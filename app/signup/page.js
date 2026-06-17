"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // NEW: error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // clear previous errors

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // API returned an error (400, 409 email already exists, 500, etc.)
        setError(data.message || "Signup failed. Please try again.");
        return; // stop here, don't redirect
      }

      // Clear form
      setName("");
      setEmail("");
      setPassword("");

      // Redirect to login
      router.push("/login");

    } catch (err) {
      // Network error or API crashed
      setError("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false); // ALWAYS runs, success or fail
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl p-10 border rounded-lg shadow-sm">

        <h1 className="text-3xl font-bold text-green-700 text-center">
          Create Account
        </h1>

        {/* Show error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-md placeholder-gray-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md placeholder-gray-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-md w-full pr-10 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-md disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Signup"}
          </button>

        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <a href="/login" className="text-green-600 ml-1">Login</a>
        </p>

      </div>
    </div>
  );
}