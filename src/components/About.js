import UserClass from "./UserClass";
import React from "react";

//componentDidMount will be called in postorder traversal order.
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Us Page</h1>
                <UserClass name={"First"} />
                <UserClass name={"Second"} />
                <UserClass name={"Third"} />
            </div>
        )
    }
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <UserClass name={"Hammad Ansari (Using Props)"} />
//         </div>
//     )
// }

export default About;