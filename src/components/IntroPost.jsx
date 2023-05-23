import React from 'react';

function IntroPost({ books }) {
	return (
		<>
			{books && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:px-15 lg:px-32">
					<div className="flex justify-center">
						<img
							src={books.volumeInfo.imageLinks.thumbnail}
							alt="book"
							className="rounded-lg object-cover w-64 h-auto"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h1 className="text-3xl font-bold mb-4">{books.volumeInfo.title}</h1>
						<div className="text-gray-600 mb-6">
							<p className="max-w-md ">{books.volumeInfo.description}</p>
						</div>
						<div className="flex items-center">
							<span className="text-lg font-semibold mr-2">Author:</span>
							<span className="text-lg">{books.volumeInfo.authors}</span>
						</div>
						<a
							href={books.volumeInfo.previewLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 max-w-max"
						>
							Preview
						</a>
					</div>
					
				</div>
			)}
		</>
	);
}

export default IntroPost;
