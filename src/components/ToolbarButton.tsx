export const ToolbarButton = ({ icon, children }: { icon: string; children?: string }) => {
    return (
        <button className={"toolbar-button"}>
            <div className={"toolbar-button-container"}>
                <div className={"toolbar-button-icon"} style={{ maskImage: `url(/${icon}.svg)` }}></div>
                <span className={"toolbar-button-label"}>{children}</span>
            </div>
        </button>
    )
}