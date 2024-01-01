# Learning React
 - React.createElement  ==> It is an object creating html element for React.
   const parent = React.createElement("Element name like(ex:-div)", {attributes(ex:-id="parent")}, single element need to render)
                 React.createElement("Element name like(ex:-div)", {attributes(ex:-id="parent")}, [multiple element need to render])

 - const rootToBeRender = ReactDom.createRoot(document.getElementById("root")); ==> creating Dom for React

 - rootToBeRender.render(parent); ==> where html element is created to be rendered

 - JSX => HTML/XML like syntax but not HTML code
 - Before JSX code reaching to JS(JS engine) JSX is transpiled(done by webpack/parcel) by "BABEL" which resides inside the node_modules
 - Behind the scene JSX is creating React element(React.createElement)
 
 - npm ==> used to manage multiple packages
 - npx ==> used to execute the packages

# webpack / parcel / vide -> Bundlers
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

 # React Functional Component -> normal React Function returning JS Element(JSX)
  - const HeadingComponent = () => {
      return <h1>Learning React</h1>;
    }

  - COMPONENT COMPOSITION -> calling(or composing) one functional component inside another functional component

    const ComponentCompositionComponent = () => {
      <HeadingComponent/>
      return <h1>Learning React Component Composition</h1>;
    }

  - const HeadingComponent = () => {
      return <h1 className="head">
               { I CAN WRITE ANY KIND OF JAVASCRIPT CODE INSIDE THIS PARENTHESIS }
               Learning React
             </h1>;
    }
    for rendering component ==> root.render(<HeadingComponent />)