import React from "react"
import ContentLoader from "react-content-loader"

const UsersLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1440}
    height={500}
    viewBox="0 0 1440 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#dceae3"
    {...props}
  >
    <rect x="20" y="40" rx="3" ry="3" width="680" height="180" />
    <rect x="20" y="262" rx="3" ry="3" width="680" height="180" />
    <rect x="747" y="263" rx="3" ry="3" width="680" height="180" />
    <rect x="747" y="40" rx="3" ry="3" width="680" height="180" />
  </ContentLoader>
)

export default UsersLoader