import React from "react";
// import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
    //GET USER STATE
    const { user } = useSelector((state) => state.auth);

    const location = useLocation();

    return (
        <div>
            <div className="sidebar">
                <div className="menu">
                    {user?.role === "user" && (
                        <>
                            <div class="menu-head"
                            >
                                Hello {user?.name}!
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;