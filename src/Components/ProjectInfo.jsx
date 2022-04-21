import "./ProjectInfo.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc, getDocs, collection } from "../firebase";

function ProjectInfo() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(async () => {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists) {
      setDetailData(docSnap.data());
    } else {
      console.log("no such document in firebase 🔥");
    }
  }, [id]);

  return (
    <section>
      <div className="details-head">
        <h2>{detailData.title}</h2>
      </div>

      <div className="details-desc">
        <p>{detailData.description}</p>
      </div>

      <div>
          <img src={detailData.img} alt="" />
      </div>
    </section>
  );
}

export default ProjectInfo;
