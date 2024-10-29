import React from "react";
import PropsEx from "./component/PropsEx";
import PropsEx2 from "./component/PropsEx2";

const ParentPropsEx = () => {
    const charecter = [                             //array
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" },
        { name: "gowri", job: "developer" }
    ];

    const columns = ["Name", "Job", "Email"]; // Updated columns array

    return (
        <>
            <h1>This is Parent Component</h1>
            <PropsEx gfgcolor="red" usercolor="blue" />
            <PropsEx2 charsData={charecter} columns={columns} />
        </>
    );
};

export default ParentPropsEx;
