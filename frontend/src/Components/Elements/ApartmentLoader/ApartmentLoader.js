import React from "react"
import ContentLoader from "react-content-loader"

const ApartmentLoader = () => (
    <ContentLoader
        speed={2}
        width={800}
        height={260}
        viewBox="0 0 1000 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="440" y="10" rx="3" ry="3" width="400" height="10" />
        <rect x="440" y="60" rx="3" ry="3" width="1000" height="10" />
        <rect x="440" y="110" rx="3" ry="3" width="700" height="10" />
        <rect x="440" y="160" rx="3" ry="3" width="10000" height="10" />
        <rect x="40" y="10" rx="3" ry="3" width="370" height="240" />
    </ContentLoader>
)

export default ApartmentLoader