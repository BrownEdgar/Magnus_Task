import React from "react"
import ContentLoader from "react-content-loader"

const UsersLoader = (props) => (
  <ContentLoader
    speed={2}
    width={940}
    height={460}
    viewBox="0 0 940 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="22" y="145" rx="3" ry="3" width="471" height="98" />
    <rect x="20" y="282" rx="3" ry="3" width="471" height="98" />
    <rect x="20" y="7" rx="3" ry="3" width="471" height="98" />
    <rect x="528" y="282" rx="3" ry="3" width="471" height="98" />
    <rect x="529" y="145" rx="3" ry="3" width="471" height="98" />
    <rect x="529" y="6" rx="3" ry="3" width="471" height="98" />
  </ContentLoader>
)

export default UsersLoader