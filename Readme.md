# Learning React
 - React.createElement  ==> It is an object creating html element for React.
  const parent = React.createElement("Element name like(ex:-div)", {attributes(ex:-id="parent")}, single element need to render)
  React.createElement("Element name like(ex:-div)", {attributes(ex:-id="parent")}, [multiple element need to render])

 - const rootToBeRender = ReactDom.createRoot(document.getElementById("root")); ==> creating Dom for React

 - rootToBeRender.render(parent); ==> where html element is created to be rendeered

 - npx ==> used to execute the packages

# webpack / parcel -> Bundlers
 - Dev Build
 - hosting local server
 - HMR -> Hot Module Replacement(any changes is reflected on browser automatically after saving)
 - File watching algorithm  -> written in C++
 - Caching -> for faster build
 - Image optimization
 - Bundling files
 - Compressing files
 - Minification of file
 - Consistent hashing
 - Code splitting
 - Differential bundling -> supports older browsers
 - Diagnostic
 - Error handling
 - Tree Shaking - remove unused code
 - Different dev and prod build