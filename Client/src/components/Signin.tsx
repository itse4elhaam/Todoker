
export default function SignIn() {
  return (
		<div className="flex flex-col items-center justify-center space-x-6 h-screen bg-gray-100">
			<h1 className="text-6xl my-24 text-slate-800 font-bold">Sign In to Continue</h1>
			<div className="flex space-x-5">
				{" "}
				<button className="flex items-center transition-all duration-200 bg-red-500 text-white rounded-lg px-4 py-2 mb-2 border border-red-500 hover:bg-transparent hover:text-red-500 active:scale-95">
					Google
				</button>
				<button className="flex items-center transition-all duration-200 bg-sky-500 text-white rounded-lg px-4 py-2 mb-2 border border-sky-500 hover:bg-transparent hover:text-sky-500 active:scale-95">
					Facebook
				</button>
				<button className="flex items-center transition-all duration-200 bg-black text-white rounded-lg px-4 py-2 mb-2 border border-black hover:bg-transparent hover:text-black active:scale-95">
					Apple
				</button>
			</div>
		</div>
  );
};

