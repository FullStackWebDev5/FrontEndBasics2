import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "./Photos/Photo.css";

const EnlargedPhoto = () => {
  const { id } = useParams();
  const [singlePhoto, setSinglePhoto] = useState({});

  useEffect(() => {
    const getSinglePhotoDetails = async () => {
      try {
        const res = await axios.get(`https://picsum.photos/id/${id}/info`);
        setSinglePhoto(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSinglePhotoDetails();
  }, [id]);

  const imgStyle = {
    height: "85vh",
    width: "90vw",
    margin: "30px 0 0",
  };
	
  return (
    <>
      {Object.keys(singlePhoto).length ? (
        <img src={singlePhoto.download_url} alt="single" style={imgStyle} />
      ) : (
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )}
    </>
  );
};

export default EnlargedPhoto;
