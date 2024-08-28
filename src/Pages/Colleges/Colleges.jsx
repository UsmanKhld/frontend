import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Navbar } from "../../Components/index";
import "./Colleges.css";

export const Colleges = () => {
	const [college, setCollege] = React.useState([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [isFav, setIsFav] = useState(false);

	const handleFav = () => {
		setIsFav(!isFav);
	};

	const fetchData = async (pageNum, query) => {
		try {
			const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=DTDHnT3LGJbLZH0dtL0L0IqhSTp281KiKIrLBIJU&page=${pageNum}&per_page=15&fields=id,school.name,school.state,latest.student.size,latest.cost.tuition,school.school_url&${
				query ? `school.name=${query}` : ""
			}`;
			const result = await fetch(url);
			const json = await result.json();
			if (Array.isArray(json.results)) {
				setCollege((prev) =>
					pageNum === 0 ? json.results : [...prev, ...json.results]
				);
			} else {
				console.error("Unexpected data format:", json.results);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(page, searchQuery);
	}, [page, searchQuery]);

	const loadMore = () => {
		setPage((prev) => prev + 1);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setPage(0);
		setSearching(true);
	};

	return (
		<>
			<Navbar />
			<main>
				<div className="text-4xl text-blue-900 ">Colleges</div>

				<button className="mt-10 ml-10 search_input border-solid border-2 border-black rounded-full w-2/5 h-13 bg-white focus:outline-none cursor-text mb-16">
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="absolute fa-lg pt-0.5"
					/>
					<input
						type="text"
						placeholder="Search by college name"
						className="pl-10 w-full h-full text-lge bg-white focus:outline-none"
						value={searchQuery}
						onChange={handleSearchChange}
					/>
				</button>
				<p className="mr-16 text-2xl mb-6 ml-5">
					Find the right colleges for you
				</p>

				<hr className="border-t-2 border-gray-300 w-full mb-5" />

				<div>
					<div className="h-128 w-full overflow-y-scroll px-10">
						{college.map((c) => (
							<div
								key={c.id}
								className="college-card justify-self-center mb-2"
							>
								<div className="grid grid-cols-5 w-full border-solid border border-black focus:outline-none bg-gray-100 py-5 rounded-lg">
									<div className="pl-10 self-center">
										<FontAwesomeIcon
											onClick={handleFav}
											icon={faHeart}
											className="fa-3x mr-3 text-blue-800 hover:cursor-pointer hover:scale-105 transition-all"
										/>
									</div>
									<div className="p-1 col-span-2 self-center text-xl">
										{c["school.name"]}
									</div>
									<div className="pl-10 self-center">
										More Info
									</div>
									<div className="pl-10 self-center">
										{c["school.state"]}
									</div>
								</div>
							</div>
						))}
						<div className="text-center pb-10">
							{loading ? (
								<p>Loading...</p>
							) : page < 0 ? (
								<p> </p>
							) : (
								<button
									onClick={loadMore}
									className="load-more-button"
								>
									Show More Colleges
								</button>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Colleges;
