import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderTestimonial = (props) => (
  <ContentLoader
    speed={2}
    width={356}
    height={536}
    viewBox="0 0 356 536"
    backgroundColor="#ffffff"
    foregroundColor="#dedede"
    {...props}
  >
    <path d="M 54 0 h 249 v 384 H 54 z" />
    <path d="M 0 384 h 356 v 152 H 0 z" />
    <circle cx="178" cy="437" r="40" />
    <path d="M 97 489 h 163 v 24 H 97 z" />
  </ContentLoader>
);

export default LoaderTestimonial;
