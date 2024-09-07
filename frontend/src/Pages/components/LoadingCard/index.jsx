import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

import { AppContext } from "../../../Context";

import "./styles.css";

const override = {
	borderColor: "red",
};

const LoadingCard = () => {
	const context = React.useContext(AppContext);

    if (context.loading) {
        return(
            <div className="loading-container">
                <SyncLoader
                    color={context.activeHighContrast ? "#FFFFFF": "#E0161E"}
                    loading={context.loading}
                    cssOverride={override}
                    size={15}
                    speedMultiplier={0.5}
                />
            </div>
        );
    }

}

export { LoadingCard };