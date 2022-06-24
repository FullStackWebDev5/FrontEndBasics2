const EnlargedPhoto = () => {
  const imgStyle = {
    height: "85vh",
		width: '90vw',
    margin: "30px 0 0",
  };
  return (
    <img
      src="https://picsum.photos/id/1012/3973/2639"
      alt="single"
      style={imgStyle}
    />
  );
};

export default EnlargedPhoto;
