import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const CardDetails = () => {
  const [blogDetail, setBlogDetail] = useState([]);
  const { query } = useRouter();

  const getBlogData = async (id) => {
    const response = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await response.json();
    setBlogDetail(data);
  };

  useEffect(() => {
    getBlogData(query.id);
  }, []);
  return (
    <div className="container m-auto">
      <div dangerouslySetInnerHTML={{ __html: blogDetail?.body_html }}></div>
    </div>
  );
};

export default CardDetails;
