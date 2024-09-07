import React, { useState, useEffect } from "react";

const Toaster = React.memo(({ type, message, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Mengatur timer untuk menutup toaster
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    // Menentukan warna dan ikon berdasarkan jenis toaster
    let bgColor, textColor, icon;
    if (type === "success") {
        bgColor = "bg-green-500";
        textColor = "text-white";
        icon = "✔️";
    } else if (type === "warning") {
        bgColor = "bg-yellow-500";
        textColor = "text-black";
        icon = "⚠️";
    } else if (type === "info") {
        bgColor = "bg-blue-500";
        textColor = "text-white";
        icon = "ℹ️";
    }

    return (
        <div
            className={`${bgColor} ${textColor} p-4 rounded-lg shadow-lg flex items-center space-x-2 fixed top-4 right-4 z-50 transition-opacity duration-300 ease-in-out`}
            style={{ minWidth: "250px" }}
        >
            <span className="text-2xl">{icon}</span>
            <span>{message}</span>
        </div>
    );
});

export default Toaster;
