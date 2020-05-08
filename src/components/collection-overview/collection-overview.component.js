import React from "react";

import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
