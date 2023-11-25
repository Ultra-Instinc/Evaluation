import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
	return (
		<div className='flex items-center justify-center'>
			<form className='flex w-[150px]   px-4 rounded-full bg-transparent border border-gray-300  outline-none items-center h-[40px] sm:w-auto py-2'>
				<SearchIcon style={{ color: "lightgray" }} />
				<input
					type='text'
					placeholder='Search...'
					className='  md:flex  w-[250px] bg-transparent outline-none  '
				/>
			</form>
		</div>
	);
};

export default Search;
