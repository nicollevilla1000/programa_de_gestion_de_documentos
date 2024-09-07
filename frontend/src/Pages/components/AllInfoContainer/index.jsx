import "./styles.css";

const AllInfoContainer = ({children}) => {
    return(
        <div className="all-info-container">
            {children}
        </div>
    );
}

const AllInfoGridContainer = ({children, padding=0, className="grid-075-125", gap=20}) => {
    return(
        <div className={`all-info-grid-container ${className}`} style={{
            gap: gap,
            padding: padding,
        }}>
            {children}
        </div>
    );
}

export { AllInfoContainer, AllInfoGridContainer };