import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
    <ContentLoader
        className="product-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#e0e0e0"
        foregroundColor="#ffffff">
        <rect x="10" y="280" rx="0" ry="0" width="280" height="185" />
        <circle cx="140" cy="125" r="125" />
    </ContentLoader>
);
