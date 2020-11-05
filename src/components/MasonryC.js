import React from "react";
import Masonry from "react-masonry-css";

function MasonryC(props) {
  const {data} = props;
 
  return (
    <Masonry
      breakpointCols={5}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data?.map((e) => (
        <div key={e._id}>
          <img className="list-img" src={e.src} alt={e.name} />
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryC;
