// import React from "react";
// import Spinner from "../spinner/spinner.component";
// import { gql } from "apollo-boost";
// import { Query } from "react-apollo";
// import CollectionOverview from "../../components/collection-overview/collection-overview.component";

// const GET_COLLECTIONS = gql`
//   {
//     getCollectionsByTitle(title: "hats") {
//       id
//       title
//       items {
//         id
//         name
//         price
//         imageUrl
//       }
//     }
//   }
// `;

// const CollectionsOverviewContainer = () => (
//   <Query query={GET_COLLECTIONS}>
//     {({ loading, error, data }) => {
//       console.log("LOADING", loading);
//       console.log("ERROR", error);
//       console.log("DATA", data);
//       if (loading || !(data || {}).collections) return <Spinner />;

//       return <CollectionOverview collections={data.collections} />;
//     }}
//   </Query>
// );
// export default CollectionsOverviewContainer;
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
