const Home = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className="g-parallax-container">home</div>
      <button
        className="text-lg px-1 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
        type="button"
      >
        count+
      </button>
    </div>
  );
};

export default Home;
