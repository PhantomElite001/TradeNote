import React from "react"
export default function Tab({ label, active}) {
    function handleClick() {
        if (!active) {
            // Handle tab click logic here, such as updating the active tab state in a parent component or navigating to a different page
        }
    }
    return (
        <div className={`tab ${active ? "active" : ""}`} onClick={handleClick}>
            {label}
        </div>
    )
}