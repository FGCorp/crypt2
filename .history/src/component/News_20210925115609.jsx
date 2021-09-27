import React, { useEffect } from "react";
import { connect } from "react-redux";

function News({ getNews }) {
  useEffect(() => {
    getNews();
  }, []);
  return <div>News</div>;
}

const mapState = ({ news, loading }) => ({ ...news, ...loading });

const mapDispatch = ({ news }) => news;

export default connect(mapState, mapDispatch)(News);
